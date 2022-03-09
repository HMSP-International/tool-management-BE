import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskModel, TaskDocument } from '../../classes/task.model';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as TaskDto from '../../classes/tasks.dto';
import { ListsService } from 'apis/v1/lists/lists.service';
import { ProjectsService } from 'apis/v1/projects/projects.service';
import { PaticipantsService } from 'apis/v1/paticipants/paticipants.service';
import { DragAndDrop } from '../../classes/task.entity';
import { IEstimatedTime } from '../../classes/estimatedTime';
import moment from 'moment';

@Injectable()
export class TasksPutService {
	constructor (
		@InjectModel(TaskModel.name) private taskEntity: Model<TaskDocument>,
		@Inject(forwardRef(() => ListsService))
		private readonly listsService: ListsService,
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
		@Inject(forwardRef(() => PaticipantsService))
		private readonly paticipantsService: PaticipantsService,
	) {}

	insertAt (array: any[], index: number, ...elementsArray: any) {
		array.splice(index, 0, ...elementsArray);
	}

	async resetOrder (_listId: string): Promise<void> {
		const tasks = await this.taskEntity.find({ _listId });

		const arr = [];
		for (const task of tasks) {
			task.order = task.order - 1;
			arr.push(task.save());
		}

		Promise.all(arr);
	}

	async checkPermistion (task: TaskDocument, user: IPayLoadToken) {
		const list = await this.listsService.findById(task._listId);

		// check project
		let count = 0;
		const project = await this.projectsService.findById(list._projectId);
		if (project.owner.toString() !== user._id) count++;
		// check admin in paticipants
		const paticipant = await this.paticipantsService.findPaticipantByProjectAndMember(
			{ _projectId: project._id },
			user,
			true,
		);
		if (paticipant === null || paticipant.role === 'member') count++;
		if (count === 2) throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
	}

	async checkPermistion2 (task: TaskDocument, user: IPayLoadToken) {
		const list = await this.listsService.findById(task._listId);

		// check project
		let count = 0;
		const project = await this.projectsService.findById(list._projectId);
		if (project.owner.toString() !== user._id) count++;
		// check admin in paticipants
		const paticipant = await this.paticipantsService.findPaticipantByProjectAndMember(
			{ _projectId: project._id },
			user,
			true,
		);
		if (paticipant === null) count++;
		if (count === 2) throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
	}

	async changeTaskName (getTasksInput: TaskDto.ChangeTaskNameInput, user: IPayLoadToken): Promise<TaskDocument> {
		const { _taskId, name } = getTasksInput;
		const task = await this.taskEntity.findById(_taskId);
		if (task === null) {
			throw new HttpException('Not Found taskId', HttpStatus.NOT_FOUND);
		}
		// check permissions
		this.checkPermistion(task, user);

		return await this.taskEntity.findByIdAndUpdate(_taskId, { name }, { new: true });
	}

	async changeAssignee (
		changeAssigneeInput: TaskDto.ChangeAssigneeInput,
		user: IPayLoadToken,
	): Promise<TaskDocument> {
		const { _taskId, assignee } = changeAssigneeInput;
		const task = await this.taskEntity.findById(_taskId);
		if (task === null) {
			throw new HttpException('Not Found taskId', HttpStatus.NOT_FOUND);
		}

		// check permissions
		this.checkPermistion(task, user);

		return await this.taskEntity.findByIdAndUpdate(_taskId, { assignee }, { new: true });
	}

	async changeDescriptions (
		changeAssigneeInput: TaskDto.ChangeDescriptionsInput,
		user: IPayLoadToken,
	): Promise<TaskDocument> {
		const { _taskId, descriptions } = changeAssigneeInput;
		const task = await this.taskEntity.findById(_taskId);
		if (task === null) {
			throw new HttpException('Not Found taskId', HttpStatus.NOT_FOUND);
		}

		// check permissions
		this.checkPermistion(task, user);

		return await this.taskEntity.findByIdAndUpdate(_taskId, { descriptions }, { new: true });
	}

	async changeListOfTask (
		changeListOfTaskInput: TaskDto.ChangeListOfTaskInput,
		user: IPayLoadToken,
	): Promise<TaskDocument> {
		const { _taskId, _listId } = changeListOfTaskInput;

		const task = await this.taskEntity.findById(_taskId);
		if (task === null) {
			throw new HttpException('Not Found taskId', HttpStatus.NOT_FOUND);
		}

		this.checkPermistion2(task, user);

		// reset task of old list
		// all task with order greater than the task you want to change => o order will be minus by 1 => order = order - 1
		const order = await this.taskEntity.countDocuments({ _listId });
		const oldTasksOfList = await this.taskEntity.find({ _listId: task._listId, order: { $gt: task.order } });

		for (const oldTask of oldTasksOfList) {
			oldTask.order = oldTask.order - 1;
			oldTask.save();
		}

		const estimatedTime = await this.changeEstimateTime(task, _listId);
		const taskUpdated = await this.taskEntity.findByIdAndUpdate(
			_taskId,
			{ _listId, order, estimatedTime },
			{ new: true },
		);
		return taskUpdated;
	}

	async changeListOfTaskWithDragAndDropInOneList (
		changeListOfTaskWithDragAndDropInput: TaskDto.ChangeListOfTaskWithDragAndDropIn1ListInput,
		user: IPayLoadToken,
	): Promise<DragAndDrop> {
		const { _taskId, destination } = changeListOfTaskWithDragAndDropInput;

		const task = await this.taskEntity.findById(_taskId);
		if (task === null) {
			throw new HttpException('Not Found taskId', HttpStatus.NOT_FOUND);
		}
		const source = {
			_listId: task._listId,
			index: task.order,
		};

		this.checkPermistion2(task, user);

		// reset task of old list
		const tasksOfList = await this.taskEntity.find({ _listId: task._listId });
		const indexTask = tasksOfList.findIndex(item => item._id.toString() === _taskId);

		if (indexTask >= 0) {
			const [ taskRemoved ] = tasksOfList.splice(indexTask, 1);

			const min = Math.min(destination.index, source.index);
			const max = Math.max(destination.index, source.index);
			this.insertAt(tasksOfList, destination.index, taskRemoved);
			for (let i = min; i <= max; i++) {
				tasksOfList[i].order = i;
				tasksOfList[i].save();
			}

			const dragAndDrop = {
				_taskId,
				destination: { ...destination, _listId: task._listId },
				source,
			};

			return dragAndDrop;
		}
	}

	async changeListOfTaskWithDragAndDropInAnotherList (
		changeListOfTaskWithDragAndDropInAnotherListInput: TaskDto.ChangeListOfTaskWithDragAndDropInAnotherListInput,
		user: IPayLoadToken,
	): Promise<DragAndDrop> {
		const { _taskId, destination } = changeListOfTaskWithDragAndDropInAnotherListInput;

		const task = await this.taskEntity.findById(_taskId);
		if (task === null) {
			throw new HttpException('Not Found taskId', HttpStatus.NOT_FOUND);
		}
		const source = {
			_listId: task._listId,
			index: task.order,
		};

		this.checkPermistion2(task, user);

		// reset task of old list
		const tasksOfOldList = await this.taskEntity.find({ _listId: task._listId });
		const tasksOfNewList = await this.taskEntity.find({ _listId: destination._listId });
		const indexTask = tasksOfOldList.findIndex(item => item._id.toString() === _taskId);

		if (indexTask >= 0) {
			const estimatedTime = await this.changeEstimateTime(task, destination._listId);
			await this.taskEntity.findByIdAndUpdate(_taskId, { estimatedTime });

			const [ taskRemoved ] = tasksOfOldList.splice(indexTask, 1);
			taskRemoved._listId = destination._listId;

			for (let i = indexTask; i < tasksOfOldList.length; i++) {
				tasksOfOldList[i].order = i;
				tasksOfOldList[i].save();
			}
			this.insertAt(tasksOfNewList, destination.index, taskRemoved);
			for (let i = destination.index; i < tasksOfNewList.length; i++) {
				tasksOfNewList[i].order = i;
				tasksOfNewList[i].save();
			}

			const dragAndDrop = {
				_taskId,
				destination,
				source,
			};

			return dragAndDrop;
		}
	}

	async changeEstimateTime (oldTask: TaskDocument, newListId: string): Promise<IEstimatedTime[]> {
		const { estimatedTime } = oldTask;

		const filteredOldList = estimatedTime.filter(e => e._listId.toString() === oldTask._listId.toString());
		const m = this.countDown(new Date(filteredOldList[0].lastTime), new Date(), filteredOldList[0].totalTime);
		filteredOldList.map(item => ({ ...item, totalTime: m, lastTime: null }));

		const filteredNewList = estimatedTime.filter(e => e._listId.toString() === newListId);
		if (filteredNewList.length === 0) {
			estimatedTime.push({
				_listId: newListId,
				totalTime: 0,
				lastTime: Date(),
			});
		}
		else {
			filteredNewList[0].lastTime = Date();
		}

		return estimatedTime;
	}

	countDown (then: Date, now: Date, totalTime: number): number {
		const diffMs = now.getTime() - then.getTime();
		const diffDays = Math.floor(diffMs / 86400000); // days
		const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
		const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
		return diffMins + totalTime + diffDays * 1440 + diffHrs * 60;
	}
}
