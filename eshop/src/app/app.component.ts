import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eshop';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
        };
console.log(this.router.url)
}


  klaida404=this.router.url.includes("/klaida404");

patikrinimas() {
  return window.location.href.includes("klaida404");
}
}

