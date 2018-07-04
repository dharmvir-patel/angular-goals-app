import { TestBed, inject } from '@angular/core/testing';

import { HomesliderService } from './homeslider.service';

describe('HomesliderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomesliderService]
    });
  });

  it('should be created', inject([HomesliderService], (service: HomesliderService) => {
    expect(service).toBeTruthy();
  }));
});
