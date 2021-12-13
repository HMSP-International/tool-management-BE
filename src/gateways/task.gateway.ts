import { WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway(8081, { namespace: 'xxx' })
export class TaskGateWay {

}
