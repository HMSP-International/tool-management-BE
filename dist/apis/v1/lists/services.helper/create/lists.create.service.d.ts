import { Model } from 'mongoose';
import { ListDocument } from '../../classes/list.model';
import * as ListDTO from '../../classes/lists.dto';
import { ProjectsService } from 'apis/v1/projects/projects.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
export declare class ListsCreateService {
    private listEntity;
    private readonly projectsService;
    constructor(listEntity: Model<ListDocument>, projectsService: ProjectsService);
    create(createListInput: ListDTO.CreateListInput, user: IPayLoadToken): Promise<ListDocument>;
}
