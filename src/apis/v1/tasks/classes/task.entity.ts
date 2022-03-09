import { Timestamp } from './timestamp';
import { EstimatedTime } from './estimatedTime';
import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'apis/v1/users/classes/user.entity';
import { DraggableLocationAnotherList } from './tasks.dto';
import { Project } from 'apis/v1/projects/classes/project.entity';
import { Comment } from 'apis/v1/comments/classes/comment.entity';

@ObjectType()
export class Task {
	@Field(() => String)
	_id: string;

	@Field(() => String)
	name: string;

	@Field(() => String)
	_listId: string;

	@Field(() => Number)
	order: number;

	@Field(() => User)
	reporter: string;

	@Field(() => Timestamp)
	timestamp: Timestamp;

	@Field(() => Project)
	_projectId: string;

	@Field(() => User, { nullable: true })
	assignee: string;

	@Field(() => String)
	descriptions: string;

	@Field(() => [ Comment ])
	comments: string[];

	@Field(() => Number)
	stt: number;

	@Field(() => [ EstimatedTime ])
	estimatedTime: EstimatedTime[];
}

@ObjectType()
export class Draggable {
	@Field(() => String)
	_listId: string;

	@Field(() => Number)
	index: number;
}

@ObjectType()
export class DragAndDrop {
	@Field(() => Draggable)
	destination: DraggableLocationAnotherList;

	@Field(() => Draggable)
	source: DraggableLocationAnotherList;

	@Field(() => String)
	_taskId: string;
}
