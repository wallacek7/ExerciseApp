import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { MessagesService } from '../services/messages.service';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  constructor(
    private http: Http,
    private _Router: Router
  ) { }

  ngOnInit() {
  }

}
