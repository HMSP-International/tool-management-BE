import { Model } from 'mongoose';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { SpaceDocument } from '../../classes/space.model';
import * as SpaceDTO from '../../classes/spaces.dto';
import { CollaboratorsService } from 'apis/v1/collaborators/collaborators.service';
export declare class SpacesFindService {
    private spaceEntity;
    private readonly collaboratorsService;
    constructor(spaceEntity: Model<SpaceDocument>, collaboratorsService: CollaboratorsService);
    findAll(user: IPayLoadToken): Promise<SpaceDocument[]>;
    findBySpaceAndOwner(_id: string, owner: string): Promise<SpaceDocument | null>;
    findById(_id: string): Promise<SpaceDocument>;
    findByMemberId({ _memberId }: SpaceDTO.FindByMemberId, { _id }: IPayLoadToken): Promise<SpaceDocument[]>;
}
