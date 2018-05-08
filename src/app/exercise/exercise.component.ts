
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { MessagesService } from '../services/messages.service';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';
import { User } from '../models/game';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})

export class ExerciseComponent implements OnInit {

  Me: User;

  

  constructor(
    private _Messages: MessagesService,
    private _Router: Router,
    private http: Http


  ){}
  /*constructor(
    
    private _Game: GameService,
    
  ) 
  }*/
 
  ngOnInit() {
  }

submitForm(e: MouseEvent, text: string){
 /*e.preventDefault();*/

  this._Messages.Messages.push({ Text: 'Workout submitted!', Type: 'success'})
}
}
