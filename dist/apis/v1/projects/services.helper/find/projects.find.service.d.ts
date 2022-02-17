import { Model } from 'mongoose';
import * as ProjectDTO from '../../classes/projects.dto';
import { ProjectDocument } from '../../classes/project.model';
import { PaticipantsService } from 'apis/v1/paticipants/paticipants.service';
export declare class ProjectsFindService {
    private projectEntity;
    private readonly paticipantsService;
    constructor(projectEntity: Model<ProjectDocument>, paticipantsService: PaticipantsService);
    findAll(_spacesId: string[], _userId: string): Promise<ProjectDocument[]>;
    findById(_id: string): Promise<ProjectDocument>;
    findByListId(_ids: string[]): Promise<ProjectDocument[]>;
    findAllByCollaborator(getProjectsInput: ProjectDTO.GetProjectsInput): Promise<ProjectDocument[]>;
    findByMemberId(getProjectsInput: ProjectDTO.GetProjectsInput): Promise<ProjectDocument[]>;
    findByMemberIdAndSpaceId({ _memberId, _spaceId, }: ProjectDTO.FindByMemberIdAndSpaceIdInput): Promise<ProjectDocument[]>;
}
