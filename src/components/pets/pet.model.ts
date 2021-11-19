import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Owner } from '../owners/owner.model';
import * as mongoose from 'mongoose';

export type PetDocument = Pet & mongoose.Document;

@Schema()
@ObjectType()
export class Pet {
	// @Prop({ type: mongoose.Schema.Types.ObjectId })
	@Field() _id: string;

	@Prop({ required: true })
	@Field()
	name: string;

	@Prop({ nullable: true })
	@Field({ nullable: true })
	type?: string;

	@Prop({ type: String })
	@Field(type => String)
	ownerId: string;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'owners' })
	@Field(type => Owner, { nullable: true })
	owner: Owner;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
