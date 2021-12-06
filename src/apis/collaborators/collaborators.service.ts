import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPayLoadToken } from '../token/token.interface';
import { Collaborator, CollaboratorDocument } from './collaborator.entity';
import * as CollaboratorDTO from './collaborators.dto';
import { SendersService } from '../senders/senders.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SpacesService } from '../spaces/spaces.service';
import { Space } from '../spaces/space.entity';

@Injectable()
export class CollaboratorsService {
	constructor (
		@InjectModel(Collaborator.name) private collaboratorEntity: Model<CollaboratorDocument>,
		private sendersService: SendersService,
		private usersService: UsersService,
		private jwtService: JwtService,
		private spacesService: SpacesService,
	) {}

	findOneByInvatedSpace = async (
		_adminId: string,
		_memberId: string,
		_workSpaceId: string,
	): Promise<Collaborator | null> => {
		return this.collaboratorEntity.findOne({ _adminId, _memberId, _workSpaceId });
	};

	inviteSpace = async (
		createCollaboratorInput: CollaboratorDTO.InviteSpaceInput,
		user: IPayLoadToken,
	): Promise<Collaborator> => {
		try {
			const { _workSpaceId, _memberId } = createCollaboratorInput;
			const { _id: _adminId } = user;

			let collaborator = await this.findOneByInvatedSpace(_adminId, _memberId, _workSpaceId);

			const adminExists = this.usersService.findById(_adminId);
			const memberExists = this.usersService.findById(_memberId);
			const [ admin, member ] = await Promise.all([ adminExists, memberExists ]);
			if (!admin) throw new HttpException('Not Found Admin User', HttpStatus.BAD_REQUEST);
			if (!member) throw new HttpException('Not Found Member User', HttpStatus.BAD_REQUEST);

			if (collaborator === null) {
				const newCollaborator = new this.collaboratorEntity({
					...createCollaboratorInput,
					_adminId,
				});

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

	verifyInviteSpace = async (
		token: CollaboratorDTO.VerifyInviteSpaceInput,
	): Promise<Collaborator> => {
		const decoded = await this.jwtService.verify(token.jwt);
		const { _id } = decoded;

		const collaborator = await this.collaboratorEntity.findById(_id);
		if (!collaborator)
			throw new HttpException('Invalid Link or expired', HttpStatus.BAD_REQUEST);
		if (collaborator.confirmEmail === true) {
			throw new HttpException('You have already confirmed this link', HttpStatus.BAD_REQUEST);
		}

		collaborator.confirmEmail = true;
		return await collaborator.save();
	};

	async findInvitedSpaces (user: IPayLoadToken): Promise<Collaborator[]> {
		const collaborators = await this.collaboratorEntity.find({ _memberId: user._id });
		return collaborators;
	}

	async getSpace (_id: string): Promise<Space> {
		return await this.spacesService.findById(_id);
	}

	async putInvitedSpaces (
		user: IPayLoadToken,
		putInvitedSpaceInput: CollaboratorDTO.PutInvitedSpaceInput,
	): Promise<Collaborator[]> {
		return await this.collaboratorEntity.find({});
	}
}
