import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
	cors:
		{
			origin: '*',
		},
})
export class DragAndDropTaskGateWay {
	@WebSocketServer() server: Server;

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

	@SubscribeMessage('connectionToProject')
	async connectionToProject (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data: { _projectId } } = input;
		// console.log('connectionToProject ' + socket.id);
		socket.join(_projectId);
	}

	@SubscribeMessage('disconnectionToProject')
	async disconnectionToProject (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data: { _projectId } } = input;
		// console.log('disconnectionToProject ' + socket.id);
		socket.leave(_projectId);
	}
}
