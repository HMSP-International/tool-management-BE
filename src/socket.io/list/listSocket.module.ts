import { Module } from '@nestjs/common';
import { ListSocketGateWay } from './listSocket.gateway';

@Module({
	imports: [ ListSocketGateWay ],
})
export class ListSocketModule {}
