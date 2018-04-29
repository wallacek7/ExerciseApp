import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

    Messages: { Text: string, Type: 'success' | 'danger' } [];

  constructor() {
    this.Messages = [
        { Text: 'This is initialized in the service.', Type: 'success'},
        { Text: 'You must login first', Type: 'danger' }
    ];
  }

}