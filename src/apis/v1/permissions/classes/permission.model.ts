import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RoleModel } from 'apis/v1/roles/classes/role.model';

export type PermissionDocument = PermissionModel & mongoose.Document;
const ObjectId = mongoose.Schema.Types.ObjectId;

@Schema()
export class PermissionModel {
	@Prop({ type: String, required: true })
	resolverName: string;

	@Prop({ type: ObjectId, required: true, ref: RoleModel.name })
	_roleId: string;
}

export const PermissionSchema = SchemaFactory.createForClass(PermissionModel);
