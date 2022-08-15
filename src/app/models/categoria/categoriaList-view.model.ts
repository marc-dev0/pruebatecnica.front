
export class CategoriaListView {
    idCategoria: number;
    descripcion: string;
    nombreCorto: string;
    userName: string;
    fechaRegistro: Date;
    estado: boolean;
    estadoDesc: string;
    constructor() {
        this.idCategoria = 0;
        this.descripcion = '';
        this.nombreCorto = '';
        this.userName = '';
        this.fechaRegistro = new Date();
        this.estado = false;
        this.estadoDesc = '';
    }
}