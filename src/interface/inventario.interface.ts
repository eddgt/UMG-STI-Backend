export interface Inventario {
    id?: number;
    plato_id?: number;
    producto?: string;
    cantidad?: number;    
    precio_unit?: number;    
    movimiento?: string;    
    fecha_movimiento?: string;
    motivo_ajuste?: string;
} // Agregar unidad ? 