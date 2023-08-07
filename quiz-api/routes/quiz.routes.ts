import { Router, Request, Response } from 'express';
import { updateQuiz, findById, deleteQuizById,saveQuizData,getAllQuizzes } from '../services/quiz.service';

const router = Router();

router.post('/admin', (req: Request, res: Response) => {
  saveQuizData(req, res);
});
router.put('/admin/:id', (req: Request, res: Response) => {
  updateQuiz(req, res);
});
router.get('/admin', (req: Request, res: Response) => {
  getAllQuizzes(req, res);
});
router.delete('/admin/:id', (req: Request, res: Response) => {
  deleteQuizById(req, res);
});
router.get('/admin/:id', (req: Request, res: Response) => {
  findById(req, res);
});
export = router