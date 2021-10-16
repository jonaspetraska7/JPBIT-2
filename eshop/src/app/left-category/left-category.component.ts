import { Component, OnInit } from '@angular/core';
import { kategorijos } from '../KategorijuDuomenys';
import { KategorijuModelis } from '../KategorijuDuomenys';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-left-category',
    templateUrl: './left-category.component.html',
    styleUrls: ['./left-category.component.css']
})
export class LeftCategoryComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }

    ngOnInit(): void {
    }

    categories = kategorijos

    currentCategoryId = Number(this.route.snapshot.paramMap.get("idLeftCategory"));
    leftCategories = this.getCategoryByParent(this.currentCategoryId);

    getCategoryByParent(idParent: number) {
        console.log(this.route.snapshot.paramMap);
        let collectedCategories = [];

        for (let x of this.categories) {
            if (x.id_parent == idParent) {
                collectedCategories.push(x);
            }
        }

        return collectedCategories;
    }
}
