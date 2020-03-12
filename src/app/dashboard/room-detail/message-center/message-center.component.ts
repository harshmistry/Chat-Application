import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

/**
 * @author Harsh Mistry
 * 
 * Component to render message list and ability to post new messages
 */
@Component({
  selector: 'app-message-center',
  templateUrl: './message-center.component.html',
  styleUrls: ['./message-center.component.scss']
})
export class MessageCenterComponent implements OnInit {

  roomId: string;
  currentUserName: string;
  messageAdditionSubject: BehaviorSubject<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // load current username from route path, to be used by child component
    this.currentUserName = this.route.snapshot.pathFromRoot.find(activatedRoute => {
      return activatedRoute.paramMap.has('username');
    }).paramMap.get('username');
    // send initial value of null
    this.messageAdditionSubject = new BehaviorSubject<string>(null);
  }

}
