import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { MarcaComponent } from './marca/marca.component';

export const MantenimientoRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Categoria', component: CategoriaComponent,
        data: {
          title: 'Mantenimiento Categoría',
          urls: [
            { title: 'Categoría', url: '/mantenimiento/Categoria' }
          ]
        }
      },
      {
        path: 'Marca', component: MarcaComponent,
        data: {
          title: 'Mantenimiento Marca',
          urls: [
            { title: 'Marca', url: '/mantenimiento/Marca' }
          ]
        }
      }
    ]
  }
]