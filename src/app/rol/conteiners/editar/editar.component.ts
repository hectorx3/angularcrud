import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RolService } from '../../services/rol.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Rol } from '../../dto/rol';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.sass']
})
export class EditarComponent implements OnInit {

  rolesForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
  });

  constructor(
    private rolService: RolService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }
  
  ngOnInit() {
  }

  edit(){
    const idRol = this.activeRoute.snapshot.paramMap.get("id");
    const nuevo: Rol = {
      ...this.rolesForm.value,
    };

    this.rolService.update(nuevo, idRol)
      .subscribe(respuesta => {
        console.log(respuesta);
        this.router.navigate(['/roles'])
      });
  }

}
