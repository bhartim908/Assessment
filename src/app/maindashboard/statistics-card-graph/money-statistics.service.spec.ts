import { TestBed } from '@angular/core/testing';

import { MoneyStatisticsService } from './money-statistics.service';

describe('MoneyStatisticsService', () => {
  let service: MoneyStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
