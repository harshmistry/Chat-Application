import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { RoomService } from 'src/app/dashboard/room-list/room.service';
import { MessageAction } from 'src/app/models/common-models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, BehaviorSubject } from 'rxjs';

/**
 * @author Harsh Mistry
 * 
 * Component to allow user to post new message in room chat
 */
@Component({
  selector: 'app-message-action',
  templateUrl: './message-action.component.html',
  styleUrls: ['./message-action.component.scss']
})
export class MessageActionComponent implements OnInit, OnDestroy {

  @Input() userName: string;
  @Input() messageAdditionSubject: BehaviorSubject<string>;

  messageActionForm: FormGroup;
  roomId: string;
  roomIdSubscription: Subscription;

  constructor(private _roomService: RoomService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.messageActionForm = new FormGroup({
      message: new FormControl('', [Validators.required])
    })
    this.roomIdSubscription = this.route.paramMap.subscribe((param: ParamMap) => {this.roomId = param.get('id')});
  }

  ngOnDestroy() {
    if (this.roomIdSubscription) {
      this.roomIdSubscription.unsubscribe();
    }
  }

  /**
   * This function will write mesage in database, and send signal to sibling to re-render message list in DOM
   */
  sendMessage() {
    this._roomService.postMessage({message: this.messageActionForm.get('message').value, name: this.userName}, this.roomId)
      .subscribe((messagePosted: MessageAction) => {
        this.messageAdditionSubject.next(this.roomId);
        this.messageActionForm.get('message').setValue(null);
      });
  }

}
