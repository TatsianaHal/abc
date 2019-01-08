import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BlogOutPageComponent, BlogBasePageComponent, BlogSinglePostComponent } from './blog/components';
import { SigninComponent, SignupComponent } from './auth/components';
import { UserGuard } from './auth/guards/user';


const appRoutes: Routes = [
  { path: '', component: BlogOutPageComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: BlogBasePageComponent, canActivate: [ UserGuard ] },
  { path: 'post', component: BlogSinglePostComponent, canActivate: [ UserGuard ] },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ UserGuard ]
})
export class AppRoutingModule { }
