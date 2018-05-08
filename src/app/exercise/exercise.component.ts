
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { MessagesService } from '../services/messages.service';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';
import { User } from '../models/game';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Workout } from '../models/workout';

/**@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})

/**export class ExerciseComponent implements OnInit {

  Me: User;

  

  constructor(
    private _Messages: MessagesService,
    private _Router: Router,
    private http: Http


  ){}
  /*constructor(
    
    private _Game: GameService,
    
  ) 
  }
 
  ngOnInit() {
  }

submitForm(e: MouseEvent, text: string){
 /*e.preventDefault();

  this._Messages.Messages.push({ Text: 'Workout submitted!', Type: 'success'})
}
}*/
@Component({
  selector: 'exercise-form',
  templateUrl: './exercise.component.html'
})

export class ExerciseComponent implements OnInit {
  exerciseForm: FormGroup;
  model: Workout; 
  submittedModel: Workout; 
  submitted: boolean = false;
  Me: User;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
      this.model = new Workout('05/08/2018', 'Cardio', '', '');
      
                     
                     
      this.exerciseForm = this.formBuilder.group({
        date:     [this.model.date],
        exercise: [this.model.exercise],
        duration:    [this.model.duration],
        notes:    [this.model.notes]
      });
  }

  onSubmit({ value, valid }: { value: Workout, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
  }
}
