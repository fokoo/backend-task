import { Controller, Get } from "@nestjs/common";
import { Question } from './interfaces/question.interface';
import { QuestionsService } from './questions.service';

@Controller('test')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {}

  @Get()
  getTest(): Question[] {
    return this.questionService.getQuestions();
  }
}
