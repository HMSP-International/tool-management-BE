import { Model } from 'mongoose';
import { ListDocument } from '../../classes/list.model';
import * as ListDTO from '../../classes/lists.dto';
import { ProjectsService } from 'apis/v1/projects/projects.service';
export declare class ListsFindService {
    private listEntity;
    private readonly projectsService;
    constructor(listEntity: Model<ListDocument>, projectsService: ProjectsService);
    findAllByProjectId(getListsInput: ListDTO.GetListsInput): Promise<ListDocument[]>;
    findById(_id: string): Promise<ListDocument | null>;
}
