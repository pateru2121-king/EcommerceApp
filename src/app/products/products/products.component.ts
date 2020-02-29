import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from'../../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService :ProductServiceService) { }
  mobileTypes:any[];
  ngOnInit() {
    this.mobileTypes = this.productService.getAllProducts();
  }
  
}
