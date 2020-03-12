import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  private loginTimerSubscription: Subscription;
  
  userName: string;
  loggedInSince: number;
  timerUnit: string;



  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.initUserDetail();
  }

  ngOnDestroy() {
    if (this.loginTimerSubscription) {
      this.loginTimerSubscription.unsubscribe();
    }
  }

  /**
   * Extract username from route path params
   */
  private initUserDetail() {
    if (this.route.snapshot.paramMap.has('username')) {
      this.userName = this.route.snapshot.paramMap.get('username');
    }
    this.startTimerAfterLogin();
  }

  /**
   * Start timer to track time since last login
   */
  private startTimerAfterLogin() {
    this.loginTimerSubscription = timer(0, 1000).subscribe(value => {
      if (value < 60) {
        // if value is under 60 seconds then display 'sec'
        this.timerUnit = (value > 1 ? 'seconds': 'second');
        this.loggedInSince = value;
      }else if (value >= 60 && value < 3600) {        
        // change value to appropriate minutes
        this.loggedInSince = Math.round((value/60));
        // if value is between 1 minute and 60 min then display 'min'
        this.timerUnit = (this.loggedInSince > 1 ? 'minutes': 'minute');

      }else {
        // if value is more than 60 mintues, then display 'hr'
        this.timerUnit = 'hour';
        this.loggedInSince = Math.round((value/3600));
      }
    });
  }
}
