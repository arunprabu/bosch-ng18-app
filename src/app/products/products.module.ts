import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { productsRoutes } from './products.routes';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {  RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(productsRoutes) // registering the child routes
  ],
})
export class ProductsModule {}
