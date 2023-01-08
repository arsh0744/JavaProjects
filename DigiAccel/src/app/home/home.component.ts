import { Component,OnInit } from '@angular/core';
import { QuizServiceService } from '../services/quiz-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor(private homeService:QuizServiceService){

  }






  
  startApp(act: boolean){
    this.homeService.optionSelect(act);

  }





}
