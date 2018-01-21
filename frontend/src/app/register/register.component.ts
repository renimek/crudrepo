import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router} from '@angular/router';
import { Http } from '@angular/http'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  userData = {
    login: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router, private http: Http) {}

  register() {
    this.authService.register(this.userData);
  }

  ngOnInit () {
    this.authService.validate();
    this.http.get('http://localhost:3000/').subscribe(res => {
      if(res['_body'] == 'logged') {
        this.router.navigateByUrl('/equipmentCalculator')
      }
    });
  }
}

