import { Component, Input } from "@angular/core";
import { DataService } from "../data.service";
import { ProductsService } from "./products.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
    product: any;
    result: Array<any[]> = [];
    id: number;


    constructor(private dataService: DataService,
        private productsService: ProductsService,
        private activatedRoute: ActivatedRoute) {
        this.product = this.data;
        if (this.product === undefined) {

            this.activatedRoute.params.subscribe((params: Params) => {
                this.id = params['id'];
                console.log(this.id);
            });
            this.productsService.getProducts()
                .subscribe((val) => {
                    for (let key in val['products']) {
                        if (val['products'].hasOwnProperty(key)) {
                            this.result.push(val['products'][key]);
                        }
                    }
                    let pid = this.id;
                    var res = this.result.filter(function (obj) {
                        return obj['productId'] == pid;
                    });
                    this.product = res;
                });
        }
    }

    get data(): any {
        return this.dataService.serviceData;
    }

}