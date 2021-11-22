import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

export type UserDocument = User & mongoose.Document;

@Schema()
@ObjectType()
export class User {
	@Field(() => String)
	_id: string;

	@Prop({ type: 'string', required: true, unique: true })
	@Field(() => String)
	email: string;

	@Prop({ type: 'string', required: true })
	@Field(() => String, { nullable: true })
	password: string;

	@Prop({ type: 'string', default: 'anonymous' })
	@Field(() => String)
	displayName: string;

	@Prop({ type: 'string', default: 'member' })
	@Field(() => String)
	role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', function (next: Function) {
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

UserSchema.methods.generateAuthToken = function<User> (jwtService: JwtService): String {
	const token = jwtService.sign({ _id: this._id, role: this.role });
	return token;
};
