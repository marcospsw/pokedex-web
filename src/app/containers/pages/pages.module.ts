import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { AppComponent } from './app/app.component';
import { MatIconModule } from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonComponent } from './pokemon/pokemon.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TypesComponent } from './types/types.component';

@NgModule({
	declarations: [HomeComponent, AppComponent, PokemonComponent, TypesComponent],
	imports: [
		CommonModule,
		ComponentsModule,
		AppRoutingModule,
		MatIconModule,
		InfiniteScrollModule,
		MatChipsModule,
		FormsModule,
		ReactiveFormsModule,
		MatProgressSpinnerModule,
		MatProgressBarModule,
	],
	exports: [],
})
export class PagesModule {}
