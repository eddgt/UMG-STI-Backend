export interface Inventario {
    id?: number;
    referencia?: string;
    producto?: string;
    entrada?: number;
    salida?: number;
    precio_unit?: number;
    monto?: number; // quitar campo? está demas ?
} // Agregar unidad ? 