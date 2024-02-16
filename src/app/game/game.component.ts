import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  game:Game;
  pickCardAniamtion: boolean = false;
  currentCard:string | undefined = '';

  constructor(){
    this.game = new Game();
    this.newGame();
  }

  takeCard(){
    if(!this.pickCardAniamtion){
      this.pickCardAniamtion = true;
      this.currentCard = this.game.stack.pop();

      setTimeout (() => {
        this.checkType();
        this.pickCardAniamtion = false;
      }, 1200);
      
      console.log(this.currentCard);
      console.log(this.game);
    }
  }

  checkType(){
    if(this.currentCard != undefined){
      this.game.playedCards.push(this.currentCard);
    }
  }

  newGame(){
    console.log(this.game);
  }
}
