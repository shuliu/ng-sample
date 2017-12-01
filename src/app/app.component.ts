///<reference path="google-analytics-events-service.service.ts"/>
import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {GoogleAnalyticsEventsService} from "./google-analytics-events-service.service";

declare var ga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public router: Router, public gaEventService: GoogleAnalyticsEventsService) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
        console.log({'event': 'ga', 'pageview': event.urlAfterRedirects});
      }
    });
  }

  public gaEvent() {
    GoogleAnalyticsEventsService.sendEvent('testCategory', 'testLabel', 'testAction', 100);
  }

}
