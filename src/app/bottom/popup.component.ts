import { Component, inject } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  template: `popup works!`,
})
export class PopupComponent {
  constructor() {
    console.log('But in the overlay it results in an error:');
    console.log(inject(Service))
  }
}
