import { CollaboratorsService } from 'apis/v1/collaborators/collaborators.service';
import { Model } from 'mongoose';
import { ProjectsService } from 'apis/v1/projects/projects.service';
import { SpaceDocument } from '../../classes/space.model';
import { SpacesFindService } from '../find/spaces.find.service';
export declare class SpacesDeleteService {
    private spaceEntity;
    private readonly projectsService;
    private readonly spacesFindService;
    private readonly collaboratorsService;
    constructor(spaceEntity: Model<SpaceDocument>, projectsService: ProjectsService, spacesFindService: SpacesFindService, collaboratorsService: CollaboratorsService);
    deleteSpaceById(_workSpaceId: string, _userId: string): Promise<SpaceDocument>;
}
