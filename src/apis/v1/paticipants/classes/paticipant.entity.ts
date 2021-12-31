import { Collaborator } from '../../collaborators/classes/collaborator.entity';
import { ObjectType, Field } from '@nestjs/graphql';
import { Project } from '../../projects/classes/project.entity';
import { User } from '../../users/classes/user.entity';

@ObjectType()
export class Paticipant {
	@Field(() => String)
	_id: string;

	@Field(() => Collaborator)
	_collaboratorId: string;

	@Field(() => Project)
	_projectId: string;

	@Field(() => String)
	role: string;

	@Field(() => User)
	_memberId: string;
}
