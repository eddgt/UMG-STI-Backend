export interface CajaChica {    
    Usuarios_id?: number;
    header_caja_chica_id?: number;
    caja_descripcion?: string;
    fecha_apertura?: Date;
    fecha_cierre?: Date;
    monto_inicial?: number;
    totalingreso?: number; // quitar campo? está demas ?
} // Agregar unidad ? 