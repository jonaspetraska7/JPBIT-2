import { Component, OnInit } from '@angular/core';
import { kategorijos } from '../KategorijuDuomenys';
import { KategorijuModelis } from '../KategorijuDuomenys';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CartServiseService } from '../cart-servise.service';
import { produktai, ProduktoModelis } from '../Produktai';
import { ApiServisasService } from '../api-servisas.service';
import { ProduktuKategorijosComponent } from '../produktu-kategorijos/produktu-kategorijos.component';

@Component({
    selector: 'app-left-category',
    templateUrl: './left-category.component.html',
    styleUrls: ['./left-category.component.css']
})
export class LeftCategoryComponent implements OnInit {

    constructor(private cartServisas: CartServiseService,private catID:ApiServisasService, private route: ActivatedRoute, private router: Router) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };

        
    }

    ngOnInit(): void {
    }

    products = produktai;

    categories = kategorijos
    

    currentCategoryId = 0;
    currentCategories = this.getCategoryByParent(this.currentCategoryId);
    currentParent = this.getParentId();

    getParentId() {
        for (let x of this.categories) {
            if (this.currentCategoryId == x.id) {
                return x.id_parent;
            }
        }

        return 0;
    }

    mygtukas(x:number){
        this.currentCategoryId=x;
        
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

    getCategoryByParent(idParent: number) {
        let collectedCategories = [];
        console.log('id parent : ' + idParent);

        for (let x of this.categories) {
            if (x.id_parent == idParent) {
                collectedCategories.push(x);
            }
        }

        return collectedCategories;
    }
}
