import * as PaticipantDTO from '../../classes/paticipants.dto';
import { CollaboratorsService } from 'apis/v1/collaborators/collaborators.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { ProjectsService } from 'apis/v1/projects/projects.service';
import { Model } from 'mongoose';
import { PaticipantDocument } from '../../classes/paticipant.model';
export declare class PaticipantsFindService {
    private paticipantEntity;
    private readonly collaboratorsService;
    private readonly projectsService;
    constructor(paticipantEntity: Model<PaticipantDocument>, collaboratorsService: CollaboratorsService, projectsService: ProjectsService);
    getProjectsBySpacesAndMember({ _spaceIds }: PaticipantDTO.ProjectsBySpacesAndMemberInput, _memberId: string): Promise<import("../../../projects/classes/project.model").ProjectDocument[]>;
    getUsersBelongProject({ _projectId, }: PaticipantDTO.GetUsersBelongProjectInput): Promise<PaticipantDocument[]>;
    getProjectByMemberId(_memberId: string): Promise<PaticipantDocument[]>;
    findPaticipantByProjectAndMember({ _projectId }: PaticipantDTO.GetPaticipantByProjectAndMemberInput, user: IPayLoadToken, returnNull: boolean): Promise<PaticipantDocument | null>;
}
