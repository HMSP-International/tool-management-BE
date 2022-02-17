import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
	cors:
		{
			origin: '*',
		},
})
export class ProjectSocketGateWay {
	@WebSocketServer() server: Server;

	@SubscribeMessage('connectionToProject')
	async connectionToProject (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data: { _projectId } } = input;
		socket.join(_projectId);
	}

	@SubscribeMessage('disconnectionToProject')
	async disconnectionToProject (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data: { _projectId } } = input;
		socket.leave(_projectId);
	}

	// Start delete Project
	@SubscribeMessage('handleDeleteProject')
	async deleteProject (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data, _projectId } = input;
		socket.to(_projectId).emit('handleDeleteProject', data);
	}
	// End delete Project
}
