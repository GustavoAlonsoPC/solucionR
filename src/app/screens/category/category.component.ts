import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/products.model';
import { ServiceMainService } from 'src/app/shared/services/service-main.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  
  public bodyArray:Array<Product>=[];

  loading: boolean = true;

  constructor(private service: ServiceMainService) { }

  ngOnInit(): void {

    this.loadProducts();
  }

  addItem(item: any){
    console.log(item)
  }

  loadProducts(): void {
    setTimeout(() => {
      this.service.getProducts().subscribe(res => this.bodyArray = res);
      this.loading = false;
    }, 2000);
  }

}
