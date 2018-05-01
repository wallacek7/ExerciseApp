import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


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


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    GameComponent,
    MessagesComponent,
    LoginComponent,
    ExerciseComponent,
    InspirationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'game', component: GameComponent },
      { path: 'exercise', component: ExerciseComponent },
      { path: 'login', component: LoginComponent },
      { path: 'inspiration', component: InspirationComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full'}
    ])
  ],
  providers: [MessagesService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
