import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewQuizComponent implements OnInit {
  quiz: Quiz = new Quiz();
  submitted = false;

  constructor(private quizService: QuizService,
    private router: Router) { }

  ngOnInit() {
  }

  newQuiz(): void {
    this.submitted = false;
    this.quiz = new Quiz();
  }

  save() {
    this.quizService
    .createQuiz(this.quiz).subscribe(data => {
      console.log(data)
      this.quiz = new Quiz();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/admin']);
  }
}



}
