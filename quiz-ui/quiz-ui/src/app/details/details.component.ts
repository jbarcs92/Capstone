import { Quiz } from "../quiz";
import { Component, OnInit } from '@angular/core';
import { QuizService } from "../quiz.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class QuizDetailsComponent implements OnInit {

  // _id: string;
  // quiz: Quiz;

  constructor(private route: ActivatedRoute,private router: Router,
    private quizService: QuizService) { }

  ngOnInit() {
    this.quiz = new Quiz();

    this._id = this.route.snapshot.params['_id'];
    console.log("gh"+this._id);
    this.quizService.getQuiz(this._id)
      .subscribe(data => {
        console.log(data)
        this.quiz = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['admin']);
  }
}
