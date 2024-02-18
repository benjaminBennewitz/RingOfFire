import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';

import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, DialogAddPlayerComponent, MatButtonModule, MatIconModule, MatDialogModule, DialogAddPlayerComponent, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  game:Game;
  pickCardAniamtion: boolean = false;
  currentCard:string | undefined = '';

  constructor(public dialog: MatDialog){
    this.game = new Game();
    this.newGame();
  }

  takeCard(){
    if(!this.pickCardAniamtion){
      this.pickCardAniamtion = true;
      this.currentCard = this.game.stack.pop();

      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if(name && name.length > 2){
        this.game.players.push(name);
      }
    });
  }
}
