import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-baneris',
    templateUrl: './baneris.component.html',
    styleUrls: ['./baneris.component.css']
})
export class BanerisComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        window.addEventListener('scroll', this.scroll, true);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }

    scroll = (): void => {
        let header = document.getElementById('header');
        let sticky = header?.offsetHeight;

        if (window.pageYOffset > Number(sticky)) {
            header?.classList.add('sticky');
        } else {
            header?.classList.remove('sticky');
        }
    };
}
