import { forwardRef, Inject, Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskModel, TaskDocument } from '../../classes/task.model';

import * as TaskDto from '../../classes/tasks.dto';
import { Task } from '../../classes/task.entity';

import { ListsService } from '../../../lists/lists.service';

@Injectable()
export class TasksCreateService {
	constructor (
		@InjectModel(TaskModel.name) private taskEntity: Model<TaskDocument>,
		@Inject(forwardRef(() => ListsService))
		private readonly listsService: ListsService,
	) {}

	async createTask (getTasksInput: TaskDto.CreateTaskInput): Promise<Task> {
		const { _listId, name } = getTasksInput;

		// check _listId
		await this.listsService.findById(_listId);

		const newTask = new this.taskEntity({ _listId, name });

		return await newTask.save();
	}
}
