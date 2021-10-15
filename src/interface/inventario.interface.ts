export interface Inventario {
    id?: number;
    referencia_id?: number;
    producto?: string;
    entrada?: number;
    salida?: number;
    precio_unit?: number;
    monto?: number; // quitar campo? está demas ?
} // Agregar unidad ? 