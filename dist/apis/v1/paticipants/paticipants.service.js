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
exports.PaticipantsService = void 0;
const common_1 = require("@nestjs/common");
const paticipants_create_service_1 = require("./services.helper/create/paticipants.create.service");
const paticipants_find_service_1 = require("./services.helper/find/paticipants.find.service");
const paticipants_resolveField_service_1 = require("./services.helper/resolveField/paticipants.resolveField.service");
const token_interface_1 = require("../../../helpers/modules/token/token.interface");
const paticipants_delete_service_1 = require("./services.helper/delete/paticipants.delete.service");
const paticipants_put_service_1 = require("./services.helper/put/paticipants.put.service");
let PaticipantsService = class PaticipantsService {
    constructor(paticipantsCreateService, paticipantsDeleteService, paticipantsFindService, paticipantsPutService, paticipantsResolveFieldService) {
        this.paticipantsCreateService = paticipantsCreateService;
        this.paticipantsDeleteService = paticipantsDeleteService;
        this.paticipantsFindService = paticipantsFindService;
        this.paticipantsPutService = paticipantsPutService;
        this.paticipantsResolveFieldService = paticipantsResolveFieldService;
    }
    createPaticipant(data, user) {
        return this.paticipantsCreateService.create(data, user);
    }
    deleteByMemberAndProject(data, user) {
        return this.paticipantsDeleteService.deleteByMemberAndProject(data, user);
    }
    deleteByProjectId(_projectId) {
        return this.paticipantsDeleteService.deleteByProjectId(_projectId);
    }
    deleteByCollboratorsId(_collaboratorsId) {
        return this.paticipantsDeleteService.deleteByCollboratorId(_collaboratorsId);
    }
    getProjectsBySpacesAndMember(projectsBySpacesAndMemberInput, _memberId) {
        return this.paticipantsFindService.getProjectsBySpacesAndMember(projectsBySpacesAndMemberInput, _memberId);
    }
    getProjectsByMemberId(_memberId) {
        return this.paticipantsFindService.getProjectByMemberId(_memberId);
    }
    getUsersBelongProject(getUsersBelongProjectInput) {
        return this.paticipantsFindService.getUsersBelongProject(getUsersBelongProjectInput);
    }
    async findPaticipantByProjectAndMember(x, user, returnNull) {
        return this.paticipantsFindService.findPaticipantByProjectAndMember(x, user, returnNull);
    }
    changeRoleOfMemberOnPaticipant(changeRoleOfMemberInput, user) {
        return this.paticipantsPutService.changeRoleOfMemberOnPaticipant(changeRoleOfMemberInput, user);
    }
    getCollaborator(_id) {
        return this.paticipantsResolveFieldService.getCollaborator(_id);
    }
    getProject(_id) {
        return this.paticipantsResolveFieldService.getProject(_id);
    }
    getUser(_id) {
        return this.paticipantsResolveFieldService.getUser(_id);
    }
};
PaticipantsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [paticipants_create_service_1.PaticipantsCreateService,
        paticipants_delete_service_1.PaticipantsDeleteService,
        paticipants_find_service_1.PaticipantsFindService,
        paticipants_put_service_1.PaticipantsPutService,
        paticipants_resolveField_service_1.PaticipantsResolverFieldService])
], PaticipantsService);
exports.PaticipantsService = PaticipantsService;
//# sourceMappingURL=paticipants.service.js.map