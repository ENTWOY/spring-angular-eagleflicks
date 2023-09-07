import { Pais } from "./pais";
import { Director } from "./director";
import { Genero } from "./genero";
import { Actor } from "./actor";

export class Pelicula {

    idPelicula: number;
    titulo: string;
    descripcion: string;
    anio: number;
    duracion: number;
    productora: string;
    idioma: string;
    trailer: string;
    imagen: string;
    peliculaGenero: Genero;
    peliculaDirector: Director;
    peliculaPais: Pais;
    peliculaActor: Actor;
}
