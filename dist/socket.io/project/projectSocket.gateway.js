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
exports.ProjectSocketGateWay = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let ProjectSocketGateWay = class ProjectSocketGateWay {
    async connectionToProject(input, socket) {
        const { data: { _projectId } } = input;
        socket.join(_projectId);
    }
    async disconnectionToProject(input, socket) {
        const { data: { _projectId } } = input;
        socket.leave(_projectId);
    }
    async deleteProject(input, socket) {
        const { data, _projectId } = input;
        socket.to(_projectId).emit('handleDeleteProject', data);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ProjectSocketGateWay.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('connectionToProject'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ProjectSocketGateWay.prototype, "connectionToProject", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('disconnectionToProject'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ProjectSocketGateWay.prototype, "disconnectionToProject", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('handleDeleteProject'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ProjectSocketGateWay.prototype, "deleteProject", null);
ProjectSocketGateWay = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    })
], ProjectSocketGateWay);
exports.ProjectSocketGateWay = ProjectSocketGateWay;
//# sourceMappingURL=projectSocket.gateway.js.map