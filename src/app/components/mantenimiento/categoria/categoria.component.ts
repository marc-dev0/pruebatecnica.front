import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CategoriaInsUpdRequest } from 'src/app/models/categoria/categoriaInsUpd.request.model';
import { CategoriaListView } from 'src/app/models/categoria/categoriaList-view.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoriaListViewList: CategoriaListView[] = [];
  paginateList: CategoriaListView[]=[];
  request = new CategoriaInsUpdRequest();
  @Input() formModalReference: any;
  currentPage = 1; 
  maxSize = 10; 
  itemsPerPage = 10;
  totalItems = 0;

  loading = false;
  descripcion = '';
  titulo = '';
  mensajeModal = '';
  modalReference: NgbModalRef;
  constructor(
    private categoriaService: CategoriaService,
    private modalService: NgbModal 
  ) { 
    
  }

  async ngOnInit () {
    await this.categoriaList();
  }

  async buscar() {
    await this.categoriaList();
  }

  async limpiar() {
    this.descripcion = '';
    this.categoriaList();
  }

  async guardar() {
    let count = 0;

    if (!this.request.descripcion)
      count++;
  
    if (!this.request.nombreCorto) 
      count++;

    await this.categoriaService.InsertUpdateAsync(this.request).toPromise().then(
      res => {
        debugger;
        if (res) {
          swal.fire('Información', this.mensajeModal, 'success');
          this.modalReference.close(1);
        }
      }
    ) 
    if (count > 0) {
      swal.fire('Error', 'Ingrese todos los campos porfavor', 'error');
      return;
    }
  }

  async operacion(content: any, item: any) {

    if (item) {
      this.mensajeModal = 'Se actualizo correctamente';
      this.titulo = 'Editar Categoría';
      this.request.idCategoria = item.idCategoria;
      this.request.descripcion = item.descripcion;
      this.request.nombreCorto = item.nombreCorto;
      this.request.estado = item.estado;
    }
    else  {
      this.mensajeModal = 'Se registro correctamente';
      this.titulo = 'Crear Categoría';
      this.request.descripcion = '';
      this.request.nombreCorto = '';
      this.request.estado = false;
    }
    this.request.idUsuario = 1;
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((value: any) => {
      console.log('result' + value);
      if (value == 1) {
        this.categoriaList();
      }
    })
  }

  async categoriaList() {
    this.loading = true;
    await this.categoriaService.obtnerPlanId(this.descripcion).toPromise().then(
      res => {
        this.categoriaListViewList = res.data;
          this.totalItems = this.categoriaListViewList.length;
          debugger;
          this.paginateList = this.categoriaListViewList.slice(((this.currentPage - 1) * this.itemsPerPage), (this.currentPage * this.itemsPerPage));
      }
    );

    this.loading = false;
  }

  pageChanged(currentPage: any) {
    this.currentPage = currentPage;
    this.paginateList = this.categoriaListViewList.slice(((this.currentPage - 1) * this.itemsPerPage), (this.currentPage * this.itemsPerPage));
  }

  async cambiarFilas() {
    this.pageChanged(1);
  }
}
