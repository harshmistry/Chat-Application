import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RoomDetail } from 'src/app/models/common-models';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { RoomService } from './room.service';

/**
 * @author Harsh Mistry
 * 
 * Resolver to fetch room list from server
 */
@Injectable({
  providedIn: 'root'
})
export class RoomListResolverService implements Resolve<Array<RoomDetail>> {

  constructor(private _roomListService: RoomService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<RoomDetail>> | Observable<never> {
    return this._roomListService.getRoomList().pipe(
      take(1),
      mergeMap(roomList => {
        if (roomList) {
          return of(roomList); // return as observable using of()
        }else {
          // no result for room list
          return EMPTY;
        }
      })
    );
  }
}
