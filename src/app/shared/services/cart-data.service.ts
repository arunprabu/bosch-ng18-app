import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  // for any to any component communication
  // step 0: let's have the initial cart data
  private defaultCartItems: any[] = [
    {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38',
    },
    {
      id: 5,
      name: 'Table Cloth',
      category: 'Kitchen Essentials',
      price: '$6.13',
    },
  ];
  // Step 1: create an observable with initial data -- use BehaviorSubject
  // This should be an observer and an observable as well
  // we have default cart items, preferred one is BehaviorSubject
  private cartItems = new BehaviorSubject<any[]>(this.defaultCartItems);

  // Step 2: make it subscribable. any component can subscribe to the following
  latestCartItems$ = this.cartItems.asObservable(); // Let's subscribe to this in header.component.ts

  // step 3: let the product component push new object into the observable

  constructor() {}

  addToCart(product: any) {
    console.log(product);
    // This product should be pushed into the observable
    // let's update the cart
    this.latestCartItems$
      .pipe(take(1))
      .subscribe((existingCartItems: any[]) => {
        const updatedCartItems = [...existingCartItems, product];
        console.log(updatedCartItems);
        this.cartItems.next(updatedCartItems);
      });
  }
}
