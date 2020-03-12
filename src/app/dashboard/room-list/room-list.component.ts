import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomDetail } from 'src/app/models/common-models';
import { Subscription } from 'rxjs';

/**
 * @author Harsh Mistry
 * 
 * Component to render room list
 */
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit, OnDestroy, AfterViewInit {

  private routeDataSubscription: Subscription;
  roomList: Array<RoomDetail>;


  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.routeDataSubscription = this.route.data.subscribe((data: {roomList: Array<RoomDetail>}) => {
      this.roomList = data.roomList;
    });
  }

  ngOnDestroy() {
    // unsubscribe any subscription to prevent memory leakage
    if (this.routeDataSubscription) {
      this.routeDataSubscription.unsubscribe();
    }
  }

  ngAfterViewInit() {
    // if rooms are available, then navigate to 1st room when loaded for 1st time
    if (this.roomList && this.roomList[0]) {
      this.navigateToRoomDetail(this.roomList[0].id);
    }
  }

  /**
   * Navigate to selected room ID
   * @param roomId 
   */
  navigateToRoomDetail(roomId: number) {
    this.router.navigate([{outlets: {detail: ['room-detail', roomId]}}], {relativeTo: this.route})
      .then(isNavigationSuccessful => {
        if (isNavigationSuccessful) {
          console.log('Navigation to room detail successfull');
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

}
