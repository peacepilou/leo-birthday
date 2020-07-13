import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  wrongMessage: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  wrongAnswer() {
    this.wrongMessage = true;
  }
}
