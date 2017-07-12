import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {UserService} from '../services/user.service'
import {AuthenticationService} from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;
  user: any = {};
  constructor(  private authenticationService: AuthenticationService,private router: Router) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    });
  }
  login() {
              this.user = {
                email: this.signInForm.value['email'],
                password: this.signInForm.value['password']
               
            };
          console.log(this.user);// adduser var contains all our form values. store it where you w
        this.authenticationService.login(this.signInForm.value['email'],this.signInForm.value['password'])
            .subscribe(
                data => {
                  console.log(data);
                 //   this.router.navigate(['/']);
                },
                error => {
                 
                });
    }

}
