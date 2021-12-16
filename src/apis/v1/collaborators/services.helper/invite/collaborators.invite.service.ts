import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// mongoose
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CollaboratorDocument, CollaboratorModel } from '../../classes/collaborator.model';
// helpers
import { SendersService } from '../../../../../helpers/modules/senders/senders.service';
import { IPayLoadToken } from '../../../../../helpers/modules/token/token.interface';
// classes
import * as CollaboratorDTO from '../../classes/collaborators.dto';
import { Collaborator } from '../../classes/collaborator.entity';
// services
import { CollaboratorsFindService } from '../find/collaborators.find.service';

@Injectable()
export class CollaboratorsInviteService {
	usersService: any;
	constructor (
		@InjectModel(CollaboratorModel.name) private collaboratorEntity: Model<CollaboratorDocument>,
		private readonly collaboratorsFindService: CollaboratorsFindService,
		private readonly sendersService: SendersService,
		private readonly jwtService: JwtService,
	) {}

	inviteSpace = async (
		createCollaboratorInput: CollaboratorDTO.InviteSpaceInput,
		user: IPayLoadToken,
	): Promise<Collaborator> => {
		try {
			const { _workSpaceId, _memberId } = createCollaboratorInput;
			const { _id: _adminId } = user;

			let collaborator = await this.collaboratorsFindService.findOneByInvitedSpace(
				_adminId,
				_memberId,
				_workSpaceId,
			);

			const adminExists = this.usersService.findById(_adminId);
			const memberExists = this.usersService.findById(_memberId);
			const [ admin, member ] = await Promise.all([ adminExists, memberExists ]);
			if (!admin) throw new HttpException('Not Found Admin User', HttpStatus.BAD_REQUEST);
			if (!member) throw new HttpException('Not Found Member User', HttpStatus.BAD_REQUEST);

			if (collaborator === null) {
				const newCollaborator = new this.collaboratorEntity({ ...createCollaboratorInput, _adminId });

				collaborator = await newCollaborator.save();
			}

			await this.sendersService.sendInviteSpaceByGrid({
				email: member.email,
				token: this.jwtService.sign({ _id: collaborator._id }),
			});

			return collaborator;
		} catch (error) {
			throw new Error(error);
		}
	};

	verifyInviteSpace = async (token: CollaboratorDTO.VerifyInviteSpaceInput): Promise<Collaborator> => {
		const decoded = await this.jwtService.verify(token.jwt);
		const { _id } = decoded;

		const collaborator = await this.collaboratorEntity.findById(_id);
		if (!collaborator) throw new HttpException('Invalid Link or expired', HttpStatus.BAD_REQUEST);
		if (collaborator.confirmEmail === true) {
			throw new HttpException('You have already confirmed this link', HttpStatus.BAD_REQUEST);
		}

		collaborator.confirmEmail = true;
		return await collaborator.save();
	};

	async putInvitedSpaces (
		user: IPayLoadToken,
		putInvitedSpaceInput: CollaboratorDTO.PutInvitedSpaceInput,
	): Promise<Collaborator[]> {
		const { _workSpaceId, _memberIds } = putInvitedSpaceInput;

		await this.collaboratorEntity.deleteMany({ _workSpaceId, _adminId: user._id }); // deleteByWorkSpaceId

		for (let _memberId of _memberIds) {
			this.inviteSpace({ _workSpaceId, _memberId, role: 'MEMBER' }, user);
		}

		return await this.collaboratorEntity.find({ _adminId: user._id });
	}
}
