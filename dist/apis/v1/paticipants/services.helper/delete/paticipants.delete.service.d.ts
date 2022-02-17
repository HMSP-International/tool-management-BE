import { Model } from 'mongoose';
import { PaticipantDocument } from '../../classes/paticipant.model';
import * as PaticipantDTO from '../../classes/paticipants.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { CollaboratorsService } from 'apis/v1/collaborators/collaborators.service';
import { ProjectsService } from 'apis/v1/projects/projects.service';
export declare class PaticipantsDeleteService {
    private paticipantEntity;
    private readonly collaboratorsService;
    private readonly projectsService;
    constructor(paticipantEntity: Model<PaticipantDocument>, collaboratorsService: CollaboratorsService, projectsService: ProjectsService);
    deleteByMemberAndProject(data: PaticipantDTO.DeletePaticipantInput, user: IPayLoadToken): Promise<PaticipantDocument>;
    deleteByProjectId(_projectId: string): Promise<void>;
    deleteByCollboratorId(_collaboratorsId: string[]): Promise<void>;
}
