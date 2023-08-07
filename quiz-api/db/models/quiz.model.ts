import mongoose from 'mongoose';
import collections from '../collections';
import { Quiz } from '../interface/quiz.interface';

const schema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['Science', 'History', 'Sports', 'Television'],
        required: true
    },
    question: {
        type: String,
        required: true
    },
    questionNo: {
        type: Number,
        min: 1, 
        max: 5, 
        required: true
    },
    answerA: {
        type: String,
        required: true
    },
    answerB: {
        type: String,
        required: true
    },
    answerC: {
        type: String,
        required: true
    },
    answerD: {
        type: String,
        required: true
    },
    correctAnswer: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

schema.set('toJSON', { virtuals: true });

export = mongoose.model<Quiz>(collections.quizzes, schema);
