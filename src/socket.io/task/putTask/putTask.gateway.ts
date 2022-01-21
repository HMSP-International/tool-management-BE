import {
	ConnectedSocket,
	MessageBody,
	OnGatewayConnection,
	OnGatewayDisconnect,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
	cors:
		{
			origin: '*',
		},
})
export class PutTaskGateWay implements OnGatewayConnection, OnGatewayDisconnect {
	@WebSocketServer() server: Server;

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

	handleConnection (client: any, ...args: any[]) {
		console.log('connected', client.id);
	}

	handleDisconnect (client: any, ...args: any[]) {
		console.log('disconnected', client.id);
	}
}
