import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EvolutionsComponent } from './evolutions/evolutions.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormErrorComponent } from './form-error/form-error.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoadingComponent, EvolutionsComponent, FormErrorComponent],
  imports: [CommonModule, AppRoutingModule, MatProgressSpinnerModule],
  exports: [HeaderComponent, FooterComponent, LoadingComponent, EvolutionsComponent, FormErrorComponent],
})
export class ComponentsModule {}
