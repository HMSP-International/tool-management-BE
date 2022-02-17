import { PaticipantsService } from 'apis/v1/paticipants/paticipants.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { Model } from 'mongoose';
import { CollaboratorDocument } from '../../classes/collaborator.model';
import * as CollaboratorDTO from '../../classes/collaborators.dto';
export declare class CollaboratorsDeleteService {
    private collaboratorEntity;
    private paticipantsService;
    constructor(collaboratorEntity: Model<CollaboratorDocument>, paticipantsService: PaticipantsService);
    deleteBySpaceId(_workSpaceId: string): Promise<void>;
    deleteByMemberAndSpace({ _memberId, _workSpaceId }: CollaboratorDTO.DeleteByUserAndSpaceInput, user: IPayLoadToken): Promise<CollaboratorDocument>;
    deleteByMemberId: (_memberId: string) => Promise<void>;
}
