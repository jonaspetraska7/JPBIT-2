import { Component, OnInit } from '@angular/core';
import { CartServiseService } from '../cart-servise.service';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css']
})
export class MemoryGameComponent implements OnInit {

  constructor(private cartServisas:CartServiseService) { }

  ngOnInit(): void {
  }

  maxUsedClasses = 4;
  delayTime = 500;
  availableClasses = [
      'egg', 'egg1', 'egg2', 'egg3', 'egg4', 'egg5', 'egg6', 'egg7', 'egg8', 'egg9', 'egg10', 'egg11',
      'round', 'round1', 'round2', 'round3', 'round4', 'round5', 'round6', 'round7', 'round8', 'round9',
      'round10', 'round11',
      'dashed', 'dashed1', 'dashed2', 'dashed3', 'dashed4', 'dashed5', 'dashed6', 'dashed7', 'dashed8',
      'dashed9', 'dashed10', 'dashed11',
      'snow', 'snow1', 'snow2', 'snow3', 'snow4', 'snow5', 'snow6', 'snow7', 'snow8',
      'snow9', 'snow10', 'snow11',
      'triangle', 'triangle1', 'triangle2', 'triangle3', 'triangle4', 'triangle5',
      'triangle6', 'triangle7', 'triangle8', 'triangle9', 'triangle10', 'triangle11'
  ];

  shuffledAvailableClasses = this.shuffleArray(this.availableClasses);
  unshuffledCards: any
  shuffledCards: any;

  allowAction = true;
  openedCard = {
      open: false,
      id: -1,
      className: ''
  };
  openedIndex = -1;

  start = false;

  victory = false;

  klases=true;

  starting() {
      this.start = true
      this.unshuffledCards = this.generateCards();
      this.shuffledCards = this.shuffleArray(this.unshuffledCards);
  }
  restarting(){
      this.start=false
  }

  usedClases(x: number) {
      if (this.maxUsedClasses <= 2 && x < 0) {
          alert('Ne mažiau nei 2');
          this.maxUsedClasses = 2;
          return;
      }

      if (this.maxUsedClasses >= this.availableClasses.length && x > 0) {
          alert('Ne daugiau nei ' + this.availableClasses.length);
          this.maxUsedClasses = this.availableClasses.length;
          return;
      }

      this.maxUsedClasses += x;
  }
  generateCards() {
      let maxClasses = Math.min(this.maxUsedClasses, this.shuffledAvailableClasses.length);
      let generatedCards = [];
      let currentId = 0;

      for (let i = 0; i < maxClasses; i++) {
          for (let j = 0; j < 2; j++) {
              generatedCards.push(
                  {
                      open: false,
                      id: ++currentId,
                      className: this.shuffledAvailableClasses[i]
                  }
              );
          }
      }

      return generatedCards;
  }

  flip(cardind: number) {
      if (!this.allowAction) {
          return;
      }
      if (this.shuffledCards[cardind].open) {
          return;
      }
      this.shuffledCards[cardind].open = true;
      if (this.openedCard.id != -1) {
          if (this.openedCard.className == this.shuffledCards[cardind].className) {
              this.openedCard.id = -1;
              this.openedCard.className = '';
              this.openedIndex = -1;
              this.checkVictory()
              return;
          }
          else {
              this.allowAction = false
              var that = this;

              setTimeout(function () {
                  that.shuffledCards[cardind].open = false;
                  that.shuffledCards[that.openedIndex].open = false;
                  that.allowAction = true;

                  that.openedCard = {
                      open: false,
                      id: -1,
                      className: ''
                  };
                  that.openedIndex = -1;
              }, this.delayTime);
          }
      } else {
          this.openedCard.className = this.shuffledCards[cardind].className;
          this.openedCard.id = this.shuffledCards[cardind].id;
          this.openedCard.open = true;
          this.openedIndex = cardind;
          return;
      }
  }

  shuffleArray(anArray: any[]): any[] {
      return anArray.map(a => [Math.random(), a])
          .sort((a, b) => a[0] - b[0])
          .map(a => a[1]);
  }

  checkVictory() {
      this.victory = true
      for (let x of this.shuffledCards) {
          if (!x.open) {
              this.victory = false
              return
          }
      }
      return
  }

getDiscount(){
    this.cartServisas.getDiscount(this.maxUsedClasses)
}

}
