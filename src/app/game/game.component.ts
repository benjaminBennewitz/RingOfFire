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

  constructor(){
    this.game = new Game();
    this.newGame();
  }

  takeCard(){
    this.pickCardAniamtion = true;
  }

  newGame(){
    console.log(this.game);
  }
}
