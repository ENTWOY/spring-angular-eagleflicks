import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaDirectoresComponent } from './lista-directores/lista-directores.component';
import { RegistrarDirectorComponent } from './registrar-director/registrar-director.component';
import { ActualizarDirectorComponent } from './actualizar-director/actualizar-director.component';
import { DetalleDirectorComponent } from './detalle-director/detalle-director.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    DetalleEmpleadoComponent,
    InicioComponent,
    ListaDirectoresComponent,
    RegistrarDirectorComponent,
    ActualizarDirectorComponent,
    DetalleDirectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Importar
    HttpClientModule,
    // Formularios
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
