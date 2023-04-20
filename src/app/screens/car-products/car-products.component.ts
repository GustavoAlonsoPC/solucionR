import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/products.model';
import { ProductState } from '../ngrx/product.state';
import { Store, select } from '@ngrx/store';
import { __values } from 'tslib';

@Component({
  selector: 'app-car-products',
  templateUrl: './car-products.component.html',
  styleUrls: ['./car-products.component.scss']
})
export class CarProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  prods: Array<Product> = [];

  constructor(private store: Store<{cart: ProductState}>) {
    this.products$ = store.select(state => state.cart.products);
   }
   

  ngOnInit(): void {
  }

}
