import { UsersService } from 'apis/v1/users/users.service';
import { SpacesService } from 'apis/v1/spaces/spaces.service';
import { SpaceDocument } from 'apis/v1/spaces/classes/space.model';
import { UserDocument } from 'apis/v1/users/classes/user.model';
export declare class CollaboratorsResolverFieldService {
    private usersService;
    private spacesService;
    constructor(usersService: UsersService, spacesService: SpacesService);
    getSpace(_id: string): Promise<SpaceDocument>;
    getUser(_id: string): Promise<UserDocument>;
}
