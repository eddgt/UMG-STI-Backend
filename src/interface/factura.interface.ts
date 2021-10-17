export interface Factura {
    id?: number;
    mesa_id?: number;
    delivery_id?: number;
    cliente_id?: number;
    Usuarios_id?: number;
    date_fact: string;
    tipo_pago_id: number;    
    status: string;
    total: number;
    nit: string;
    tipo_pago: string;
}