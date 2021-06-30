import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { AppComponent } from './app/app.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
  ],
  exports: []
})
export class PagesModule { }
