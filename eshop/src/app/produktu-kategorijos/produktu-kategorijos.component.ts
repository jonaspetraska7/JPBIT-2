import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartServiseService } from '../cart-servise.service';
import { produktai } from '../Produktai';
import { ProduktoModelis } from '../Produktai';
import { kategorijos } from '../KategorijuDuomenys';
import { KategorijuModelis } from '../KategorijuDuomenys';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { ApiServisasService } from '../api-servisas.service';
import { of } from 'rxjs';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';

@Component({
    selector: 'app-produktu-kategorijos',
    templateUrl: './produktu-kategorijos.component.html',
    styleUrls: ['./produktu-kategorijos.component.css', '../produktas/produktas.component.css']
})

export class ProduktuKategorijosComponent implements OnInit {

    constructor(private cartServisas: CartServiseService, private sendID: ApiServisasService, private route: ActivatedRoute, private router: Router) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };

        console.log('Suveikis');
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


    public currentCategoryId = Number(this.route.snapshot.paramMap.get("idCategory"));
    currentCategories = this.getCategoryByParent(this.currentCategoryId);
    currentProducts = this.getProductsByCategory(this.currentCategoryId);

    allProducts = this.currentProducts;
    currentParent = this.getParentId();


    sortByValue(x: string) {
        switch (x) {
            case "price1":
                {
                    this.currentProducts = this.currentProducts.sort(function (a, b): any {
                        return b.price < a.price ? 1 : b.price > a.price ? -1 : 0;
                    }); break
                }
            case "price2":
                {
                    this.currentProducts = this.currentProducts.sort(function (a, b): any {
                        return b.price > a.price ? 1 : b.price < a.price ? -1 : 0;
                    }); break
                }
            case "name2":
                {
                    this.currentProducts = this.currentProducts.sort(function (a, b): any {
                        return b.title > a.title ? 1 : b.title < a.title ? -1 : 0;
                    }); break
                }
            case "name1":
                {
                    this.currentProducts = this.currentProducts.sort(function (a, b): any {
                        return b.title < a.title ? 1 : b.title > a.title ? -1 : 0;
                    }); break
                }
            case "rate2":
                {
                    this.currentProducts = this.currentProducts.sort(function (a, b): any {
                        return b.rating.rate < a.rating.rate ? 1 : b.rating.rate > a.rating.rate ? -1 : 0;
                    }); break
                }
            case "rate1":
                {
                    this.currentProducts = this.currentProducts.sort(function (a, b): any {
                        return b.rating.rate > a.rating.rate ? 1 : b.rating.rate < a.rating.rate ? -1 : 0;
                    }); break
                }
            case "count1":
                {
                    this.currentProducts = this.currentProducts.sort(function (a, b): any {
                        return b.rating.count > a.rating.count ? 1 : b.rating.count < a.rating.count ? -1 : 0;
                    }); break
                }
            case "count2":
                {
                    this.currentProducts = this.currentProducts.sort(function (a, b): any {
                        return b.rating.count < a.rating.count ? 1 : b.rating.count > a.rating.count ? -1 : 0;
                    }); break
                }
            case "quantity1": {
                this.currentProducts = this.currentProducts.sort(function (a, b): any {
                    return b.quantity < a.quantity ? 1 : b.quantity > a.quantity ? -1 : 0;
                });
                break;
            }
            case "quantity2": {
                this.currentProducts = this.currentProducts.sort(function (a, b): any {
                    return b.quantity > a.quantity ? 1 : b.quantity < a.quantity ? -1 : 0;
                });
                break;
                
            }
            default: this.currentProducts = this.currentProducts.sort(function (a, b): any {
                return b.id < a.id ? 1 : b.id > a.id ? -1 : 0;
            }); break
        }
    }
    getParentId() {
        for (let x of this.categories) {
            if (this.currentCategoryId == x.id) {
                return x.id_parent;
            }
        }

        return 0;
    }

    ieskojimas(event: any) {
        let ivestas_tekstas = event.target.value;
        if (event == "") this.currentProducts = this.allProducts;
        this.currentProducts = this.allProducts.filter(x => x.title.includes(ivestas_tekstas));
    }

    getProductsByCategory(idCategory: number) {
        if (!idCategory) {
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
        this.cartServisas.addToCart(x);


    }

    public getCategoryByParent(idParent: number) {
        console.log('idParent from category: ' + idParent);
        let collectedCategories = [];

        for (let x of this.categories) {
            if (x.id_parent == idParent) {
                collectedCategories.push(x);
            }
        }

        this.sendID.changeID(idParent);
        this.sendID.emitter.emit();

        return collectedCategories;
    }

    inform(x: ProduktoModelis) {
        alert(" Atsiprašome, kad prekės " + x.title + " nebeturime, informuosime Jus kai vėl turėsime")
    }
}
