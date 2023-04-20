import { Component, OnInit } from '@angular/core';
import { Observable, takeLast } from 'rxjs';
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

  lastItem: Product | undefined = {id: 0, title: 'No item added', image: '', price: 0};

  constructor(private store: Store<{cart: ProductState}>) {
    this.products$ = store.select(state => state.cart.products);
    this.products$.subscribe(val => {
      if(typeof val !== 'undefined') {
        this.lastItem = val.at(-1)
      };
    });
   }
   

  ngOnInit(): void {
    
  }

}
