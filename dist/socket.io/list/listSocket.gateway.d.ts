import { Server, Socket } from 'socket.io';
export declare class ListSocketGateWay {
    server: Server;
    handleCreateTask(input: any, socket: Socket): Promise<void>;
    handleDeleteTask(input: any, socket: Socket): Promise<void>;
}
