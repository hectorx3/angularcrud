import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {

  nombre: string = 'Saludos desde el hijo';

  @Input() lista: Observable<any>;

  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<number>();

  constructor(
  ){}
    
  ngOnInit(): void {
  }

  remove(id: number){
    this.delete.emit(id);
  }

  modify(id: number){
    this.update.emit(id);
  }

}
