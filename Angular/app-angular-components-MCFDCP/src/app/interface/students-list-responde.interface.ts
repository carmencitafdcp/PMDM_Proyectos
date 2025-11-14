
export interface Student {
id: any;
    numero: number;
    nombre: string;
    apellidos: string;
    nif: string;
    edad: number;
    curso: string;
}

export interface StudentsListResponse {
    students: Student[];
    total?: number;
}
