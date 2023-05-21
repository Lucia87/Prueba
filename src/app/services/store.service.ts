import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Producto[] = [];

  constructor() { }

  addToShoppingCart(producto: Producto){
    this.myShoppingCart.push(producto);
  }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getTotal(){
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
