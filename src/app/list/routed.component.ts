import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NgComponentOutlet } from '@angular/common';
import { Component, inject, Injector, viewChild, ViewContainerRef } from '@angular/core';
import { PopupComponent } from '../bottom/popup.component';
import { Service } from '../service';

@Component({
  selector: 'app-routed-component',
  standalone: true,
  template: `
    <button (click)="open()">open overlay</button>
  `,
})
export class RoutedComponent {
  private readonly overlay = inject(Overlay);
  private readonly injector = inject(Injector);

  constructor() {
    console.log('In the routed component I can inject the service:');
    console.log(this.injector.get(Service));
  }

  public open() {
    const overlay = this.overlay.create({});
    const componentPortal = new ComponentPortal(
      PopupComponent,
      null,
      this.injector,
    );

    overlay.attach(componentPortal);
  }
}
