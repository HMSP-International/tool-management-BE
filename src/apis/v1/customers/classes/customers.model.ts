import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
// const ObjectId = mongoose.Schema.Types.ObjectId;
export type CustomerDocument = CustomerModel & mongoose.Document;

@Schema()
export class CustomerModel {
	_id: string;

	@Prop({ type: 'string' })
	avatar: string;

	@Prop({ type: 'string', required: true, unique: true })
	email: string;

	@Prop({ type: 'string', default: 'anonymous' })
	displayName: string;

	@Prop({ type: 'string', required: true })
	password: string;
}

export const CustomerSchema = SchemaFactory.createForClass(CustomerModel);

CustomerSchema.pre<CustomerModel>('save', function (next: Function) {
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
