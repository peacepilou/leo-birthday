import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons4',
  templateUrl: './buttons4.component.html',
  styleUrls: ['./buttons4.component.css']
})
export class Buttons4Component implements OnInit {

  wrongMessage: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  wrongAnswer() {
    this.wrongMessage = true;
  }
}
