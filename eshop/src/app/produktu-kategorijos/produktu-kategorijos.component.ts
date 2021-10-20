import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartServiseService } from '../cart-servise.service';
import { produktai } from '../Produktai';
import { ProduktoModelis } from '../Produktai';
import { kategorijos } from '../KategorijuDuomenys';
import { KategorijuModelis } from '../KategorijuDuomenys';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { ApiServisasService } from '../api-servisas.service';

@Component({
    selector: 'app-produktu-kategorijos',
    templateUrl: './produktu-kategorijos.component.html',
    styleUrls: ['./produktu-kategorijos.component.css', '../produktas/produktas.component.css']
})

export class ProduktuKategorijosComponent implements OnInit {

    constructor(private cartServisas: CartServiseService,private sendID:ApiServisasService, private route: ActivatedRoute, private router: Router) {
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
        this.cartServisas.addToCart(x);
        alert("preke priedeta i krepseli")
        
        
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
}
