import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
	cors:
		{
			origin: '*',
		},
})
export class TaskSocketGateWay {
	@WebSocketServer() server: Server;
	// Create
	@SubscribeMessage('handleCreateTask')
	async handleCreateTask (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data, _projectId } = input;
		socket.to(_projectId).emit('handleCreateTask', data);
	}
	// End Create

	// Delete
	@SubscribeMessage('handleDeleteTask')
	async handleDeleteTask (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data, _projectId } = input;
		socket.to(_projectId).emit('handleDeleteTask', data);
	}
	// End Delete

	// Drag and Drop
	@SubscribeMessage('handleDragAndDropInAnotherList')
	async handleDragAndDropInAnotherList (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data, _projectId } = input;
		socket.to(_projectId).emit('handleDragAndDropInAnotherList', data);
	}

	@SubscribeMessage('handleDragAndDropIn1List')
	async handleDragAndDropIn1List (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data, _projectId } = input;
		socket.to(_projectId).emit('handleDragAndDropInAnotherList', data);
	}
	// End Drag and Drop

	// Put
	@SubscribeMessage('changeAssingeeTask')
	async changeAssingeeTask (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data, _projectId } = input;
		socket.to(_projectId).emit('changeAssingeeTask', data);
	}

	@SubscribeMessage('changeTaskName')
	async changeTaskName (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data, _projectId } = input;
		socket.to(_projectId).emit('changeTaskName', data);
	}
	// End Put
}
