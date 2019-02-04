import { TestBed } from '@angular/core/testing';

import { PersonalLaonService } from './personal-laon.service';

describe('PersonalLaonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalLaonService = TestBed.get(PersonalLaonService);
    expect(service).toBeTruthy();
  });
});
