import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ViewersService } from './viewers.service';
import { Viewer } from './viewers.entity';
import { AddNewEmailInput, CheckEmailInViewerInput, RemoveEmailInput } from './viewers.dto';
import { CurrentUser } from '../currentUser.decorator';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { BooleanEntity } from 'helpers/modules/boolean/boolean.entity';

@Resolver(() => Viewer)
export class ViewersResolver {
	constructor (private readonly viewersService: ViewersService) {}

	@Mutation(() => BooleanEntity)
	checkEmailInViewerInput (@Args('checkEmailInViewerInput') checkEmailInViewer: CheckEmailInViewerInput) {
		return this.viewersService.checkPermission(checkEmailInViewer);
	}

	@Mutation(() => Viewer)
	getViewers (@CurrentUser() user: IPayLoadToken) {
		return this.viewersService.getViewer(user);
	}

	@Mutation(() => Viewer)
	addEmailToViewer (@Args('addNewEmail') addNewEmail: AddNewEmailInput, @CurrentUser() user: IPayLoadToken) {
		return this.viewersService.addEmail(addNewEmail, user);
	}

	@Mutation(() => Viewer)
	removeEmailToViewer (@Args('removeEmail') removeEmail: RemoveEmailInput, @CurrentUser() user: IPayLoadToken) {
		return this.viewersService.removeEmail(removeEmail, user);
	}
}
