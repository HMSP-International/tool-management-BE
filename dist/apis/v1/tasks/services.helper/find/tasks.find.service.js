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
exports.TasksFindService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const paticipants_service_1 = require("../../../paticipants/paticipants.service");
const token_interface_1 = require("../../../../../helpers/modules/token/token.interface");
const mongoose_2 = require("mongoose");
const task_model_1 = require("../../classes/task.model");
let TasksFindService = class TasksFindService {
    constructor(taskEntity, paticipantsService) {
        this.taskEntity = taskEntity;
        this.paticipantsService = paticipantsService;
    }
    async findTasksByListId(getTasksInput) {
        const { _listId, _userIds } = getTasksInput;
        if (_userIds.length > 0) {
            return await this.taskEntity.find({ _listId, assignee: { $in: _userIds } });
        }
        return await this.taskEntity.find({ _listId });
    }
    async findById({ _taskId }) {
        const task = await this.taskEntity.findById(_taskId);
        if (task === null) {
            throw new common_1.HttpException('Not Found taskId', common_1.HttpStatus.NOT_FOUND);
        }
        return task;
    }
    async findTaskByUserId({ _ }, user) {
    }
};
TasksFindService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_model_1.TaskModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => paticipants_service_1.PaticipantsService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        paticipants_service_1.PaticipantsService])
], TasksFindService);
exports.TasksFindService = TasksFindService;
//# sourceMappingURL=tasks.find.service.js.map