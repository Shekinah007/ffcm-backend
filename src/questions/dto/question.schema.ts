import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Question {

    @Prop({ required: true })
    name: string;

    @Prop({ unique: true, required: true })
    mobile: number;

    @Prop({ unique: true, required: true })
    email: string;

    @Prop({ required: true })
    message: string;

}

export const QuestionSchema = SchemaFactory.createForClass(Question)