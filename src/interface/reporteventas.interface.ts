export interface Compra {
    id?: number;
    referencec: string;
    proveedor: string;
    unidad: number;
    monto: number;
    date_create?: Date;
}