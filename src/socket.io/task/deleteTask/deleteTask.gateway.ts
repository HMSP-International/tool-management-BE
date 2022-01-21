import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
	cors:
		{
			origin: '*',
		},
})
export class DeleteTaskGateWay {
	@WebSocketServer() server: Server;

	@SubscribeMessage('handleDeleteTask')
	async handleDeleteTask (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data, _projectId } = input;
		socket.to(_projectId).emit('handleDeleteTask', data);
	}
}
