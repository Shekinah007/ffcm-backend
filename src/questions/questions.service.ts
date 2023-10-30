import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from './dto/question.schema';

@Injectable()
export class QuestionsService {
    constructor(@InjectModel(Question.name) private questionModel) { }

    saveQuestion(question) {
        return this.questionModel.create({ ...question })
    }

    getQuestions() {
        return this.questionModel.find();
    }

}
