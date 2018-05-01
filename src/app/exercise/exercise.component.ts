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

  constructor(){}
  /*constructor(
    private http: Http,
    private _Messages: MessagesService,
    private _Game: GameService,
    private _Router: Router
  ) { this.Me = _Game.Me;
    if(!this.Me){
        _Router.navigate(['/login']);
    } 
  
  }*/

  ngOnInit() {
  }

}
