import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {UserService} from '../services/user.service'
import {AuthenticationService} from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  adduser: any = {};
  constructor( private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstname: new FormControl(null,Validators.required),
      lastname: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required]),
      password: new FormControl(null,Validators.required),
      confirmPassword: new FormControl(null,Validators.required),
      birthdate: new FormControl(null),
      flatepurChaseDate: new FormControl(null),
      profilePic: new FormControl(null),
      agreetoCondition: new FormControl(null),
      flateBlock: new FormControl(null),
      flateNumber: new FormControl(null),
      mobileNo :new FormControl(null)


    });
    
  }
onSubmit() {
          console.log(this.signUpForm.value['firstname']);
              this.adduser = {
                firstname: this.signUpForm.value['firstname'],
                email: this.signUpForm.value['email'],
                password: this.signUpForm.value['password'],
                birthdate: this.signUpForm.value['birthdate'],
                flatepurChaseDate: this.signUpForm.value['flatepurChaseDate'],
                flateBlock: this.signUpForm.value['flateBlock'],
                flateNumber: this.signUpForm.value['flateNumber'],
                mobileNo: this.signUpForm.value['mobileNo'],
               
            };
          console.log(this.adduser);// adduser var contains all our form values. store it where you w
          this.userService.create(this.adduser)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.router.navigate(['/login']);
                },
                error => {
                    //this.alertService.error(error);
                    //this.loading = false;
                });
    }
}
