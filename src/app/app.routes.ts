import { Routes } from '@angular/router';
import { Service } from './service';
import { RoutedComponent } from './list/routed.component';

export const routes: Routes = [
  {
    path: '',
    component: RoutedComponent,
    providers: [Service],
  },
];
