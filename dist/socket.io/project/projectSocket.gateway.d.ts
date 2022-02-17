import { Server, Socket } from 'socket.io';
export declare class ProjectSocketGateWay {
    server: Server;
    connectionToProject(input: any, socket: Socket): Promise<void>;
    disconnectionToProject(input: any, socket: Socket): Promise<void>;
    deleteProject(input: any, socket: Socket): Promise<void>;
}
