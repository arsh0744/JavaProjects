import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { QuizSelectionPageComponent } from './quiz-selection-page/quiz-selection-page.component';
import { NewQuizComponent } from './new-quiz/new-quiz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path:'newQuiz',component:NewQuizComponent,
},
{
  path:'allQuiz',component:QuizSelectionPageComponent
},
{
  path:'allQuiz/quizPage', component:QuizPageComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
