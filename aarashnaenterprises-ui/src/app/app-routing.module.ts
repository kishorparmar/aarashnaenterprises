import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Product1Component } from './products/product-1.component';
import { Product4Component } from './products/product-4.component';
import { Product3Component } from './products/product-3.component';
import { Product2Component } from './products/product-2.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product1', component: Product1Component },
  { path: 'product2', component: Product2Component },
  { path: 'product3', component: Product3Component },
  { path: 'product4', component: Product4Component },
  { path: 'aboutus', component: AboutComponent },
  { path: 'contactus', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
