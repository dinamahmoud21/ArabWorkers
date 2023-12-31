import { TestBed } from '@angular/core/testing';

import { TransitionServService } from './transition-serv.service';

describe('TransitionServService', () => {
  let service: TransitionServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransitionServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
