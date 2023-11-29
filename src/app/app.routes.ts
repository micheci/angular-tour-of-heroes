import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { ChildComponent } from './child/child.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    title: 'Hero Page',
  },
  {
    path: 'child',
    component: ChildComponent,
    title: 'Childpage',
  },
];
