// 3rd dependencies
import { Module } from '@nestjs/common';

// Module
import { CoresModule } from './core/globals.module';
import { FeaturesModule } from './core/features.module';
import { SocketIOModule } from 'socket.io/socketIO.module';

@Module({
	imports: [ FeaturesModule, CoresModule, SocketIOModule ],
})
export class AppModule {}
