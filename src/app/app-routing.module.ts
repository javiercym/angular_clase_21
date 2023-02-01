import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from './guard/permissions.guard';
import { SalidaGuard } from './guard/salida.guard';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"detalle",component:DetalleComponent,canActivate:[PermissionsGuard]},
  {path:"contactanos",component:ContactanosComponent,canDeactivate:[SalidaGuard]},
  {path:"nosotros",component:NosotrosComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
