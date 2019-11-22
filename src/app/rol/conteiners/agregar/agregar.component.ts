import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Rol } from '../../dto/rol';
import { RolService } from '../../services/rol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.sass']
})
export class AgregarComponent implements OnInit {

  rolesForm = new FormGroup({
    idRol: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
  });

  constructor(
    private rolService: RolService,
    private router: Router
  ) { }
  
  ngOnInit() {
  }

  save(){
    const nuevo: Rol = this.rolesForm.value;
    this.rolService.save(nuevo)
      .subscribe(respuesta => {
        console.log(respuesta);
        this.router.navigate(['/roles'])
      });
  }

}
