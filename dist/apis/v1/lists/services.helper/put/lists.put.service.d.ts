import * as ListDTO from '../../classes/lists.dto';
import { Model } from 'mongoose';
import { ListDocument } from '../../classes/list.model';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { ProjectsService } from 'apis/v1/projects/projects.service';
export declare class ListsPutService {
    private listEntity;
    private readonly projectsService;
    constructor(listEntity: Model<ListDocument>, projectsService: ProjectsService);
    resetListOrder(_projectId: string): Promise<void>;
    changeNameList({ name, _listId }: ListDTO.ChangeNameListInput, user: IPayLoadToken): Promise<ListDocument>;
}
