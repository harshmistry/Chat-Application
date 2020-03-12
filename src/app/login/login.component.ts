import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginDetail } from '../models/common-models';
import { Router } from '@angular/router';

/**
 * @author Harsh Mistry
 * 
 * Component to allow user login
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required])
    });
  }

  /**
   * Log in user once username is entered
   */
  loginUser() {
    this._loginService.logInUser(this.getLoginDetail());
    this.router.navigate(['dashboard', this.loginForm.get('userName').value])
      .then(isNavigationSuccessful => {
        if (isNavigationSuccessful) {
          console.log('Navigation was successfull');
        }
      })
      .catch(e => {
        console.log('Navigation was not successfull\n', e);
      })
  }

  /**
   * Get login detail object populated with nam and last login since
   */
  private getLoginDetail(): LoginDetail {
    return {
      userName: this.loginForm.get('userName').value,
      loginSince: new Date().getMilliseconds()
    };
  }

}
