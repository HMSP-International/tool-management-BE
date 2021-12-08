import { Module } from '@nestjs/common';
import { SendersService } from './senders.service';
import { ConfigModule } from '@nestjs/config';
import { SenderFactoryModule } from './factoryPattern/senderFactory';

@Module({
	imports: [ ConfigModule, SenderFactoryModule ],
	providers: [ SendersService ],
	exports: [ SendersService ],
})
export class SendersModule {}
