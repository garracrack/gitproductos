import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from '../interfaces/i-producto';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() producto: IProducto;

  @Input() showImage:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarRating(rating:number){
    this.producto.rating=rating;
  }

}
