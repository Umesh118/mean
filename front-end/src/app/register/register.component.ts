import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isLogin: boolean = false;
  registerData: any = {};
  errorMessage = '';
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.isUserLogin();
  }

  onSubmit() {
    this.api.postTypeRequest('register', this.registerData).subscribe(
      (res: any) => {
        // if (res.status) {
        console.log(res);
        // this.auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
        this.auth.setDataInLocalStorage('token', res.token);
        this.router.navigate(['/login']);
        // } else {
        //   // console.log(res);
        // }
      },
      (err) => {
        this.errorMessage = err['error'].message;
      }
    );
  }
  // isUserLogin() {
  //   if (this.auth.getUserDetails() != null) {
  //     this.isLogin = true;
  //   }
  // }
}
