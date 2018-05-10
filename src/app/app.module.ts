import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './services/messages.service';
import { LoginComponent } from './login/login.component';
import { GameService } from './services/game.service';
import { ExerciseComponent } from './exercise/exercise.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    GameComponent,
    MessagesComponent,
    LoginComponent,
    ExerciseComponent,
    InspirationComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'game', component: GameComponent },
      { path: 'exercise', component: ExerciseComponent },
      { path: 'login', component: LoginComponent },
      { path: 'inspiration', component: InspirationComponent},
      { path: 'education', component: EducationComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full'}
    ])
  ],
  providers: [
    MessagesService, 
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
