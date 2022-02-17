import { Model } from 'mongoose';
import { SpaceDocument } from '../../classes/space.model';
import * as SpaceDTO from '../../classes/spaces.dto';
export declare class SpacesPutService {
    private spaceEntity;
    constructor(spaceEntity: Model<SpaceDocument>);
    changeName(changeNameSpaceInput: SpaceDTO.ChangeNameSpaceInput): Promise<SpaceDocument>;
}
