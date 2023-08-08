const Quiz = require('../models/quiz');

module.exports = {
    index,
    show,
    new: newQuiz,
    create,
    edit,
    update,
    delete: deleteQuiz
};

async function index(req,res) {
    try {
      const quizzes = await Quiz.find({});
      res.render('/admin', { quizzes });
    } catch (err) {
      console.log(err);
      res.render('/admin', { errorMsg: err.message });
    }
}

async function show(req,res) {
    try {
        const quiz = await Quiz.findById(req.params.id);
        res.render('show', { quiz });
    } catch (err) {
        console.log(err);
        res.render('show', { errorMsg: err.message });
    }
}

function newQuiz(req,res) {
    res.render('new', {errorMsg: '' });
}

async function create(req,res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
        }
    try {
        await Quiz.create(req.body);
        res.redirect('/admin');
    } catch (err) {
        console.log(err);
        res.render('new', { errorMsg: err.message});
    }
}

async function edit(req,res) {
    try {
        const quiz = await Quiz.findById(req.params.id);
        res.render('edit', { quiz });
    } catch (err) {
        console.log(err);
        res.render('edit', { errorMsg: err.message });
    }
}

async function update(req,res) {
    try {
        await Quiz.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/admin');
    } catch (err) {
        res.render('/admin', { errorMsg: err.message });
    }
}

async function deleteQuiz(req,res) {
    try {
        await Quiz.findByIdAndRemove(req.params.id);
        res.redirect('/admin');
    } catch (err) {
        res.render('/admin', { errorMsg: err.message });
    }
}