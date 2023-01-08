import { QuizServiceService } from './../services/quiz-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Question } from '../entity/question';

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.scss']
})
export class NewQuizComponent implements OnInit{

  createQuizStart=false;
  currentQues=0;
  newQuizForm:FormGroup ;
  newQuizNameForm :FormGroup;
  difficulties =[1,2,3,4,5,6,7,8,9,10];
  newQuiz ='';
  newQues = new Question();


  constructor(private newQuizSevice: QuizServiceService ){  }


  ngOnInit() {

    this.newQuizSevice.quizBuildStart.subscribe(result=>{
      this.createQuizStart=result;
    })

    this.newQuizSevice.quesNum.subscribe(result=>{
      this.currentQues=result;
    })

    this.newQuizForm = new FormGroup({

      ques:new FormControl('',Validators.required),
      diff : new FormControl('',[Validators.required,Validators.max(4),Validators.min(1)]),
      opt1:new FormControl('',Validators.required),
      opt2:new FormControl('',Validators.required),
      opt3:new FormControl('',Validators.required),
      opt4:new FormControl('',Validators.required),
      correctOpt:new FormControl('',Validators.required)


    })

    this.newQuizNameForm = new FormGroup({

      quizName: new FormControl('',Validators.required)

    })



  }

  createQuiz(){
    this.newQuizSevice.quizBuild(true);
    this.newQuiz = this.newQuizNameForm.value.quizName;
    this.newQuizSevice.createNewQuiz(this.newQuizNameForm.controls['quizName'].value).subscribe(res=>{
        console.log(res);
    })

  }


  nextQues(){

    this.newQues.ques=this.newQuizForm.value.ques;
    this.newQues.diff=this.newQuizForm.value.diff;
    this.newQues.opt_1=this.newQuizForm.value.opt1;
    this.newQues.opt_2=this.newQuizForm.value.opt2;
    this.newQues.opt_3=this.newQuizForm.value.opt3;
    this.newQues.opt_4=this.newQuizForm.value.opt4;
    this.newQues.correctOpt=this.newQuizForm.value.correctOpt;

    this.newQuizSevice.addNewQues(this.newQuiz,this.newQues).subscribe(res=>{
            console.log(res)
    })



    this.currentQues =  this.newQuizForm.controls['diff'].value;
    this.difficulties.splice(this.difficulties.indexOf(this.currentQues), 1);
    console.log(this.difficulties);
    if(this.difficulties.length==0){
      document.getElementById('successAddQuiz').style.display='block'
      setTimeout(() => {
        document.getElementById('successAddQuiz').style.display='none'
      }, 2000);
    }
    else{
      document.getElementById('successAddQues').style.display='block'
      setTimeout(() => {
        document.getElementById('successAddQues').style.display='none'
      }, 2000);

    }

  }





}
