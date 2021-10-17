export interface Plato {
    id?: number;
    receta_id?: number;
    descripcion: string;
    costo: number;
    margen: number;
    precio: number;
    categoria: string;
    cantidad: number;
    id_usuario: string;
    fecha_ven: Date;
}