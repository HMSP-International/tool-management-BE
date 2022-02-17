import * as ListDTO from './classes/lists.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { ListsCreateService } from './services.helper/create/lists.create.service';
import { ListsDeleteService } from './services.helper/delete/lists.delete.service';
import { ListsFindService } from './services.helper/find/lists.find.service';
import { ListsPutService } from './services.helper/put/lists.put.service';
export declare class ListsService {
    private readonly listsCreateService;
    private readonly listsDeleteService;
    private readonly listsFindService;
    private readonly listsPutService;
    constructor(listsCreateService: ListsCreateService, listsDeleteService: ListsDeleteService, listsFindService: ListsFindService, listsPutService: ListsPutService);
    create(createListInput: ListDTO.CreateListInput, user: IPayLoadToken): Promise<import("./classes/list.model").ListDocument>;
    findAllByProjectId(getListsInput: ListDTO.GetListsInput): Promise<import("./classes/list.model").ListDocument[]>;
    findById(_id: string): Promise<import("./classes/list.model").ListDocument>;
    deleteListById(_listId: string, user: IPayLoadToken): Promise<import("./classes/list.model").ListDocument>;
    deleteByProjectId(_projectId: string, user: IPayLoadToken): Promise<void>;
    changeNameList(changeNameListInput: ListDTO.ChangeNameListInput, user: IPayLoadToken): Promise<import("./classes/list.model").ListDocument>;
}
