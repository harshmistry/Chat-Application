import { Injectable } from '@angular/core';
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import { LocalDbMessages, Message } from './models/common-models';

/**
 * @author Harsh Mistry
 * 
 * Service used for interacting with local storage
 */
@Injectable({
  providedIn: 'root'
})
export class AppService {

  adapter: any;
  db: any;

  constructor() { 
    this.adapter = new LocalStorage('db');
    this.db = low(this.adapter);
    this.refreshDbReference();
    this.db.defaults({app: []})
      .write();
  }

  /**
   * Clear local storage
   */
  resetLocalDb() {
    this.db.setState({})
      .write();
  }

  /**
   * Write message list to local DB for given room ID
   * @param data 
   */
  writeMessagesToLocalDb(data: LocalDbMessages) {
    if (this.getMessagesFromLocalDb(data.roomId)) {
      // if data for given room already exists, then over-write with new data
      this.db.get('app')
        .find({roomId: data.roomId})
        .set('messages', data.messages)
        .write();
    }else {
      // else push new data
      this.db.get('app')
        .push(data)
        .write();
    }
  }

  /**
   * Get messages from local DB for given room ID
   * @param roomId 
   */
  getMessagesFromLocalDb(roomId: string): Array<Message> {
    this.refreshDbReference();
    return this.db.get('app')
      .find({roomId: roomId})
      .get('messages')
      .value();
  }

  private refreshDbReference() {
    this.db = low(this.adapter);
  }
}
