import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class User {
    @Prop({ unique: true, required: true })
    username: string;

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: "user" })
    role: string;

    @Prop()
    gender: string;

    @Prop({ unique: true })
    phone: string;

    @Prop()
    comments: string[]

    @Prop({ defailt: "" })
    imgUrl: string

    @Prop({ default: "Image Url" })
    galleryUrls: string;
}

export const UserSchema = SchemaFactory.createForClass(User)