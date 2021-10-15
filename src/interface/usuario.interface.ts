export interface Usuario {
    id?: number;
    usuario: string;    
    pass: string;
    rol: string;    
    date_create?: Date;
    email: string;
    nombre: string;
}