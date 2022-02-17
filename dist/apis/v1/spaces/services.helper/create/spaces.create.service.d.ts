import { Model } from 'mongoose';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { SpaceDocument } from '../../classes/space.model';
import { SpacesFindService } from '../find/spaces.find.service';
export declare class SpacesCreateService {
    private spaceEntity;
    private readonly spacesFindService;
    constructor(spaceEntity: Model<SpaceDocument>, spacesFindService: SpacesFindService);
    create(name: string, user: IPayLoadToken): Promise<SpaceDocument[]>;
}
