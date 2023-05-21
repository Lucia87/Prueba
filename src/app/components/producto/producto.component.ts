import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input() producto: Producto = {
    id: '',
    title: '',
    price: 0,
    image: '',
    description: '',
    category: '',
  };

  @Output() addedProducto = new EventEmitter<Producto>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddCart(){
    this.addedProducto.emit(this.producto);
  }

}
