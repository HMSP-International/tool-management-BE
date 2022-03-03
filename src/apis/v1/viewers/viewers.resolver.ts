import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ViewersService } from './viewers.service';
import { Viewer } from './viewers.entity';
import { AddNewEmailInput, RemoveEmailInput } from './viewers.dto';
import { CurrentUser } from '../currentUser.decorator';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';

@Resolver(() => Viewer)
export class ViewersResolver {
	constructor (private readonly authService: ViewersService) {}

	@Mutation(() => Viewer)
	getViewers (@CurrentUser() user: IPayLoadToken) {
		return this.authService.getViewer(user);
	}

	@Mutation(() => Viewer)
	addEmailToViewer (@Args('addNewEmail') addNewEmail: AddNewEmailInput, @CurrentUser() user: IPayLoadToken) {
		return this.authService.addEmail(addNewEmail, user);
	}

	@Mutation(() => Viewer)
	removeEmailToViewer (@Args('removeEmail') removeEmail: RemoveEmailInput, @CurrentUser() user: IPayLoadToken) {
		return this.authService.removeEmail(removeEmail, user);
	}
}
