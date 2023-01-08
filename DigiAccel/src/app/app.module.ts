import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NewQuizComponent } from './new-quiz/new-quiz.component';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { QuizSelectionPageComponent } from './quiz-selection-page/quiz-selection-page.component';
import { HttpClientModule} from '@angular/common/http';
import { QuizPageComponent } from './quiz-page/quiz-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewQuizComponent,
    QuizSelectionPageComponent,
    QuizPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
