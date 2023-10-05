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

import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '',redirectTo:'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent}, //public
  {path: 'login', component: LoginComponent}, //public
  {path: 'directores', component : ListaDirectoresComponent, canActivate:[authGuard]},
  {path: 'registrar-director', component : RegistrarDirectorComponent, canActivate:[authGuard]},
  {path: 'actualizar-director/:id', component : ActualizarDirectorComponent, canActivate:[authGuard]},
  {path: 'detalle-director/:id', component : DetalleDirectorComponent, canActivate:[authGuard]},
  {path: 'peliculas', component : ListaPeliculasComponent, canActivate:[authGuard]},
  {path: 'registrar-pelicula', component : RegistrarPeliculaComponent, canActivate:[authGuard]},
  {path: 'detalle-pelicula/:id', component : DetallePeliculaComponent}, //public
  {path: 'actualizar-pelicula/:id', component : ActualizarPeliculaComponent, canActivate:[authGuard]},
  {path: 'ver-pelicula/:id', component : VerPeliculaComponent}, //public
  {path: 'generos', component : ListaGenerosComponent},
  {path: 'registrar-genero', component : RegistrarGeneroComponent},
  {path: 'detalle-genero/:id', component : DetalleGeneroComponent},
  {path: 'actualizar-genero/:id', component : ActualizarGeneroComponent},
  {path: 'actores', component : ListaActoresComponent},
  {path: 'registrar-actor', component : RegistrarActorComponent},
  {path: 'actualizar-actor/:id', component : ActualizarActorComponent},
  {path: 'detalle-actor/:id', component : DetalleActorComponent},
  {path: 'biblioteca-peliculas', component : BibliotecaPeliculasComponent},
  {path: 'menu', component : MenuComponent},
  {path: 'usuarios', component : ListaUsuariosComponent},
  {path: 'registrar-usuario', component : RegistrarUsuarioComponent},
  {path: 'actualizar-usuario/:id', component : ActualizarUsuarioComponent},
  {path: 'detalle-usuario/:id', component : DetalleUsuarioComponent},
  {path: 'sorprendeme', component : SorprendemeComponent},
  {path: 'administradores', component : ListaAdministradoresComponent},
  {path: 'registrar-administrador', component : RegistrarAdministradorComponent},
  {path: 'actualizar-administrador/:id', component : ActualizarAdministradorComponent},
  {path: 'detalle-administrador/:id', component : DetalleAdministradorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
