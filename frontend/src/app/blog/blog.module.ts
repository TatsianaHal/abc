import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BlogBasePageComponent } from './components/blog-base-page/blog-base-page.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  declarations: [BlogBasePageComponent]
})
export class BlogModule { }
