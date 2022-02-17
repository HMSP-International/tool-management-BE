import { ProjectsService } from 'apis/v1/projects/projects.service';
import { Model } from 'mongoose';
import { CollaboratorsService } from 'apis/v1/collaborators/collaborators.service';
import { PaticipantDocument } from '../../classes/paticipant.model';
import * as PaticipantDTO from '../../classes/paticipants.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { UsersService } from 'apis/v1/users/users.service';
import { UserDocument } from 'apis/v1/users/classes/user.model';
export declare class PaticipantsCreateService {
    private paticipantEntity;
    private readonly projectsService;
    private readonly collaboratorsService;
    private readonly usersService;
    constructor(paticipantEntity: Model<PaticipantDocument>, projectsService: ProjectsService, collaboratorsService: CollaboratorsService, usersService: UsersService);
    create(data: PaticipantDTO.CreatePaticipantInput, user: IPayLoadToken): Promise<UserDocument>;
}
