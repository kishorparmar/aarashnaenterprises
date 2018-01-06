import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    providers: [ProductsService]
})
export class ProductsComponent {

    result: Array<any[]> = [];

    constructor(private productsService: ProductsService,
        private dataService: DataService,
        private router: Router) {
        productsService.getProducts()
            .subscribe((val) => {
                for (let key in val['products']) {
                    if (val['products'].hasOwnProperty(key)) {
                        this.result.push(val['products'][key]);
                    }
                }
            });
    }

    getProduct(id: number): void {
        var res = this.result.filter(function (obj) {
            return obj['productId'] == id;
        });
        this.data = res;
        this.router.navigate(['/productdetail', id]);
    }

    set data(value: any) {
        this.dataService.serviceData = value;
    }
}