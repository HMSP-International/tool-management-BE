import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { RoleModel } from '../../roles/classes/role.model';
const ObjectId = mongoose.Schema.Types.ObjectId;
export type UserDocument = UserModel & mongoose.Document;

@Schema()
export class UserModel {
	_id: string;

	@Prop({ type: 'string' })
	avatar: string;

	@Prop({ type: 'string', required: true, unique: true })
	email: string;

	@Prop({ type: 'string', required: true })
	password: string;

	@Prop({ type: 'string', default: 'anonymous' })
	displayName: string;

	@Prop({ type: ObjectId, required: true, ref: RoleModel.name })
	_roleId: string;

	@Prop({ type: 'string', default: 'anonymous' })
	department: string;

	@Prop({ type: 'string', default: 'anonymous' })
	position: string;

	@Prop({ type: 'string', default: 'anonymous' })
	title: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);

UserSchema.pre<UserModel>('save', function (next: Function) {
	if (this.password) {
		bcrypt.genSalt(10, (err, salt) => {
			if (err) return next(err);

			bcrypt.hash(this.password, salt, (err, hash) => {
				if (err) return next(err);

				this.password = hash;
				next();
			});
		});
	}
});
