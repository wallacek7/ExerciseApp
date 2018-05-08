import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable()
export class FormService {

  constructor() { } 
 /** PUT: update the form on the server */
 /**updateForm (form: Form): Observable<any> {
  return this.http.put(this._api, form, httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${form.id}`)),
    catchError(this.handleError<any>('updateForm'))
  );
 }*/
}
