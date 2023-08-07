import { Document } from 'mongoose';

export interface Quiz extends Document{
    category: string;
    question: string;
    questionNo: string;
    answerA: string;
    answerB: string;
    answerC: string;
    answerD: string;
    correctAnswer: string
}