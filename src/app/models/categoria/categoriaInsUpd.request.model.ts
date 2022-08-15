export class CategoriaInsUpdRequest {
    idCategoria: number;
    idUsuario: number;
    descripcion: string;
    nombreCorto: string;
    estado: boolean;

    constructor() {
        this.idCategoria = 0;
        this.idUsuario = 0;
        this.descripcion = '';
        this.nombreCorto = '';
        this.estado = false;
    }
}