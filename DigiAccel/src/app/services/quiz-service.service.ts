import { Question } from './../entity/question';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(private http : HttpClient) { }


  private userInteraction = new BehaviorSubject<boolean>(false);
  interact=this.userInteraction.asObservable();

  private createQuizPhase = new BehaviorSubject<boolean>(false);
  quizBuildStart=this.createQuizPhase.asObservable();

  private quizQuesNumber = new BehaviorSubject <number>(1);
  quesNum=this.quizQuesNumber.asObservable();

  private activeQuiz = new BehaviorSubject<string>('');
  quiz = this.activeQuiz.asObservable();

  private startQuiz = new BehaviorSubject<boolean>(false);
  quizStarted = this.startQuiz.asObservable();

  private currentUser = new BehaviorSubject<string>('');
  user = this.currentUser.asObservable();

  private activeQuestionDifficulty = new BehaviorSubject<number>(5);
  difficulty = this.activeQuestionDifficulty.asObservable();

  private quizFinished = new BehaviorSubject<boolean>(false);
  finish = this.quizFinished.asObservable();




  optionSelect(choice:boolean){
    this.userInteraction.next(choice);
  }

  quizBuild(choice:boolean){
    this.createQuizPhase.next(choice);
  }
  nextQuestion(){
    this.quizQuesNumber.next(this.quizQuesNumber.value+1);
     }

  quizDisplay(quizName:string){
    this.activeQuiz.next(quizName);
  }

  quizStatus(stat){
    this.startQuiz.next(stat);
  }

  quizUser(name){
    this.currentUser.next(name);
  }
  changeDifficulty(diff){
    this.activeQuestionDifficulty.next(diff);
     }

  quizEnd(){
    this.quizFinished.next(true);
  }


  //API CALLS

  url_GetAllQuiz ='http://localhost:8080/quiz'

  getAllQuiz():Observable<any>{
    return this.http.get(this.url_GetAllQuiz)
  }

  url_createQuiz ='http://localhost:8080/createQuiz/'
  createNewQuiz(quizName:String):Observable<any>{
    return this.http.get(this.url_createQuiz+`${quizName}`)
  }

  url_addQues ='http://localhost:8080/createQuiz/'
  addNewQues(quizName:String,ques:Question):Observable<any>{
    return this.http.post(this.url_createQuiz+`${quizName}`,ques)
  }

  url_getQuizQuestions = 'http://localhost:8080/getQues/'
  getQuestions(quizName:string):Observable<Question[]>{
    return this.http.get<Question[]>(this.url_getQuizQuestions+`${quizName}`)
  }





}
