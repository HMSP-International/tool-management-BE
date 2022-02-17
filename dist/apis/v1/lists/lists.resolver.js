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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const lists_service_1 = require("./lists.service");
const list_entity_1 = require("./classes/list.entity");
const ListDTO = require("./classes/lists.dto");
const CurrentUser_decorator_1 = require("../../../common/decorator/CurrentUser.decorator");
let ListsResolver = class ListsResolver {
    constructor(listsService) {
        this.listsService = listsService;
    }
    createList(createListInput, user) {
        return this.listsService.create(createListInput, user);
    }
    getLists(getListsInput) {
        return this.listsService.findAllByProjectId(getListsInput);
    }
    deleteList(deleteListInput, user) {
        return this.listsService.deleteListById(deleteListInput._listId, user);
    }
    changeNameList(changeNameList, user) {
        return this.listsService.changeNameList(changeNameList, user);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => list_entity_1.List),
    __param(0, (0, graphql_1.Args)('createListInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ListDTO.CreateListInput, Object]),
    __metadata("design:returntype", void 0)
], ListsResolver.prototype, "createList", null);
__decorate([
    (0, graphql_1.Mutation)(() => [list_entity_1.List]),
    __param(0, (0, graphql_1.Args)('getListsInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ListDTO.GetListsInput]),
    __metadata("design:returntype", void 0)
], ListsResolver.prototype, "getLists", null);
__decorate([
    (0, graphql_1.Mutation)(() => list_entity_1.List),
    __param(0, (0, graphql_1.Args)('deleteListInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ListDTO.DeleteListInput, Object]),
    __metadata("design:returntype", void 0)
], ListsResolver.prototype, "deleteList", null);
__decorate([
    (0, graphql_1.Mutation)(() => list_entity_1.List),
    __param(0, (0, graphql_1.Args)('changeNameListInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ListDTO.ChangeNameListInput, Object]),
    __metadata("design:returntype", void 0)
], ListsResolver.prototype, "changeNameList", null);
ListsResolver = __decorate([
    (0, graphql_1.Resolver)(() => list_entity_1.List),
    __metadata("design:paramtypes", [lists_service_1.ListsService])
], ListsResolver);
exports.ListsResolver = ListsResolver;
//# sourceMappingURL=lists.resolver.js.map