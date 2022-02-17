import { ListsService } from './lists.service';
import * as ListDTO from './classes/lists.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
export declare class ListsResolver {
    private readonly listsService;
    constructor(listsService: ListsService);
    createList(createListInput: ListDTO.CreateListInput, user: IPayLoadToken): Promise<import("./classes/list.model").ListDocument>;
    getLists(getListsInput: ListDTO.GetListsInput): Promise<import("./classes/list.model").ListDocument[]>;
    deleteList(deleteListInput: ListDTO.DeleteListInput, user: IPayLoadToken): Promise<import("./classes/list.model").ListDocument>;
    changeNameList(changeNameList: ListDTO.ChangeNameListInput, user: IPayLoadToken): Promise<import("./classes/list.model").ListDocument>;
}
