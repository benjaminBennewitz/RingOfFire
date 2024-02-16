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
      this.currentCard = this.game.stack.pop();
      this.pickCardAniamtion = true;
      console.log(this.currentCard);

      setTimeout (() => {
        this.pickCardAniamtion = false;
      }, 1500);
    }
  }

  newGame(){
    console.log(this.game);
  }
}
