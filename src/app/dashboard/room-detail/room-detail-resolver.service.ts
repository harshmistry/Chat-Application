import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RoomDetail } from 'src/app/models/common-models';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { RoomService } from '../room-list/room.service';

/**
 * @author Harsh Mistry
 * 
 * Resolver service to fetch room detail for selected room id before path is routed
 */
@Injectable({
  providedIn: 'root'
})
export class RoomDetailResolverService implements Resolve<RoomDetail> {

  constructor(private _roomService: RoomService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RoomDetail> | Observable<never> {
    const roomId = route.paramMap.get('id');
    return this._roomService.getRoomDetail(roomId).pipe(
      take(1),
      mergeMap(roomDetail => {
        if (roomDetail) {
          return of(roomDetail);
        }else {
          // no result for room list
          return EMPTY;
        }
      })
    )
  }
}
