export interface DetalleCompra {
    id?: number;
    compra_id?: number;
    impuest_id?: number;
    producto: string;
    descripcion: string;
    cantidad: number;
    precio_unit: number;
    date_create?: Date;
}