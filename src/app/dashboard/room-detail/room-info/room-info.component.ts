import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoomDetail } from 'src/app/models/common-models';

/**
 * @author Harsh Mistry
 * 
 * Component to display room information
 */
@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.scss']
})
export class RoomInfoComponent implements OnInit, OnDestroy {

  private routeDataSubscription: Subscription;
  roomDetail: RoomDetail;
  userList: string;
  currentUserName: string;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeDataSubscription = this.route.data.subscribe((data: {roomDetail: RoomDetail}) => {
      this.roomDetail = data.roomDetail;
      this.initUserList();
    });
  }

  ngOnDestroy() {
    // unsubscribe any subscription to prevent memory leakage
    if (this.routeDataSubscription) {
      this.routeDataSubscription.unsubscribe();
    }
  }

  /**
   * This function will initialize user list to be displayed on screen.
   * It'll extract current user and user's returned from database.
   * 
   */
  private initUserList() {
    this.currentUserName = this.route.snapshot.pathFromRoot.find(activatedRoute => {
      return activatedRoute.paramMap.has('username');
    }).paramMap.get('username');
    this.filterCurrentUsernameFromList();
    this.userList = this.roomDetail.users.join(', ');
  }

  /**
   * This function will remove current username from list returned by database 
   * if current username is same
   */
  private filterCurrentUsernameFromList() {
    const index = this.roomDetail.users.indexOf(this.currentUserName);
    if (index > -1) {
      this.roomDetail.users.splice(index, 1);
    }
  }

}
