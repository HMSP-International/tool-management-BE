import { Server, Socket } from 'socket.io';
export declare class TaskSocketGateWay {
    server: Server;
    handleCreateTask(input: any, socket: Socket): Promise<void>;
    handleDeleteTask(input: any, socket: Socket): Promise<void>;
    handleDragAndDropInAnotherList(input: any, socket: Socket): Promise<void>;
    handleDragAndDropIn1List(input: any, socket: Socket): Promise<void>;
    changeAssingeeTask(input: any, socket: Socket): Promise<void>;
    changeTaskName(input: any, socket: Socket): Promise<void>;
}
