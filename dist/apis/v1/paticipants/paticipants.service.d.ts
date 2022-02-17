import * as PaticipantDTO from './classes/paticipants.dto';
import { PaticipantsCreateService } from './services.helper/create/paticipants.create.service';
import { PaticipantsFindService } from './services.helper/find/paticipants.find.service';
import { PaticipantsResolverFieldService } from './services.helper/resolveField/paticipants.resolveField.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { PaticipantsDeleteService } from './services.helper/delete/paticipants.delete.service';
import { PaticipantsPutService } from './services.helper/put/paticipants.put.service';
export declare class PaticipantsService {
    private readonly paticipantsCreateService;
    private readonly paticipantsDeleteService;
    private readonly paticipantsFindService;
    private readonly paticipantsPutService;
    private readonly paticipantsResolveFieldService;
    constructor(paticipantsCreateService: PaticipantsCreateService, paticipantsDeleteService: PaticipantsDeleteService, paticipantsFindService: PaticipantsFindService, paticipantsPutService: PaticipantsPutService, paticipantsResolveFieldService: PaticipantsResolverFieldService);
    createPaticipant(data: PaticipantDTO.CreatePaticipantInput, user: IPayLoadToken): Promise<import("../users/classes/user.model").UserDocument>;
    deleteByMemberAndProject(data: PaticipantDTO.DeletePaticipantInput, user: IPayLoadToken): Promise<import("./classes/paticipant.model").PaticipantDocument>;
    deleteByProjectId(_projectId: string): Promise<void>;
    deleteByCollboratorsId(_collaboratorsId: string[]): Promise<void>;
    getProjectsBySpacesAndMember(projectsBySpacesAndMemberInput: PaticipantDTO.ProjectsBySpacesAndMemberInput, _memberId: string): Promise<import("../projects/classes/project.model").ProjectDocument[]>;
    getProjectsByMemberId(_memberId: string): Promise<import("./classes/paticipant.model").PaticipantDocument[]>;
    getUsersBelongProject(getUsersBelongProjectInput: PaticipantDTO.GetUsersBelongProjectInput): Promise<import("./classes/paticipant.model").PaticipantDocument[]>;
    findPaticipantByProjectAndMember(x: PaticipantDTO.GetPaticipantByProjectAndMemberInput, user: IPayLoadToken, returnNull: boolean): Promise<import("./classes/paticipant.model").PaticipantDocument>;
    changeRoleOfMemberOnPaticipant(changeRoleOfMemberInput: PaticipantDTO.ChangeRoleOfMemberInput, user: IPayLoadToken): Promise<import("./classes/paticipant.model").PaticipantDocument>;
    getCollaborator(_id: string): Promise<import("../collaborators/classes/collaborator.model").CollaboratorDocument>;
    getProject(_id: string): Promise<import("../projects/classes/project.model").ProjectDocument>;
    getUser(_id: string): Promise<import("../users/classes/user.model").UserDocument>;
}
