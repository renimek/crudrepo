import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Router} from '@angular/router';

@Injectable()
export class AuthService {
  error;
  fail;
  logged = false;
  constructor(private http: Http, private router: Router) { }

  register(userData) {
    this.http.post('http://localhost:3000/register', userData).subscribe(res => {
      const login = res.json().login;
      if (login) {
        alert('Account created');
        this.router.navigateByUrl('/equipmentCalculator');
        this.fail = undefined;
      } else {
        this.fail = 'Account with that login already exist.'
      }
    });
  }

  login(userData) {
    this.http.post('http://localhost:3000/login', userData).subscribe(res => {
      const login = res.json().login;
      if (login) {
        alert('Logged in !');
        this.router.navigateByUrl('/equipmentCalculator');
        this.error = undefined;
      } else {
        this.error = 'Wrong login or password';
      }
    });
  }

  validate() {
    this.http.get('http://localhost:3000/').subscribe(res => {
      if(res['_body'] == 'logged') {
        this.logged = true;
      } else {
        this.logged = false;
      }
    });
  }

  logout() {
    this.http.get('http://localhost:3000/logout').subscribe(res => {
      if(res['_body'] == 'Logged out') {
        alert('Logged out')
        this.logged = false;
        this.router.navigateByUrl('/');
      } else {
        console.log('cos sie zjebalo');
      }
    })
  }
}

