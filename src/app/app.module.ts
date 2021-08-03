import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './containers/pages/app/app.component';
import { PagesModule } from './containers/pages/pages.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, PagesModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
