import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router} from '@angular/router';
import { Http } from '@angular/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = {
    login: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router, private http: Http) {}

  login() {
    this.authService.login(this.userData);
  }

  ngOnInit() {
    this.authService.validate();
    this.http.get('http://localhost:3000/').subscribe(res => {
      if(res['_body'] == 'logged') {
        this.router.navigateByUrl('/equipmentCalculator')
      }
    });
  }
}
