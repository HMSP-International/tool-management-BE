import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
	cors:
		{
			origin: '*',
		},
})
export class CreateTaskGateWay {
	@WebSocketServer() server: Server;

	@SubscribeMessage('handleCreateTask')
	async handleCreateTask (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data, _projectId } = input;
		socket.to(_projectId).emit('handleCreateTask', data);
	}
}
