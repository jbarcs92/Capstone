import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateQuizComponent implements OnInit {

  // _id: string;
  // quiz: Quiz;

  constructor(private route: ActivatedRoute,private router: Router,
    private quizService: QuizService) { }

  ngOnInit() {
    this.quiz = new Quiz();

    this._id = this.route.snapshot.params['_id'];
    
    this.quizService.getQuiz(this._id)
      .subscribe(data => {
        this.quiz = data;
      }, error => console.log(error));
  }

  updateQuiz() {
    this.quizService.updateQuiz(this._id, this.quiz)
      .subscribe(data => {
        console.log(data);
        this.quiz = new Quiz();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateQuiz();    
  }

  gotoList() {
    this.router.navigate(['/admin']);
  }
}