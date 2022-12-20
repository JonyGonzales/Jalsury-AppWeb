import { Categoria } from "../../categoria/models/categoria";
import { UnidadMedida } from "./unidad-medida";

export class Producto {
    id : number;
    nombre: String;
    stock: number;
    precio: number;
    fechaIngreso: String;
    fechaVencimiento: String;
    categoria: Categoria;
    unidadMedida: UnidadMedida;
    estado: String
    
}
