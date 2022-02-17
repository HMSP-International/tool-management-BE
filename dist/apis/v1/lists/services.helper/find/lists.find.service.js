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
exports.ListsFindService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const list_model_1 = require("../../classes/list.model");
const projects_service_1 = require("../../../projects/projects.service");
let ListsFindService = class ListsFindService {
    constructor(listEntity, projectsService) {
        this.listEntity = listEntity;
        this.projectsService = projectsService;
    }
    async findAllByProjectId(getListsInput) {
        const { _projectId } = getListsInput;
        await this.projectsService.findById(_projectId);
        return await this.listEntity.find({ _projectId }).sort('order');
    }
    async findById(_id) {
        const list = await this.listEntity.findById(_id);
        if (list === null) {
            throw new common_1.HttpException('Not Found _listId', common_1.HttpStatus.BAD_REQUEST);
        }
        return list;
    }
};
ListsFindService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(list_model_1.ListModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => projects_service_1.ProjectsService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        projects_service_1.ProjectsService])
], ListsFindService);
exports.ListsFindService = ListsFindService;
//# sourceMappingURL=lists.find.service.js.map