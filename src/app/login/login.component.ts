import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserInfoService} from '../shared/services/user-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: string;

  constructor(private router: Router, private userInfoService: UserInfoService) {
  }



  ngOnInit() {
  }

  onLogin() {
    this.userInfoService.getUserInfo(+this.login)
      .subscribe(data => {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('userData', JSON.stringify(data));
        this.router.navigate(['/app/dashboard']);
      });

  }
}
