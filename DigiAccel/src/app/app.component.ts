import { QuizServiceService } from './services/quiz-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'digiAccelQuizApp';


  constructor(private appService :QuizServiceService){}

  appStart=false;

  ngOnInit(){

    this.appService.interact.subscribe(result=>{
      this.appStart=result;
    })

  }


}