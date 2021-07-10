import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/pages/home/home.component';
import { PokemonComponent } from './containers/pages/pokemon/pokemon.component';
import { TypesComponent } from './containers/pages/types/types.component';

const routes: Routes = [
  {
		path: '',
		component: HomeComponent,
	},
  {
    path: 'pokemon/:id',
    component: PokemonComponent,
  },
  {
    path: 'types',
    component: TypesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
