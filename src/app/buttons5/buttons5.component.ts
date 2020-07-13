import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons5',
  templateUrl: './buttons5.component.html',
  styleUrls: ['./buttons5.component.css']
})
export class Buttons5Component implements OnInit {

  wrongMessage: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  wrongAnswer() {
    this.wrongMessage = true;
  }
}
