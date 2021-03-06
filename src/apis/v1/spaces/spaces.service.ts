import { Injectable } from '@nestjs/common';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as SpaceDTO from './classes/spaces.dto';
import { SpacesCreateService } from './services.helper/create/spaces.create.service';
import { SpacesDeleteService } from './services.helper/delete/spaces.delete.service';
import { SpacesFindService } from './services.helper/find/spaces.find.service';
import { SpacesPutService } from './services.helper/put/spaces.put.service';
@Injectable()
export class SpacesService {
	constructor (
		private readonly spacesCreateService: SpacesCreateService,
		private readonly spacesFindService: SpacesFindService,
		private readonly spacesDeleteService: SpacesDeleteService,
		private readonly spacesPutService: SpacesPutService,
	) {}

	async findAll (user: IPayLoadToken) {
		return await this.spacesFindService.findAll(user);
	}

	async findBySpaceAndOwner (_id: string, owner: string) {
		return await this.spacesFindService.findBySpaceAndOwner(_id, owner);
	}

	async findById (_id: string) {
		return await this.spacesFindService.findById(_id);
	}

	async findByProjectId (findByProjectId: SpaceDTO.FindByProjectId) {
		return await this.spacesFindService.findByProjectId(findByProjectId);
	}

	async findByMemberId (findByMemberId: SpaceDTO.FindByMemberId, user: IPayLoadToken) {
		return await this.spacesFindService.findByMemberId(findByMemberId, user);
	}

	async create (name: string, user: IPayLoadToken) {
		return await this.spacesCreateService.create(name, user);
	}

	async changeName (changeNameSpaceInput: SpaceDTO.ChangeNameSpaceInput) {
		return this.spacesPutService.changeName(changeNameSpaceInput);
	}

	async deleteSpaceById (_spaceId: string, _userId: string) {
		return await this.spacesDeleteService.deleteSpaceById(_spaceId, _userId);
	}

	// async addNewViewer (addNewViewerInput: SpaceDTO.AddNewViewerInput, user: IPayLoadToken) {
	// 	return await this.spacesPutService.addNewViewer(addNewViewerInput, user);
	// }

	// async removeViewerFromProject (removeViewerInput: SpaceDTO.RemoveViewerInput, user: IPayLoadToken) {
	// 	return await this.spacesPutService.removeViewer(removeViewerInput, user);
	// }
}
