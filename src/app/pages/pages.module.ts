import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    DetalleComponent,
    ContactanosComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    DetalleComponent,
    ContactanosComponent,
    NosotrosComponent
  ]
})
export class PagesModule { }
