import { Component } from '@angular/core';

interface Product {
  name: String;
  price: number;
  cat: String;
  image: String;
  id: number;
}

@Component({
  selector: 'app-recommended-product',
  standalone: true,
  imports: [],
  templateUrl: './recommended-product.component.html',
  styleUrl: './recommended-product.component.css'
})
export class RecommendedProductComponent {


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
