import { Project } from './../projects/project.entity';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class List {
	@Field(() => String)
	_id: string;

	@Field(() => String)
	_projectId: string;

	@Field(() => String)
	name: string;

	@Field(() => Number)
	order: number;
}
