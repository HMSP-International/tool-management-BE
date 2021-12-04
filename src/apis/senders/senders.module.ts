import { Module } from '@nestjs/common';
import { SendersService } from './senders.service';
import { SendersResolver } from './senders.resolver';
import { ConfigModule } from '@nestjs/config';
import { SenderFactoryModule } from './factoryPattern/senderFactory';

@Module({
	imports: [ ConfigModule, SenderFactoryModule ],
	providers: [ SendersResolver, SendersService ],
	exports: [ SendersService ],
})
export class SendersModule {}
