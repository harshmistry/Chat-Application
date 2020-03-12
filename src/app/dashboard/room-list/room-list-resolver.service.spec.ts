import { TestBed } from '@angular/core/testing';

import { RoomListResolverService } from './room-list-resolver.service';

describe('RoomListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomListResolverService = TestBed.get(RoomListResolverService);
    expect(service).toBeTruthy();
  });
});
