import { TestBed, inject } from '@angular/core/testing';

import { GoogleAnalyticsEventsServiceService } from './google-analytics-events-service.service';

describe('GoogleAnalyticsEventsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleAnalyticsEventsServiceService]
    });
  });

  it('should be created', inject([GoogleAnalyticsEventsServiceService], (service: GoogleAnalyticsEventsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
