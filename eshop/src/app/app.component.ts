import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ApiServisasService } from './api-servisas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'eshop';

  constructor(private servisas:ApiServisasService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
        };

    router.events.subscribe((event: any) => {
      //console.log(event);
      if (event instanceof NavigationEnd ) {
        this.klaida404 = event.url == "/klaida404" || event.urlAfterRedirects == "/klaida404";
      }
    });

  }

  klaida404=false;

check=location.pathname.includes('kategorija');
isfunk=this.servisas.getLocation();

  gautiduomenis(catID:any){
console.log("gavom duomenis")
console.log(catID)
  }

}

// 


