import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as SpaceDTO from './classes/spaces.dto';
import { SpacesCreateService } from './services.helper/create/spaces.create.service';
import { SpacesDeleteService } from './services.helper/delete/spaces.delete.service';
import { SpacesFindService } from './services.helper/find/spaces.find.service';
import { SpacesPutService } from './services.helper/put/spaces.put.service';
export declare class SpacesService {
    private readonly spacesCreateService;
    private readonly spacesFindService;
    private readonly spacesDeleteService;
    private readonly spacesPutService;
    constructor(spacesCreateService: SpacesCreateService, spacesFindService: SpacesFindService, spacesDeleteService: SpacesDeleteService, spacesPutService: SpacesPutService);
    findAll(user: IPayLoadToken): Promise<import("./classes/space.model").SpaceDocument[]>;
    findBySpaceAndOwner(_id: string, owner: string): Promise<import("./classes/space.model").SpaceDocument>;
    findById(_id: string): Promise<import("./classes/space.model").SpaceDocument>;
    findByMemberId(findByMemberId: SpaceDTO.FindByMemberId, user: IPayLoadToken): Promise<import("./classes/space.model").SpaceDocument[]>;
    create(name: string, user: IPayLoadToken): Promise<import("./classes/space.model").SpaceDocument[]>;
    changeName(changeNameSpaceInput: SpaceDTO.ChangeNameSpaceInput): Promise<import("./classes/space.model").SpaceDocument>;
    deleteSpaceById(_spaceId: string, _userId: string): Promise<import("./classes/space.model").SpaceDocument>;
}
