import { Component } from '@angular/core';
import { products as data } from './data/products';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'course-2022';
  products: IProduct[] = data;
}
