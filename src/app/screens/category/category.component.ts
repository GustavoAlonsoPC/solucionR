import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/shared/models/products.model';
import { ServiceMainService } from 'src/app/shared/services/service-main.service';
import { ProductState } from '../../store/ngrx/product.state';
import { addToCart } from '../../store/ngrx/car.actions';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  
  public bodyArray:Array<Product>=[];

  loading: boolean = true;

  constructor(private service: ServiceMainService, private store: Store<ProductState>) { }

  ngOnInit(): void {

    this.loadProducts();
    while (!this.bodyArray) {
      this.loadProducts();
    }
    this.loading = false;
  }

  addItem(item: Product): void{
    this.store.dispatch(addToCart({ product: item }));
  }

  loadProducts(): void {
      this.service.getProducts().subscribe(res => this.bodyArray = res); 
  }

}
