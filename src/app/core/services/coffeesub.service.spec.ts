import { TestBed } from '@angular/core/testing';

import { CoffeesubService } from './coffeesub.service';

describe('CoffeesubService', () => {
  let service: CoffeesubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeesubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
