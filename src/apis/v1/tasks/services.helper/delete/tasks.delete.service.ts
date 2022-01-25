import { Inject, Injectable, forwardRef } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { CommentsService } from 'apis/v1/comments/comments.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { Model } from 'mongoose';
import { TaskModel, TaskDocument } from '../../classes/task.model';

import * as TaskDto from '../../classes/tasks.dto';

@Injectable()
export class TasksDeleteService {
	constructor (
		@InjectModel(TaskModel.name) private taskEntity: Model<TaskDocument>,
		@Inject(forwardRef(() => CommentsService))
		private readonly commentsService: CommentsService,
	) {}

	async deleteTasks (deleteTaskInput: TaskDto.DeleteTaskInput, user: IPayLoadToken): Promise<TaskDocument[]> {
		const { _taskIds } = deleteTaskInput;

		// check _listId
		const arrayPromise = [];
		_taskIds.forEach(_id => {
			const taskDeleted = this.taskEntity.findByIdAndDelete(_id);

			if (taskDeleted) {
				this.commentsService.deleteByTaskId(_id);
				arrayPromise.push(taskDeleted);
			}
		});

		return await Promise.all(arrayPromise);
	}

	async deleteTasksByListId (_listId: string): Promise<void> {
		const tasks = await this.taskEntity.find({ _listId });
		const tasksDeleting = [];

		for (let task of tasks) {
			const deleted = this.taskEntity.findByIdAndDelete(task._id);

			tasksDeleting.push(deleted);
		}

		const tasksDeleted = await Promise.all(tasksDeleting);

		for (let taskDeleted of tasksDeleted) {
			this.removeComment(taskDeleted._id, taskDeleted.comments);
			this.commentsService.deleteByTaskId(taskDeleted._id);
		}
	}

	async removeComment (_taskId: string, _commentId: string | string[] | null): Promise<void> {
		if (typeof _commentId === 'string') {
			const task = await this.taskEntity.findById(_taskId);

			task.comments = task.comments.filter(c => c.toString() !== _commentId);
			task.save();
		}
		else if (_commentId === null) {
			return;
		}
		else {
			const task = await this.taskEntity.findById(_taskId);

			for (let commentId of _commentId) {
				task.comments = task.comments.filter(c => c.toString() !== commentId);
			}

			task.save();
		}
	}
}
