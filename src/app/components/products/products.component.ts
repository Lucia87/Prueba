import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Producto[] = [];
  total = 0;
  productos: Producto[] = [];

  constructor(private storeService: StoreService,
              private productsService: ProductsService) {
    this.myShoppingCart = this.storeService.getShoppingCart();
   }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.productos = data;
    });
  }

  onAddToShoppingCart(producto: Producto){
    this.storeService.addToShoppingCart(producto);
    this.total = this.storeService.getTotal();
  }

}
