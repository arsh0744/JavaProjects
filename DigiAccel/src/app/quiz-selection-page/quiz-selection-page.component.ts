import { QuizServiceService } from './../services/quiz-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-selection-page',
  templateUrl: './quiz-selection-page.component.html',
  styleUrls: ['./quiz-selection-page.component.scss']
})
export class QuizSelectionPageComponent implements OnInit {

  quizList = [];
  

  constructor(private quizSelectService :QuizServiceService){}

  ngOnInit() {

    this.quizSelectService.getAllQuiz().subscribe(res=>{
      this.quizList=res;
          })


  }


  takeQuiz(quiz){

    this.quizSelectService.quizDisplay(quiz);
  }
}
