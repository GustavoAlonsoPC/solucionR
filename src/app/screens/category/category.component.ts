import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  public bodyArray:Array<Product>=[
    {
        "id": 3,
        "nombre": "Tennis adidas",
        "precio": 250000.0,
        "imagen": ""
    }
  ] 
  constructor() { }

  ngOnInit(): void {
  }

  addItem(item: any){
    console.log(item)
  }

}
