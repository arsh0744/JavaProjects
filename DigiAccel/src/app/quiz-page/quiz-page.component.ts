import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from './../entity/question';
import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../services/quiz-service.service';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';



@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit  {

  activeQuiz =''
  questionList:Question[]
  userNameForm:FormGroup
  questionForm:FormGroup
  QuizStart=null
  quizEnd= null
  activeUser=''
  activeQuestion:Question
  baseDifficulty=null;
  score =0
  attempts =0
  points =5
  penalty =-2

  width: number;
  height: number;
  margin = { top: 20, right: 20, bottom: 30, left: 40 };
  x: any;
  y: any;
  svg: any;
  g: any;

  constructor(private quizPageService : QuizServiceService){

    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;

  }

  ngOnInit(){

    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawBars();

          this.quizPageService.quiz.subscribe(res=>{
            this.activeQuiz=res;
                      })

         this.quizPageService.getQuestions(this.activeQuiz).subscribe(res=>{
          this.questionList = res;
           this.activeQuestion=this.questionList[this.baseDifficulty-1]

         })

          this.userNameForm = new FormGroup({
            userName: new FormControl('', Validators.required)
          })

          this.questionForm = new FormGroup({
            opt  : new FormControl(''),
          })

          this.quizPageService.quizStarted.subscribe(res=>{
            this.QuizStart=res;
          })

          this.quizPageService.user.subscribe(res=>{
            this.activeUser=res;
          })

          this.quizPageService.difficulty.subscribe(res=>{
            this.baseDifficulty=res;
          })
          this.quizPageService.finish.subscribe(res=>{
            this.quizEnd=res;
          })


  }

  startQuiz(status){
    this.quizPageService.quizStatus(status);
    this.quizPageService.quizUser(this.userNameForm.value.userName);
  }

  nextQues(){
  const selectedOption = this.questionForm.value.opt;
  this.attempts+=1;

  if(selectedOption==this.activeQuestion.correctOpt){
      this.score+=this.points;

    if(this.baseDifficulty!=10){
    let temp = this.questionList[this.questionList.indexOf(this.activeQuestion)+1]
    this.questionList.splice(this.questionList.indexOf(this.activeQuestion),1)
    this.activeQuestion=temp;

    console.log(this.questionList)
    this.quizPageService.changeDifficulty(this.activeQuestion.diff)

     console.log(this.activeQuestion)
    }
    else
    this.quizPageService.quizEnd();

  }
  else{

      this.score+=this.penalty;

        if(this.baseDifficulty!=1){
    let temp = this.questionList[this.questionList.indexOf(this.activeQuestion)-1]
    this.questionList.splice(this.questionList.indexOf(this.activeQuestion),1)
    this.activeQuestion=temp;
    console.log(this.questionList)
    this.quizPageService.changeDifficulty(this.activeQuestion.diff)
     console.log(this.activeQuestion)
        }
        else
        this.quizPageService.quizEnd()
  }

  }



  initSvg() {
    this.svg = d3.select('#barChart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 900 500');
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.StatsBarChart.map((d) => d.company));
    this.y.domain([0, d3Array.max(this.StatsBarChart, (d) => d.frequency)]);
  }

  drawAxis() {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequency');
  }

  drawBars() {
    this.g.selectAll('.bar')
      .data(this.StatsBarChart)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => this.x(d.company))
      .attr('y', (d) => this.y(d.frequency))
      .attr('width', this.x.bandwidth())
      .attr('fill', '#498bfc')
      .attr('height', (d) => this.height - this.y(d.frequency));
  }


   StatsBarChart: any[] = [
    {company: 'Apple', frequency: 100000},
    {company: 'IBM', frequency: 80000},
    {company: 'HP', frequency: 20000},
    {company: 'Facebook', frequency: 70000},
    {company: 'TCS', frequency: 12000},
    {company: 'Google', frequency: 110000},
    {company: 'Wipro', frequency: 5000},
    {company: 'EMC', frequency: 4000}
  ];




}

