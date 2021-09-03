import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Partner Forms';
  isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.title = 'Title in a method';
    this.isDisabled = !this.isDisabled;
  }

}
