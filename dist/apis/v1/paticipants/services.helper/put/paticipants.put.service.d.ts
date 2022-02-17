import { Model } from 'mongoose';
import { PaticipantDocument } from '../../classes/paticipant.model';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as PaticipantDTO from '../../classes/paticipants.dto';
import { CollaboratorsService } from 'apis/v1/collaborators/collaborators.service';
export declare class PaticipantsPutService {
    private paticipantEntity;
    private readonly collaboratorsService;
    constructor(paticipantEntity: Model<PaticipantDocument>, collaboratorsService: CollaboratorsService);
    changeRoleOfMemberOnPaticipant(changeRoleOfMemberInput: PaticipantDTO.ChangeRoleOfMemberInput, user: IPayLoadToken): Promise<PaticipantDocument>;
}
