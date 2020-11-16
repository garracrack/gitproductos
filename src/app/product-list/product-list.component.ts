import { Component, OnInit } from '@angular/core';
import { IProducto } from '../interfaces/i-producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public title:string="Mi lista de Productos";
  public headers={image: 'Imagen', descripcion:'Producto', price: 'precio', avail: 'disponible'};
  public productos: IProducto[] = [{
    id: 1,
    desc: 'SSD hard drive',
    avail: new Date('2016-10-03'),
    price: 75,
    imageUrl: 'assets/ssd.jpg',
    rating: 5
  },{
    id: 2,
    desc: 'LGA1151 Motherboard',
    avail: new Date('2016-09-15'),
    price: 96.95,
    imageUrl: 'assets/motherboard.jpg',
    rating: 4
  }];

  public showImage:boolean=true;
  public filterSearch:string="";


  constructor() { }

  ngOnInit(): void {
  }

  toggleImage(){
    this.showImage=!this.showImage;
  }

}
