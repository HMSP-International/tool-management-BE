import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type OwnerDocument = Owner & mongoose.Document;

@Schema()
@ObjectType()
export class Owner {
	@Field() _id: string;

	@Prop()
	@Field()
	name: string;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
