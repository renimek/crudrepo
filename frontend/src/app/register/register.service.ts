import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Router} from '@angular/router';

@Injectable()
export class RegisterService {
  error;

  constructor(private http: Http, private router: Router) { }

  register(userData) {
    this.http.post('http://localhost:3000/register', userData).subscribe(res => {
      const login = res.json().login;
      if (login) {
        alert('Account created');
        this.router.navigateByUrl('/equipmentCalculator')
        this.error = undefined;
      } else {
        this.error = 'Account with that login already exist.'
      }
    });
  }

  validate() {
    this.http.get('http://localhost:3000/').subscribe(res => {
      console.log(res);
    })
  }
}

