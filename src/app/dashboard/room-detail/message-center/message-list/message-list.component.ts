import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RoomService } from 'src/app/dashboard/room-list/room.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Message } from 'src/app/models/common-models';
import { Subscription, BehaviorSubject } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { CommonConstants } from 'src/app/utility/common-constants';

/**
 * @author Harsh Mistry
 * Component to render message list from server
 */
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit, OnDestroy {

  @Input() userName: string;
  @Input() messageAdditionSubject: BehaviorSubject<string>;

  messageList: Array<Message>;
  subscriptionList: Array<Subscription>;
  currentActiveRoomId: string;
  localDbInterval: any;

  constructor(private _roomService: RoomService,
              private _appService: AppService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscriptionList = new Array<Subscription>();
    this.subscribeForRoomIDChange();
    this.subscribeForNewMessageAddition();
    this.startReadingFromLocalDB();
  }

  ngOnDestroy() {
    if (this.subscriptionList) {
      for (let subscription of this.subscriptionList) {
       subscription.unsubscribe();
      }
    }
    if (this.localDbInterval) {
      clearInterval(this.localDbInterval);
    }
  }

  addReaction(message: Message, reaction: string) {
    if (reaction) {
      message.reaction = reaction.concat('.svg');
    }else {
      message.reaction = null;
    }
    this._roomService.postMessageUpdate({message: message.message, name: message.name, reaction: message.reaction}, this.currentActiveRoomId, message.id)
      .subscribe((value) => {console.log('Value from message updated: ', value);});
  }

  /**
   * Get messages for particular room from server
   * @param roomId {string}
   */
  private getMessages(roomId: string) {
    this._roomService.getMessagesForRoom(roomId).toPromise().then(messageList => {
      this.messageList = messageList;
      this._appService.writeMessagesToLocalDb({roomId: roomId, messages: this.messageList});
      this.scrollLastMessageToView();
    });
  }

  /**
   * room ID may change any time, hence listen for changes in route
   */
  private subscribeForRoomIDChange() {
    this.subscriptionList.push(this.route.paramMap.subscribe((params: ParamMap) => {
        this.currentActiveRoomId = params.get('id');
        this.getMessages(params.get('id'));
      })
    );
  }

  /**
   * Listen for any new message added from Message action component (i.e. sibling component)
   */
  private subscribeForNewMessageAddition() {
    this.subscriptionList.push(this.messageAdditionSubject.subscribe(roomId => {
        if (roomId) {
          this.getMessages(roomId);
        }
      })
    );
  }

  /**
   * Scoll to last message which'll be at bottom to bring it in view
   */
  private scrollLastMessageToView() {
    // allow list to paint in DOM
    setTimeout(() => {
      const elem = document.getElementById(this.messageList[this.messageList.length-1].id);
      if (elem) {
        elem.scrollIntoView({behavior:"smooth"});
      }
    });
  }

  /**
   * If multiple tabs are open, then read from new values are read from local storage rather then
   * reading from server (as it may cause slowness because of latency)
   */
  private startReadingFromLocalDB() {
    this.localDbInterval = setInterval(this.readMessagesFromLocalDB.bind(this), CommonConstants.LOCAL_DB_READING_INTERVAL);
  }

  /**
   * Read messages from local db and refresh screen
   */
  private readMessagesFromLocalDB() {
    const messages: Array<Message> = this._appService.getMessagesFromLocalDb(this.currentActiveRoomId);
    if (messages && this.isNewMessageAdded(messages)) {
      this.messageList = messages;
      this.scrollLastMessageToView();
    }
  }

  /**
   * This function will return is new message was added or not (from other browser window)
   * Since messages are sorted based on time, compare id's for last message to check if new message is added
   * @param newMessageList 
   */
  private isNewMessageAdded(newMessageList: Array<Message>): boolean {
    return this.messageList[this.messageList.length - 1].id !== newMessageList[newMessageList.length - 1].id;
  }

}
