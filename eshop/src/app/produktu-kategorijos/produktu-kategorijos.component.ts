import { Component, OnInit } from '@angular/core';
import { CartServiseService } from '../cart-servise.service';
import { produktai } from '../Produktai';
import { ProduktoModelis } from '../Produktai';
import { kategorijos } from '../KategorijuDuomenys';
import { KategorijuModelis } from '../KategorijuDuomenys';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-produktu-kategorijos',
    templateUrl: './produktu-kategorijos.component.html',
    styleUrls: ['./produktu-kategorijos.component.css']
})
export class ProduktuKategorijosComponent implements OnInit {

    constructor(private cartServisas: CartServiseService, private route: ActivatedRoute) { }

    ngOnInit(): void {
    }

    prekes = produktai;

    naujas = this.sortPrice();

    prekesPrices: ProduktoModelis[] = []

    categorisedItems: ProduktoModelis[] = []

    kategorijos = ["men's clothing", "jewelery", "electronics", "women's clothing"]

    sortedPrice = this.cartServisas.getSortedPrice();

    sortPrice() {
        let naujas = this.prekes.sort(function (a, b): any {
            return b.price < a.price ? 1 : b.price > a.price ? -1 : 0;
        });
        return naujas
    }

    getCategory(a: number) {
        this.categorisedItems = []
        for (let x of this.prekes) {

            if (x.category == this.kategorijos[a]) {
                this.categorisedItems.push(x)
            }
        }
    }

    categories = kategorijos
    
    routeParams = this.route.snapshot.paramMap;
    currentCategoryId = Number(this.routeParams.get('idCategory'));
    currentCategories = this.getCategoryByParent(this.currentCategoryId);

    getCategoryByParent(idParent: number = 0) {
        let collectedCategories = [];

        for (let x of this.categories) {
            if (x.id_parent == idParent) {
                collectedCategories.push(x);
            }
        }

        return collectedCategories;
    }
}

