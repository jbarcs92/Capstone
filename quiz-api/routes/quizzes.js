var express = require('express');
var router = express.Router();

const quizzesCtrl = require('../controllers/quizzes');

router.get('/admin', quizzesCtrl.index);
router.get('/new', quizzesCtrl.new);
router.get('/update/:_id', quizzesCtrl.edit);
router.get('/details/:_id', quizzesCtrl.show);
router.post('/admin', quizzesCtrl.create);
router.put('/update/:_id', quizzesCtrl.update);
router.delete('/:id', quizzesCtrl.delete);

module.exports = router;
