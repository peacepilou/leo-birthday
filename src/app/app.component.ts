import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonsComponent } from './buttons/buttons.component';
import { Buttons2Component } from './buttons2/buttons2.component';
import { Buttons3Component } from './buttons3/buttons3.component';
import { Buttons4Component } from './buttons4/buttons4.component';
import { Buttons5Component } from './buttons5/buttons5.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toggle: any;
  toggle2: any;
  toggle3: any;
  toggle4: any;
  toggle5: any;
  toggle6SecondGuess: any;
  toggle7Reveal: any;
  toggle8FirstBadAnswer: any;
  toggle9SecondBadAnswer: any;
  answer: any;
  answer2: any;
  congrats: any;

  title = 'leo-birthday';

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ButtonsComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.toggle = result;
    });
  }
  openDialog2() {
    const dialogRef = this.dialog.open(Buttons2Component);

    dialogRef.afterClosed().subscribe(result => {
      this.toggle2 = result;
    });
  }
  openDialog3() {
    const dialogRef = this.dialog.open(Buttons3Component);

    dialogRef.afterClosed().subscribe(result => {
      this.toggle3 = result;
    });
  }
  openDialog4() {
    const dialogRef = this.dialog.open(Buttons4Component);

    dialogRef.afterClosed().subscribe(result => {
      this.toggle4 = result;
    });
  }
  openDialog5() {
    const dialogRef = this.dialog.open(Buttons5Component);

    dialogRef.afterClosed().subscribe(result => {
      this.toggle5 = result;
    });
  }
  sendGuessAnswer(param) {
    if (param !== 'Stage de pilotage') {
      this.toggle8FirstBadAnswer = true;
    } else {
      this.toggle8FirstBadAnswer = false;
      this.toggle6SecondGuess = true;
    }
  }
  sendGuessAnswerTwo(param) {
    if (param !== 'Circuit du Mans') {
      this.toggle9SecondBadAnswer = true;
    } else {
      this.toggle9SecondBadAnswer = false;
      this.toggle7Reveal = true;
    }
  }
}
