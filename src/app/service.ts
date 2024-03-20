import { Injectable } from '@angular/core';

@Injectable()
export class Service {
  public id = 'service'

  constructor() {
    console.log('Service constructor');
  }
}
