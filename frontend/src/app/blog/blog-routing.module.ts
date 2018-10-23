import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  BlogBasePageComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: BlogBasePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule { }
