import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaDirectoresComponent } from './components/lista-directores/lista-directores.component';
import { RegistrarDirectorComponent } from './components/registrar-director/registrar-director.component';
import { ActualizarDirectorComponent } from './components/actualizar-director/actualizar-director.component';
import { DetalleDirectorComponent } from './components/detalle-director/detalle-director.component';
import { LoginComponent } from './components/login/login.component';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';
import { RegistrarPeliculaComponent } from './components/registrar-pelicula/registrar-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { ActualizarPeliculaComponent } from './components/actualizar-pelicula/actualizar-pelicula.component';
import { VerPeliculaComponent } from './components/ver-pelicula/ver-pelicula.component';
import { ListaGenerosComponent } from './components/lista-generos/lista-generos.component';
import { RegistrarGeneroComponent } from './components/registrar-genero/registrar-genero.component';
import { DetalleGeneroComponent } from './components/detalle-genero/detalle-genero.component';
import { ActualizarGeneroComponent } from './components/actualizar-genero/actualizar-genero.component';
import { ListaActoresComponent } from './components/lista-actores/lista-actores.component';
import { RegistrarActorComponent } from './components/registrar-actor/registrar-actor.component';
import { ActualizarActorComponent } from './components/actualizar-actor/actualizar-actor.component';
import { DetalleActorComponent } from './components/detalle-actor/detalle-actor.component';
import { BibliotecaPeliculasComponent } from './components/biblioteca-peliculas/biblioteca-peliculas.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { SorprendemeComponent } from './components/sorprendeme/sorprendeme.component';
import { ListaAdministradoresComponent } from './components/lista-administradores/lista-administradores.component';
import { DetalleAdministradorComponent } from './components/detalle-administrador/detalle-administrador.component';
import { RegistrarAdministradorComponent } from './components/registrar-administrador/registrar-administrador.component';
import { ActualizarAdministradorComponent } from './components/actualizar-administrador/actualizar-administrador.component';
import { VerGeneroComponent } from './components/ver-genero/ver-genero.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaDirectoresComponent,
    RegistrarDirectorComponent,
    ActualizarDirectorComponent,
    DetalleDirectorComponent,
    LoginComponent,
    ListaPeliculasComponent,
    RegistrarPeliculaComponent,
    DetallePeliculaComponent,
    ActualizarPeliculaComponent,
    VerPeliculaComponent,
    ListaGenerosComponent,
    RegistrarGeneroComponent,
    DetalleGeneroComponent,
    ActualizarGeneroComponent,
    ListaActoresComponent,
    RegistrarActorComponent,
    ActualizarActorComponent,
    DetalleActorComponent,
    BibliotecaPeliculasComponent,
    MenuComponent,
    ListaUsuariosComponent,
    RegistrarUsuarioComponent,
    ActualizarUsuarioComponent,
    DetalleUsuarioComponent,
    SorprendemeComponent,
    ListaAdministradoresComponent,
    DetalleAdministradorComponent,
    RegistrarAdministradorComponent,
    ActualizarAdministradorComponent,
    VerGeneroComponent
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
