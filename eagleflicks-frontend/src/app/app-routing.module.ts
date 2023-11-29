import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AuthGuard } from './guard/auth.guard';
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

const routes: Routes = [
  {path: '',redirectTo:'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'directores', component : ListaDirectoresComponent, canActivate:[AuthGuard]},
  {path: 'registrar-director', component : RegistrarDirectorComponent, canActivate:[AuthGuard]},
  {path: 'actualizar-director/:id', component : ActualizarDirectorComponent, canActivate:[AuthGuard]},
  {path: 'detalle-director/:id', component : DetalleDirectorComponent, canActivate:[AuthGuard]},
  {path: 'peliculas', component : ListaPeliculasComponent, canActivate:[AuthGuard]},
  {path: 'registrar-pelicula', component : RegistrarPeliculaComponent, canActivate:[AuthGuard]},
  {path: 'detalle-pelicula/:id', component : DetallePeliculaComponent},
  {path: 'actualizar-pelicula/:id', component : ActualizarPeliculaComponent, canActivate:[AuthGuard]},
  {path: 'ver-pelicula/:id', component : VerPeliculaComponent},
  {path: 'generos', component : ListaGenerosComponent, canActivate:[AuthGuard]},
  {path: 'registrar-genero', component : RegistrarGeneroComponent, canActivate:[AuthGuard]},
  {path: 'detalle-genero/:id', component : DetalleGeneroComponent, canActivate:[AuthGuard]},
  {path: 'actualizar-genero/:id', component : ActualizarGeneroComponent, canActivate:[AuthGuard]},
  {path: 'actores', component : ListaActoresComponent, canActivate:[AuthGuard]},
  {path: 'registrar-actor', component : RegistrarActorComponent, canActivate:[AuthGuard]},
  {path: 'actualizar-actor/:id', component : ActualizarActorComponent, canActivate:[AuthGuard]},
  {path: 'detalle-actor/:id', component : DetalleActorComponent, canActivate:[AuthGuard]},
  {path: 'biblioteca-peliculas', component : BibliotecaPeliculasComponent},
  {path: 'menu', component : MenuComponent, canActivate:[AuthGuard]},
  {path: 'usuarios', component : ListaUsuariosComponent, canActivate:[AuthGuard]},
  {path: 'registrar-usuario', component : RegistrarUsuarioComponent, canActivate:[AuthGuard]},
  {path: 'actualizar-usuario/:id', component : ActualizarUsuarioComponent, canActivate:[AuthGuard]},
  {path: 'detalle-usuario/:id', component : DetalleUsuarioComponent, canActivate:[AuthGuard]},
  {path: 'sorprendeme', component : SorprendemeComponent},
  {path: 'administradores', component : ListaAdministradoresComponent, canActivate:[AuthGuard]},
  {path: 'registrar-administrador', component : RegistrarAdministradorComponent, canActivate:[AuthGuard]},
  {path: 'actualizar-administrador/:id', component : ActualizarAdministradorComponent, canActivate:[AuthGuard]},
  {path: 'detalle-administrador/:id', component : DetalleAdministradorComponent, canActivate:[AuthGuard]},
  {path: 'ver-genero/:id', component : VerGeneroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
