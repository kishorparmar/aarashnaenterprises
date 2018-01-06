import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductsService {
    constructor(private _http: Http) { }

    getProducts(): Observable<any[]> {
        return this._http.get('../../assets/products.json')
            .map((response: Response) => {
                const data = response.json();
                return data;
            });
    }
}