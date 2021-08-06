import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './containers/pages/edit/edit.component';
import { HomeComponent } from './containers/pages/home/home.component';
import { LoginComponent } from './containers/pages/login/login.component';
import { PokemonComponent } from './containers/pages/pokemon/pokemon.component';
import { RegisterComponent } from './containers/pages/register/register.component';
import { TypesComponent } from './containers/pages/types/types.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  {
    path: 'pokemons',
    component: HomeComponent,
  },
  {
    path: 'pokemon/:id',
    component: PokemonComponent,
  },
  {
    path: 'types',
    component: TypesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'newuser',
    component: RegisterComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
