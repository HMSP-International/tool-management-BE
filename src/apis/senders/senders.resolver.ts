import { Resolver } from '@nestjs/graphql';
import { SendersService } from './senders.service';
import { Sender } from './sender.entity';

@Resolver(() => Sender)
export class SendersResolver {
	constructor (private readonly sendersService: SendersService) {
		
	}
}
