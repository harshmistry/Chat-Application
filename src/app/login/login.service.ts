import { Injectable } from '@angular/core';
import { LoginDetail } from '../models/common-models';
import { timer, Subscription } from 'rxjs';

/**
 * @author Harsh Mistry
 * 
 * Service to perform login/logout operation for system
 */
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _isUserLoggedIn: boolean;
  private _loginDetail: LoginDetail;

  constructor() { }

  /**
   * Function to check if user is logged in
   * @returns {boolean}
   */
  isUserLoggedIn(): boolean {
    return this._isUserLoggedIn;
  }

  /**
   * Function to login particular user into system
   * @param loginDetail 
   */
  logInUser(loginDetail: LoginDetail) {
    this._isUserLoggedIn = true;
    this._loginDetail = loginDetail;
  }

  /**
   * Function to log out user from system
   */
  loggoutUser() {
    this._isUserLoggedIn = false;
    this._loginDetail = null;
  }

  /**
   * Function which returns details of current logged in user
   * @returns {LoginDetail}
   */
  loginDetail(): LoginDetail {
    return this._loginDetail;
  }
}
