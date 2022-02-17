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
exports.ListsCreateService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const list_model_1 = require("../../classes/list.model");
const projects_service_1 = require("../../../projects/projects.service");
let ListsCreateService = class ListsCreateService {
    constructor(listEntity, projectsService) {
        this.listEntity = listEntity;
        this.projectsService = projectsService;
    }
    async create(createListInput, user) {
        const { _projectId } = createListInput;
        const project = await this.projectsService.findById(_projectId);
        if (project.owner.toString() !== user._id) {
            throw new common_1.HttpException('FORBIDDEN', common_1.HttpStatus.FORBIDDEN);
        }
        const order = await this.listEntity.countDocuments({ _projectId });
        const newList = new this.listEntity(Object.assign({ order }, createListInput));
        return await newList.save();
    }
};
ListsCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(list_model_1.ListModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => projects_service_1.ProjectsService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        projects_service_1.ProjectsService])
], ListsCreateService);
exports.ListsCreateService = ListsCreateService;
//# sourceMappingURL=lists.create.service.js.map