import { Component } from '@angular/core';

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-create-inventory',
  templateUrl: './create-inventory.component.html',
  styleUrls: ['./create-inventory.component.css']
})
export class CreateInventoryComponent {

  product: Product = {
    id: '', // Leave the ID empty initially
    name: '',
    quantity: 0,
    price: 0
  };

  constructor() { }

  submitForm() {
    // Generate a unique ID for the product
    const uniqueId = this.generateUniqueId();

    // Set the generated ID for the product
    this.product.id = uniqueId;

    // Get existing products from local storage
    const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');

    // Add new product to the array
    existingProducts.push(this.product);

    // Save updated products array to local storage
    localStorage.setItem('products', JSON.stringify(existingProducts));

    console.log('Product data saved successfully!');
    alert("Data Saved");

    // Reset the form
    this.product = {
      id: '', // Reset the ID to empty
      name: '',
      quantity: 0,
      price: 0
    };
  }

  generateUniqueId(): string {
    // Generate a unique ID using a combination of current timestamp and a random number
    const timestamp = Date.now().toString();
    const randomNum = Math.floor(Math.random() * 1000).toString();
    return timestamp + randomNum;
  }
}
