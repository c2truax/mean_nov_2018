import { TestBed } from '@angular/core/testing';

import { NinjaGoldService } from './ninja-gold.service';

describe('NinjaGoldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NinjaGoldService = TestBed.get(NinjaGoldService);
    expect(service).toBeTruthy();
  });
});
