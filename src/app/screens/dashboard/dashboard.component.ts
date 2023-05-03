import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/products.model';
import { ProductState } from '../../store/ngrx/product.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  counter$: Observable<number>;

  constructor(private store: Store<{cart: ProductState}>) {
    this.counter$ = store.select(state => state.cart.products.length);
  }
}
