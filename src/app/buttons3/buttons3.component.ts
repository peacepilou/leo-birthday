import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons3',
  templateUrl: './buttons3.component.html',
  styleUrls: ['./buttons3.component.css']
})
export class Buttons3Component implements OnInit {

  wrongMessage: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  wrongAnswer() {
    this.wrongMessage = true;
  }
}
