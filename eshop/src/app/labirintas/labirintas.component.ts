import { Component, OnInit, HostListener } from '@angular/core';
export enum KEY_CODE {
  RIGHT_ARROW = 100,
  LEFT_ARROW = 97,
  UP_ARROW = 119,
  DOWN_ARROW = 115
}

@Component({
  selector: 'app-labirintas',
  templateUrl: './labirintas.component.html',
  styleUrls: ['./labirintas.component.css']
})
export class LabirintasComponent implements OnInit {@HostListener('document:keypress', ['$event'])

keyEvent(event: KeyboardEvent) {
  if (event.keyCode == KEY_CODE.DOWN_ARROW) {
    this.moveDown(this.currentPosition)
  }
  if(event.keyCode==KEY_CODE.LEFT_ARROW){
    this.moveLeft(this.currentPosition)
  }
  if(event.keyCode==KEY_CODE.RIGHT_ARROW){
this.moveRight(this.currentPosition)
  }
  if(event.keyCode==KEY_CODE.UP_ARROW){
this.moveUP(this.currentPosition)
  }
}

  constructor() { }

  ngOnInit(): void {
  }
  labirinth = [
    'start', 'wall', 'wall', 'wall', 'path',
    'path', 'wall', 'wall', 'path', 'path',
    'path', 'wall', 'path', 'path', 'end',
    'path', 'path', 'path', 'wall', 'path',
    'wall', 'wall', 'wall', 'wall', 'path'
  ]

  columnNumber = 5;

  currentPosition=0;

  funkcija() {
    console.log(true)
  }

  allowMoveUp(x: number) {
    if (x - this.columnNumber <= 0 || this.labirinth[x-this.columnNumber]=='wall') {
      return false
    }
    else { return true }
  }

  allowMoveDown(x:number){
    if (x + this.columnNumber >= this.labirinth.length || this.labirinth[x+this.columnNumber]=='wall') {
      return false
    }
    else { return true }
  }

  allowMoveRight(x:number){
    if ((x+1)%this.columnNumber==0 || this.labirinth[x+1]=='wall') {
      return false
    }
    else { return true }
  }

  allowMoveLeft(x:number){
    if (x%this.columnNumber==0 || this.labirinth[x-1]=='wall') {
      return false
    }
    else { return true }
  }

  moveUP(x:number){
    if(this.allowMoveUp(x)){
      this.labirinth[x]='path';
      this.currentPosition=x-this.columnNumber;
      if(this.checkWin(this.currentPosition)){
        alert("win"); return
      }
      this.labirinth[x-this.columnNumber]='start'
    }
    else{
      alert("klaidingas ejimas i virsu")
    }
  }

  moveDown(x:number){
    if(this.allowMoveDown(x)){
      this.labirinth[x]='path';
      this.currentPosition=x+this.columnNumber;
      if(this.checkWin(this.currentPosition)){
        alert("win"); return}
      this.labirinth[x+this.columnNumber]='start'
    }
    else{
      alert("klaidingas ejimas i apacia")
    }
  }

  moveLeft(x:number){
    if(this.allowMoveLeft(x)){
      this.labirinth[x]='path';
      this.currentPosition=x-1;
      if(this.checkWin(this.currentPosition)){
        alert("win"); return}
      this.labirinth[x-1]='start'
    }
    else{
      alert("klaidingas ejimas i kaire")
    }
  }

  moveRight(x:number){
    if(this.allowMoveRight(x)){
      this.labirinth[x]='path';
      this.currentPosition=x+1;
      if(this.checkWin(this.currentPosition)){
        alert("win"); return}
      this.labirinth[x+1]='start'
    }
    else{
      alert("klaidingas ejimas i desine")
    }
  }

  checkWin(x:number){
    if(this.labirinth[x]=='end'){
      return true
    }
    return false
  }


}
