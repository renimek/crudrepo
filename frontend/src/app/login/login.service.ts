import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Router} from '@angular/router';

@Injectable()
export class LoginService {
error;
  constructor(private http: Http, private router: Router) { }

  login(userData) {
    this.http.post('http://localhost:3000/login', userData).subscribe(res => {
      const login = res.json().login;
      console.log(res.json());
      if (login) {
        alert('Logged in !');
        this.router.navigateByUrl('/equipmentCalculator')
        this.error = undefined;
      } else {
        this.error = 'Wrong login or password';
      }
    });
  }
  validate() {
    this.http.get('http://localhost:3000/').subscribe(res => {
      console.log(res);
    })
  }
}
