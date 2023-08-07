import { QuizDetailsComponent } from "../details/details.component";
import { Observable } from "rxjs";
import { QuizService } from "../quiz.service";
import { Quiz } from "../quiz";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  quizzes: Observable<Quiz[]>;

  constructor(private quizService: QuizService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.quizzes = this.quizService.getQuizzesList();
  }

  deleteQuiz(_id: string) {
    this.quizService.deleteQuiz(_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateQuiz(id: string) {
    this.router.navigate(['update', id]);
  }

  quizDetails(_id: string) {
    this.router.navigate(['details', _id])
  }
}
