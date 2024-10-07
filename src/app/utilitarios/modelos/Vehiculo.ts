export interface Vehiculo {
    id: number;
    codigo: string;
    created_at?: string |null ;
    marca: string;
    modelo?: string;
    anio?: string;
    kilometraje?: string;
    precio?: number;
    deseo?: number | null;
}

export interface Respuesta{
    codigo: string;
    mensaje:string;
    data:Array<Vehiculo>|Vehiculo|any;
    rows:number;
    pages:number;
    records:number;
    page:number
}
