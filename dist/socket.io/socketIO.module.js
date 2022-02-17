"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIOModule = void 0;
const common_1 = require("@nestjs/common");
const listSocket_module_1 = require("./list/listSocket.module");
const projectSocket_module_1 = require("./project/projectSocket.module");
const taskSocket_module_1 = require("./task/taskSocket.module");
let SocketIOModule = class SocketIOModule {
};
SocketIOModule = __decorate([
    (0, common_1.Module)({
        imports: [listSocket_module_1.ListSocketModule, projectSocket_module_1.ProjectSocketModule, taskSocket_module_1.TaskSocketModule],
    })
], SocketIOModule);
exports.SocketIOModule = SocketIOModule;
//# sourceMappingURL=socketIO.module.js.map