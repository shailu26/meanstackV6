
import {
  NgModule
} from '@angular/core';

import {
  CommonModule,
  Location
} from '@angular/common';

import {
  Route,
  RouterModule
} from '@angular/router';

import {
  LoginComponent
} from './components/login/login.component';

import {
  SignupComponent
} from './components/signup/signup.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'

  },

  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'signup',
    component: SignupComponent,

  },
  {
    path: '**',
    redirectTo: 'Error',

  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  declarations: [],
  exports: [RouterModule],

})
export class AppRoutingModule {

  constructor(private _location: Location) {}
}
