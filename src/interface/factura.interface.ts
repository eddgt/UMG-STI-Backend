export interface Factura {
    id?: number;
    mesa_id?: number;
    delivery_id?: number;
    cliente_id?: number;
    Usuario_id?: number;
    date_fact: string;
    tipo_pago: string;
}