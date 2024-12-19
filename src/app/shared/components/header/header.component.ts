import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CartDataService } from '../../services/cart-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  cartItemsCount = 0;

  constructor(private cartDataService: CartDataService) {

  }

  ngOnInit(): void {
    this.cartDataService.latestCartItems$.subscribe((cartItems: any)=> {
      console.log(cartItems);
      this.cartItemsCount = cartItems.length;
    });
  }


}
