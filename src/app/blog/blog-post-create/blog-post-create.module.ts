import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { BlogPostCreateRoutingModule } from './blog-post-create-routing.module';
import { BlogPostCreateComponent } from './blog-post-create.component';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';

import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [BlogPostCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BlogPostCreateRoutingModule,
    HeaderModule,
    FooterModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class BlogPostCreateModule { }
