import { TestBed } from '@angular/core/testing';

import { RoomDetailResolverService } from './room-detail-resolver.service';

describe('RoomDetailResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomDetailResolverService = TestBed.get(RoomDetailResolverService);
    expect(service).toBeTruthy();
  });
});
