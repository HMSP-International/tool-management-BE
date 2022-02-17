import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
	cors:
		{
			origin: '*',
		},
})
export class ListSocketGateWay {
	@WebSocketServer() server: Server;
	// Create
	@SubscribeMessage('handleCreateList')
	async handleCreateTask (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data, _projectId } = input;
		socket.to(_projectId).emit('handleCreateList', data);
	}
	// End Create

	// Delete
	@SubscribeMessage('handleDeleteList')
	async handleDeleteTask (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data, _projectId } = input;
		socket.to(_projectId).emit('handleDeleteList', data);
	}
	// End Delete

	// Put
	// @SubscribeMessage('changeAssingeeTask')
	// async changeAssingeeTask (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
	// 	const { data, _projectId } = input;
	// 	socket.to(_projectId).emit('changeAssingeeTask', data);
	// }
	// End Put
}
