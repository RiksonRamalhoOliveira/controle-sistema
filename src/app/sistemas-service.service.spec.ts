import { TestBed } from '@angular/core/testing';

import { SistemasServiceService } from './sistemas-service.service';

describe('SistemasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SistemasServiceService = TestBed.get(SistemasServiceService);
    expect(service).toBeTruthy();
  });
});
