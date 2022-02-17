import { Paticipant } from './classes/paticipant.entity';
import { PaticipantsService } from './paticipants.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as PaticipantDTO from './classes/paticipants.dto';
export declare class PaticipantsResolver {
    private readonly paticipantsService;
    constructor(paticipantsService: PaticipantsService);
    createPaticipant(user: IPayLoadToken, createPaticipantInput: PaticipantDTO.CreatePaticipantInput): Promise<import("../users/classes/user.model").UserDocument>;
    deletePaticipant(user: IPayLoadToken, deletePaticipantInput: PaticipantDTO.DeletePaticipantInput): Promise<import("./classes/paticipant.model").PaticipantDocument>;
    getProjectsBySpacesAndMember(user: IPayLoadToken, projectsBySpacesAndMemberInput: PaticipantDTO.ProjectsBySpacesAndMemberInput): Promise<import("../projects/classes/project.model").ProjectDocument[]>;
    getUsersBelongProject(getUsersBelongProjectInput: PaticipantDTO.GetUsersBelongProjectInput): Promise<import("./classes/paticipant.model").PaticipantDocument[]>;
    findPaticipantByProjectAndMember(getPaticipantByProjectAndMemberInput: PaticipantDTO.GetPaticipantByProjectAndMemberInput, user: IPayLoadToken): Promise<import("./classes/paticipant.model").PaticipantDocument>;
    changeRoleOfMemberOnPaticipant(user: IPayLoadToken, changeRoleOfMemberInput: PaticipantDTO.ChangeRoleOfMemberInput): Promise<import("./classes/paticipant.model").PaticipantDocument>;
    _collaboratorId(paticipant: Paticipant): Promise<import("../collaborators/classes/collaborator.model").CollaboratorDocument>;
    _projectId(paticipant: Paticipant): Promise<import("../projects/classes/project.model").ProjectDocument>;
    _memberId(paticipant: Paticipant): Promise<import("../users/classes/user.model").UserDocument>;
}
