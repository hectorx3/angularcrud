import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RolComponent } from './rol/conteiners/rol.component';
import { AgregarComponent } from './rol/conteiners/agregar/agregar.component';
import { EditarComponent } from './rol/conteiners/editar/editar.component';


const routes: Routes = [
  {
    path: 'roles', 
    component: RolComponent,
    children: [
      
      {
        path: 'editar/:id', 
        component: EditarComponent
      },
    ]
  },
  {
    path: 'agregar', 
    component: AgregarComponent
  },
  {
    path: '', 
    redirectTo: '/roles',
    pathMatch: 'full'
  },
  {
    path: '**', 
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
