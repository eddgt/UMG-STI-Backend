export interface Empleado {
    id?: number;
    branch_id: string;
    dni: string;
    name: string;
    email?: string;
    birth_date?: Date;
    created_at?: Date;
    updated_at?: Date;
}