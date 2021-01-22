import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HeaderModule,
    FooterModule,
    MatProgressSpinnerModule
  ]
})
export class BlogModule { }
