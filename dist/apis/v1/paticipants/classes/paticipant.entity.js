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
exports.Paticipant = void 0;
const collaborator_entity_1 = require("../../collaborators/classes/collaborator.entity");
const graphql_1 = require("@nestjs/graphql");
const project_entity_1 = require("../../projects/classes/project.entity");
const user_entity_1 = require("../../users/classes/user.entity");
let Paticipant = class Paticipant {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Paticipant.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => collaborator_entity_1.Collaborator),
    __metadata("design:type", String)
], Paticipant.prototype, "_collaboratorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_entity_1.Project),
    __metadata("design:type", String)
], Paticipant.prototype, "_projectId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Paticipant.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    __metadata("design:type", String)
], Paticipant.prototype, "_memberId", void 0);
Paticipant = __decorate([
    (0, graphql_1.ObjectType)()
], Paticipant);
exports.Paticipant = Paticipant;
//# sourceMappingURL=paticipant.entity.js.map