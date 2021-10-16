import { Component, OnInit } from '@angular/core';
import { CartServiseService } from '../cart-servise.service';
import { produktai } from '../Produktai';
import { ProduktoModelis } from '../Produktai';
import { kategorijos } from '../KategorijuDuomenys';
import { KategorijuModelis } from '../KategorijuDuomenys';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

@Component({
    selector: 'app-produktu-kategorijos',
    templateUrl: './produktu-kategorijos.component.html',
    styleUrls: ['./produktu-kategorijos.component.css', '../produktas/produktas.component.css']
})

export class ProduktuKategorijosComponent implements OnInit {

    constructor(private cartServisas: CartServiseService, private route: ActivatedRoute, private router: Router) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }

    ngOnInit(): void {
    }

    products = produktai;


    // sortPrice() {
    //     let naujas = this.prekes.sort(function (a, b): any {
    //         return b.price < a.price ? 1 : b.price > a.price ? -1 : 0;
    //     });
    //     return naujas
    // }


    categories = kategorijos


    currentCategoryId = Number(this.route.snapshot.paramMap.get("idCategory"));
    currentCategories = this.getCategoryByParent(this.currentCategoryId);
    currentProducts = this.getProductsByCategory(this.currentCategoryId);

    currentParent = this.getParentId();

    getParentId() {
        for (let x of this.categories) {
            if (this.currentCategoryId == x.id) {
                return x.id_parent;
            }
        }

        return 0;
    }

    getProductsByCategory(idCategory: number) {
        if(!idCategory){
        return this.products;
        }
        let collectedProducts = [];

        for (let x of this.products) {
            if (x.categories.indexOf(idCategory) > -1) {
                collectedProducts.push(x);
            }
        }

        return collectedProducts;
    }

    addToCart(x: ProduktoModelis) {
        return this.cartServisas.addToCart(x);
    }

    getCategoryByParent(idParent: number) {
        let collectedCategories = [];

        for (let x of this.categories) {
            if (x.id_parent == idParent) {
                collectedCategories.push(x);
            }
        }

        return collectedCategories;
    }
}
