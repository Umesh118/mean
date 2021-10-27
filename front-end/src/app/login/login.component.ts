import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false;
  errorMessage = '';
  registerData: any = {};
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isUserLogin();
  }

  onSubmit() {
    // console.log('Your form data : ', form.value);
    this.api.postTypeRequest('login', this.registerData).subscribe(
      (res: any) => {
        console.log(res);
        // console.log(res.status);
        // if (res) {
        // console.log(res);
        // this.auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
        this.auth.setDataInLocalStorage('token', res.token);
        this.router.navigate(['/contact']);
        // }
      },
      (err) => {
        this.errorMessage = err['error'].message;
      }
    );
  }

  isUserLogin() {
    // console.log(this.auth.getUserDetails());
    // if (this.auth.getUserDetails() != null) {
    //   this.isLogin = true;
    // }
  }

  logout() {
    // this.auth.clearStorage();
    this.router.navigate(['']);
  }
}
