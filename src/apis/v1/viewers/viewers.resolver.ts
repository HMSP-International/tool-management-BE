import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ViewersService } from './viewers.service';
import { Viewer } from './viewers.entity';
import { AddNewEmailInput, RemoveEmailInput } from './viewers.dto';

@Resolver(() => Viewer)
export class ViewersResolver {
	constructor (private readonly authService: ViewersService) {}

	@Mutation(() => Viewer)
	addEmail (@Args('addNewEmail') addNewEmail: AddNewEmailInput) {
		return this.authService.addEmail(addNewEmail);
	}

	@Mutation(() => Viewer)
	removeEmail (@Args('removeEmail') removeEmail: RemoveEmailInput) {
		return this.authService.removeEmail(removeEmail);
	}
}
