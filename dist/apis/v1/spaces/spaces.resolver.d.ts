import { SpacesService } from './spaces.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as SpaceDTO from './classes/spaces.dto';
export declare class SpacesResolver {
    private readonly spacesService;
    constructor(spacesService: SpacesService);
    getSpaces(user: IPayLoadToken): Promise<import("./classes/space.model").SpaceDocument[]>;
    getSpacesByMemberId(user: IPayLoadToken, findByMemberId: SpaceDTO.FindByMemberId): Promise<import("./classes/space.model").SpaceDocument[]>;
    createSpace(user: IPayLoadToken, createSpaceInput: SpaceDTO.CreateSpaceInput): Promise<import("./classes/space.model").SpaceDocument[]>;
    changeNameSpace(changeNameSpaceInput: SpaceDTO.ChangeNameSpaceInput): Promise<import("./classes/space.model").SpaceDocument>;
    deleteSpaceById(deleteSpaceInput: SpaceDTO.DeleteSpaceInput, user: IPayLoadToken): Promise<import("./classes/space.model").SpaceDocument>;
}
