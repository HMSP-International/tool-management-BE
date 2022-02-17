"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsService = void 0;
const common_1 = require("@nestjs/common");
const token_interface_1 = require("../../../helpers/modules/token/token.interface");
const lists_create_service_1 = require("./services.helper/create/lists.create.service");
const lists_delete_service_1 = require("./services.helper/delete/lists.delete.service");
const lists_find_service_1 = require("./services.helper/find/lists.find.service");
const lists_put_service_1 = require("./services.helper/put/lists.put.service");
let ListsService = class ListsService {
    constructor(listsCreateService, listsDeleteService, listsFindService, listsPutService) {
        this.listsCreateService = listsCreateService;
        this.listsDeleteService = listsDeleteService;
        this.listsFindService = listsFindService;
        this.listsPutService = listsPutService;
    }
    async create(createListInput, user) {
        return await this.listsCreateService.create(createListInput, user);
    }
    async findAllByProjectId(getListsInput) {
        return await this.listsFindService.findAllByProjectId(getListsInput);
    }
    async findById(_id) {
        return await this.listsFindService.findById(_id);
    }
    async deleteListById(_listId, user) {
        return await this.listsDeleteService.deleteListById(_listId, user);
    }
    async deleteByProjectId(_projectId, user) {
        return await this.listsDeleteService.deleteByProjectId(_projectId, user);
    }
    async changeNameList(changeNameListInput, user) {
        return this.listsPutService.changeNameList(changeNameListInput, user);
    }
};
ListsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [lists_create_service_1.ListsCreateService,
        lists_delete_service_1.ListsDeleteService,
        lists_find_service_1.ListsFindService,
        lists_put_service_1.ListsPutService])
], ListsService);
exports.ListsService = ListsService;
//# sourceMappingURL=lists.service.js.map