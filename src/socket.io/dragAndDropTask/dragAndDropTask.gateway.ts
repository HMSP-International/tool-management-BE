import { HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
	ConnectedSocket,
	MessageBody,
	OnGatewayConnection,
	OnGatewayDisconnect,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
} from '@nestjs/websockets';
import { TasksService } from 'apis/v1/tasks/tasks.service';
import { Server, Socket } from 'socket.io';

let number = 100;

@WebSocketGateway({
	cors:
		{
			origin: '*',
		},
})
export class DragAndDropTaskGateWay implements OnGatewayConnection, OnGatewayDisconnect {
	constructor (private readonly tasksService: TasksService, private jwtService: JwtService) {}
	@WebSocketServer() server: Server;

	@SubscribeMessage('handleDragAndDropInAnotherList')
	async handleDragAndDropInAnotherList (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data, jwt, _projectId } = input;
		let decoded;

		try {
			decoded = this.jwtService.verify(jwt);
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.FORBIDDEN);
		}

		const res = await this.tasksService.changeListOfTaskWithDragAndDropInAnotherList(data, decoded);
		socket.to(_projectId).emit('handleDragAndDropInAnotherList', res);
	}

	@SubscribeMessage('handleDragAndDropIn1List')
	async handleDragAndDropIn1List (@MessageBody() input: any, @ConnectedSocket() socket: Socket): Promise<void> {
		const { data, jwt, _projectId } = input;
		let decoded;

		try {
			decoded = this.jwtService.verify(jwt);
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.FORBIDDEN);
		}

		const res = await this.tasksService.changeListOfTaskWithDragAndDropInOneList(data, decoded);
		socket.to(_projectId).emit('handleDragAndDropIn1List', res);
	}

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

	handleConnection (client: any, ...args: any[]) {
		console.log('connected', client.id);
		this.server.emit('connected', client.id);
	}

	handleDisconnect (client: any, ...args: any[]) {
		console.log('disconnected', client.id);
	}
}
