import { Injectable } from '@nestjs/common';
import { Question } from './interfaces/question.interface';

@Injectable()
export class QuestionsService {
  questions = [
    {
      id: 0,
      question: 'Was is die Deutsche Hauptstadt?',
      response: 'Berlin',
      choices: ['Berlin', 'Bremen', 'New-York', 'Chili'],
    },
    {
      id: 1,
      question: 'Was is die Deutsche Hauptstadt?',
      response: 'Berlin',
      choices: ['Berlin', 'Bremen', 'New-York', 'Chili'],
    },
    {
      id: 2,
      question: 'Was is die Deutsche Hauptstadt?',
      response: 'Berlin',
      choices: ['Berlin', 'Bremen', 'New-York', 'Chili'],
    },
    {
      id: 3,
      question: 'Was is die Deutsche Hauptstadt?',
      response: 'Berlin',
      choices: ['Berlin', 'Bremen', 'New-York', 'Chili'],
    },
    {
      id: 4,
      question: 'Was is die Deutsche Hauptstadt?',
      response: 'Berlin',
      choices: ['Berlin', 'Bremen', 'New-York', 'Chili'],
    },
    {
      id: 5,
      question: 'Was is die Deutsche Hauptstadt?',
      response: 'Berlin',
      choices: ['Berlin', 'Bremen', 'New-York', 'Chili'],
    },
    {
      id: 6,
      question: 'Was is die Deutsche Hauptstadt?',
      response: 'Berlin',
      choices: ['Berlin', 'Bremen', 'New-York', 'Chili'],
    },
    {
      id: 7,
      question: 'Was is die Deutsche Hauptstadt?',
      response: 'Berlin',
      choices: ['Berlin', 'Bremen', 'New-York', 'Chili'],
    },
  ];

  getQuestions(): Question[] {
    const testLength = 4;
    const questionsTest: Array<Question> = [];
    const len = this.questions.length;
    for (let index = 0; index < testLength; index++) {
      const randomIndex = Math.floor(Math.random() * (len - index));
      const question: Question = this.questions.find(
        (q) => q.id === randomIndex,
      );
      questionsTest.push(question);
    }
    console.log(JSON.stringify(questionsTest));
    return questionsTest;
  }
}
