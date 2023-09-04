import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  headername = 'Angular tutorial';
  payment = 1000;
  color="red";
  isDisabled=false;
  colors=["red","black","green","white"];
  ngOnInit(): void {}
  
  clickFunction(id:Number) {
    this.isDisabled=true;
    alert('button clicked'+ id);
  }
}
