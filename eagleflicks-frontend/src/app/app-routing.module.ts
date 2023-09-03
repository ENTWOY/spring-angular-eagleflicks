import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaDirectoresComponent } from './lista-directores/lista-directores.component';
import { RegistrarDirectorComponent } from './registrar-director/registrar-director.component';
import { ActualizarDirectorComponent } from './actualizar-director/actualizar-director.component';
import { DetalleDirectorComponent } from './detalle-director/detalle-director.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '',redirectTo:'inicio', pathMatch: 'full'},
  {path : 'inicio', component: InicioComponent},
  {path : 'login', component: LoginComponent},
  {path : 'empleados', component:ListaEmpleadosComponent},
  {path: 'registrar-empleado', component : RegistrarEmpleadoComponent},
  {path: 'actualizar-empleado/:id', component : ActualizarEmpleadoComponent},
  {path: 'detalle-empleado/:id', component : DetalleEmpleadoComponent},
  {path: 'directores', component : ListaDirectoresComponent},
  {path: 'registrar-director', component : RegistrarDirectorComponent},
  {path: 'actualizar-director/:id', component : ActualizarDirectorComponent},
  {path: 'detalle-director/:id', component : DetalleDirectorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
