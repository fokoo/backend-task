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
      question: 'Wann entdeckte Christoph Kolumbus Amerika?',
      response: '1492',
      choices: ['1492', '1456', '1754', '1472'],
    },
    {
      id: 2,
      question: 'Welches ist das leichteste Element im Periodensystem?',
      response: 'Wasserstoff',
      choices: ['Neon', 'Helium', 'Methan', 'Wasserstoff'],
    },
    {
      id: 3,
      question: 'Der Durchmesser der Erde beträgt ',
      response: '12.742 Kilometer.',
      choices: [
        '13.982 Kilometer.',
        '12.742 Kilometer.',
        '10.192 Kilometer.',
        '19.322 Kilometer.',
      ],
    },
    {
      id: 4,
      question:
        'Wie lange braucht die Internationale Raumstation (ISS), um die Erde einmal zu umrunden?',
      response: 'etwa 90 Minuten',
      choices: [
        'etwa 90 Minuten',
        'etwa 120 Minuten',
        'etwa 30 Minuten',
        'etwa 155 Minuten',
      ],
    },
    {
      id: 5,
      question: 'An welchem Tag begann der Zweite Weltkrieg?',
      response: '1. September 1939',
      choices: [
        '1. Dezember 1939',
        '4. September 1940',
        '1. Juli 1939',
        '1. September 1939',
      ],
    },
    {
      id: 6,
      question: 'Wie lang ist der afrikanische Fluss Niger?',
      response: '4.184 Kilometer',
      choices: [
        '4.531 Kilometer',
        '4.931 Kilometer',
        '4.184 Kilometer',
        '3.241 Kilometer',
      ],
    },
    {
      id: 7,
      question: 'Was ist die Komplementärfarbe von Gelb (nach Helmholtz)?',
      response: 'Blau',
      choices: ['Blau', 'Magenta', 'Grün', 'Orange'],
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
