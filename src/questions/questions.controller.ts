import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionDto } from './dto/question.dto';

@Controller('question')
export class QuestionsController {
    constructor(private questionService: QuestionsService) { }

    // @Post()
    // saveQuestion() {

    // } 

    @Get()
    getQuestions() {
        return this.questionService.getQuestions();
    }

    @Post()
    saveQuestion(@Body() question: QuestionDto) {
        return this.questionService.saveQuestion(question)
    }

}
