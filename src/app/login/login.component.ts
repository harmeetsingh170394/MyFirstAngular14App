import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  /**
   *
   */
  constructor(private service: UserService, private route: Router) {}
  ngOnInit(): void {
    localStorage.clear();
  }
  responseData: any;

  ProceedLogin(logindata: any) {
    if (logindata.valid) {
      this.service.ProceedLogin(logindata.value).subscribe((item) => {
        this.responseData = item;
        if (this.responseData != null) {
          this.route.navigate(['home']);
        } else {
          alert('login failed');
        }
        (error: HttpErrorResponse) => {
          console.log(error);
        };
        console.log(this.responseData);
      });
    }
  }
}
