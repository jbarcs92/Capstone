import mongoose = require('mongoose');


import QuizDoc = require('./models/quiz.model')
export const connectionString = 'mongodb://localhost/quiz-dev';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

export const models = { QuizDoc };