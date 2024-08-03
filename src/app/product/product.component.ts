import { Component } from '@angular/core';
import { RecommendedProductComponent } from '../recommended-product/recommended-product.component';

interface Product {
  name: String;
  price: number;
  cat: String;
  image: String;
  id: number;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RecommendedProductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  ProductList: Product[] = [
    {
      name: 'Apple iPhone 13',
      price: 799,
      cat: 'Smartphones',
      image: 'assets/images/iphone-13-pro-max-smartphone-1.webp',
      id: 1,
    },
    {
      name: 'Samsung Galaxy S21',
      price: 699,
      cat: 'Smartphones',
      image: 'assets/images/iphone-13-pro-max-smartphone-1.webp',
      id: 2,
    },
    {
      name: 'Dell XPS 13',
      price: 999,
      cat: 'Laptops',
      image: 'assets/images/iphone-13-pro-max-smartphone-1.webp',
      id: 3,
    },
    {
      name: 'Apple MacBook Pro',
      price: 1299,
      cat: 'Laptops',
      image: 'assets/images/iphone-13-pro-max-smartphone-1.webp',
      id: 4,
    },
    {
      name: 'Sony WH-1000XM4',
      price: 349,
      cat: 'Headphones',
      image: 'assets/images/iphone-13-pro-max-smartphone-1.webp',
      id: 5,
    },
    {
      name: 'Bose QuietComfort 35 II',
      price: 299,
      cat: 'Headphones',
      image: 'assets/images/iphone-13-pro-max-smartphone-1.webp',
      id: 6,
    },
    {
      name: 'Apple iPad Pro',
      price: 999,
      cat: 'Tablets',
      image: 'assets/images/iphone-13-pro-max-smartphone-1.webp',
      id: 7,
    },
    {
      name: 'Samsung Galaxy Tab S7',
      price: 649,
      cat: 'Tablets',
      image: 'assets/images/iphone-13-pro-max-smartphone-1.webp',
      id: 8,
    },
    {
      name: 'Apple Watch Series 6',
      price: 399,
      cat: 'Wearables',
      image: 'assets/images/iphone-13-pro-max-smartphone-1.webp',
      id: 9,
    },
    {
      name: 'Samsung Galaxy Watch 3',
      price: 349,
      cat: 'Wearables',
      image: 'assets/images/iphone-13-pro-max-smartphone-1.webp',
      id: 10,
    },
    {
      name: 'Amazon Echo Dot (4th Gen)',
      price: 49,
      cat: 'Smart Home',
      image: 'assets/images/iphone-13-pro-max-smartphone-1.webp',
      id: 11,
    },
    {
      name: 'Google Nest Hub',
      price: 89,
      cat: 'Smart Home',
      image: 'assets/images/iphone-13-pro-max-smartphone-1.webp',
      id: 12,
    }
  ];

   recommendedProducts = [
    {
      name: 'Apple AirPods Pro',
      price: 249,
      cat: 'Accessories',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22',
      id: 13,
    },
    {
      name: 'Apple AirPods Pro',
      price: 249,
      cat: 'Accessories',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22',
      id: 13,
    },
    {
      name: 'Apple AirPods Pro',
      price: 249,
      cat: 'Accessories',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22',
      id: 13,
    },
    {
      name: 'Microsoft Surface Pro 7',
      price: 749,
      cat: 'Tablets',
      image: 'https://c1.neweggimages.com/ProductImage/34-735-502-V04.jpg',
      id: 18,
    },
    {
      name: 'Microsoft Surface Pro 7',
      price: 749,
      cat: 'Tablets',
      image: 'https://c1.neweggimages.com/ProductImage/34-735-502-V04.jpg',
      id: 18,
    },
    {
      name: 'Microsoft Surface Pro 7',
      price: 749,
      cat: 'Tablets',
      image: 'https://c1.neweggimages.com/ProductImage/34-735-502-V04.jpg',
      id: 18,
    },
    {
      
        name: 'Sony PlayStation 5 Digital ',
        price: 499,
        cat: 'Gaming',
        image: 'https://m.media-amazon.com/images/I/619BkvKW35L._SX522_.jpg',
        id: 21,
      },
    {
      name: 'AMD Ryzen 9 5900X',
      price: 549,
      cat: 'Components',
      image: 'https://m.media-amazon.com/images/I/616VM20+AzL._AC_SL1384_.jpg',
      id: 20,
    },
    {
      name: 'Sony PlayStation 5',
      price: 499,
      cat: 'Gaming',
      image: 'https://m.media-amazon.com/images/I/619BkvKW35L._SX522_.jpg',
      id: 21,
    },
    {
      name: 'Xbox Series X',
      price: 499,
      cat: 'Gaming',
      image: 'https://m.media-amazon.com/images/I/61JGKhqxHxL._SX522_.jpg',
      id: 22,
    },
    {
      name: 'Xbox Series X 1',
      price: 499,
      cat: 'Gaming',
      image: 'https://m.media-amazon.com/images/I/61JGKhqxHxL._SX522_.jpg',
      id: 22,
    },
    {
      name: 'Xbox Series X s',
      price: 499,
      cat: 'Gaming',
      image: 'https://m.media-amazon.com/images/I/61JGKhqxHxL._SX522_.jpg',
      id: 22,
    },
  ];
  


}
