import { TestBed, inject } from '@angular/core/testing';

import { FullContactService } from './full-contact.service';

describe('FullContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FullContactService]
    });
  });

  it('should be created', inject([FullContactService], (service: FullContactService) => {
    expect(service).toBeTruthy();
  }));
});
