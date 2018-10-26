import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  BlogBasePageComponent,
  BlogOutPageComponent,
} from './components';

const routes: Routes =[];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule { }
