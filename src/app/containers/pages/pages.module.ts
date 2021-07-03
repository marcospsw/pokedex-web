import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { AppComponent } from './app/app.component';
import { MatIconModule } from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    MatIconModule,
    InfiniteScrollModule,
    MatChipsModule,
  ],
  exports: []
})
export class PagesModule { }
