import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

// starting
/* export const routes: Routes = []; */
// completed
export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: UserComponent,
  },
];
