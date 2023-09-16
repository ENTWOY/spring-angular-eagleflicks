import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './components/actualizar-empleado/actualizar-empleado.component';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component';
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

const routes: Routes = [
  {path: '',redirectTo:'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'empleados', component:ListaEmpleadosComponent},
  {path: 'registrar-empleado', component : RegistrarEmpleadoComponent},
  {path: 'actualizar-empleado/:id', component : ActualizarEmpleadoComponent},
  {path: 'detalle-empleado/:id', component : DetalleEmpleadoComponent},
  {path: 'directores', component : ListaDirectoresComponent},
  {path: 'registrar-director', component : RegistrarDirectorComponent},
  {path: 'actualizar-director/:id', component : ActualizarDirectorComponent},
  {path: 'detalle-director/:id', component : DetalleDirectorComponent},
  {path: 'peliculas', component : ListaPeliculasComponent},
  {path: 'registrar-pelicula', component : RegistrarPeliculaComponent},
  {path: 'detalle-pelicula/:id', component : DetallePeliculaComponent},
  {path: 'actualizar-pelicula/:id', component : ActualizarPeliculaComponent},
  {path: 'ver-pelicula/:id', component : VerPeliculaComponent},
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
  {path: 'sorprendeme', component : SorprendemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
