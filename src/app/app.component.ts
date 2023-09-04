import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  /**
   *
   */
  constructor(private router: Router) {}
  isMenuVisible = true;
  ngDoCheck(): void {
    const currentRoute = this.router.url;
    if (currentRoute == '/login') {
      this.isMenuVisible = false;
    }
    else{
      this.isMenuVisible = true;
    }
    console.log(currentRoute);
  }

  title = 'MyFirstAngularApp';
}
