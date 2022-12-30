import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'course-2022';
  products: IProduct[] = [];
  loading = false;
  tern: string = '';
  constructor(private productsService: ProductService) {}
  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
      this.loading = false;
    });
  }
}
