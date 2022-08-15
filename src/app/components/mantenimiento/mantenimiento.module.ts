import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutes } from './mantenimiento-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { RouterModule } from '@angular/router';
import { MarcaComponent } from './marca/marca.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CategoriaComponent,
    MarcaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(MantenimientoRoutes),
    NgbModule
  ]
})
export class MantenimientoModule { }
