import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class User {
    @Prop()
    username: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    password: string;

    @Prop()
    gender: string;

    @Prop()
    phone: string;

    @Prop()
    comments: string[]
}

export const UserSchema = SchemaFactory.createForClass(User)