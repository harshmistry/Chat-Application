import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoomDetail, Message, MessageAction } from 'src/app/models/common-models';
import { CommonConstants } from 'src/app/utility/common-constants';
import { Observable } from 'rxjs';

/**
 * @author Harsh Mistry
 * 
 * Service to handle action related to a particular room
 */
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  /**
   * Returns available room lists from server
   * @returns {Observable<Array<RoomDetail>>}
   */
  getRoomList(): Observable<Array<RoomDetail>> {
    return this.http.get<Array<RoomDetail>>(CommonConstants.HTTP_SERVER_URL.concat('/rooms'));
  }

  /**
   * Return room detail for given room ID
   * @param roomId {string} 
   * @returns {Observable<RoomDetail>}
   */
  getRoomDetail(roomId: string): Observable<RoomDetail> {
    return this.http.get<RoomDetail>(CommonConstants.HTTP_SERVER_URL.concat('/rooms/',roomId));
  }

  /**
   * This function will return message for a particular room from server
   * @param roomId {string}
   * @returns {Observable<Array<Message>>}
   */
  getMessagesForRoom(roomId: string): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(CommonConstants.HTTP_SERVER_URL.concat('/rooms/', roomId, '/messages'));
  }

  /**
   * This function will post new message to server written by current user for a given room
   * @param messageAction {MessageAction}: Contains username and message
   * @param roomId {string}
   * @returns {Observable<MessageAction>}
   */
  postMessage(messageAction: MessageAction, roomId: string): Observable<MessageAction> {
    return this.http.post<MessageAction>(CommonConstants.HTTP_SERVER_URL.concat('/rooms/', roomId, '/messages'), messageAction);
  }

  postMessageUpdate(messageAction: MessageAction, roomId: string, messageId: string): Observable<MessageAction> {
    return this.http.post<MessageAction>(CommonConstants.HTTP_SERVER_URL.concat('/rooms/', roomId, '/messages/',messageId), messageAction);
  }
}
