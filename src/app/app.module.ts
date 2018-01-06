import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsService } from './products/products.service';
import { KeysPipe } from './products/keys.pipe';
import { ProductDetailComponent } from './products/product-detail.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    KeysPipe,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
