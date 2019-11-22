import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RolService } from '../services/rol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.sass']
})
export class RolComponent implements OnInit {

  listaRoles: Observable<any>;

  constructor(
    private rolService: RolService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listaRoles = this.rolService.getRoles();
  }

  OnDelete(id: string){
    this.rolService.delete(id)
      .subscribe(respuesta => {
        this.listaRoles = this.rolService.getRoles();
      });
  }

  OnUpdate(id: string){
    this.router.navigate(['/roles/editar/'+id]);
  }

}
