import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons2',
  templateUrl: './buttons2.component.html',
  styleUrls: ['./buttons2.component.css']
})
export class Buttons2Component implements OnInit {

  wrongMessage: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  wrongAnswer() {
    this.wrongMessage = true;
  }
}
