import {Injectable} from "@angular/core";

declare var ga: any;

/**
 * ga 事件參數 interface
 */
interface IgaEvent {
  eventCategory: string;
  eventAction: string;
  eventLabel?: string;
  eventValue?: number;
}

@Injectable()
export class GoogleAnalyticsEventsService {

  /**
   * ga 事件呼叫
   * @param {string} eventCategory 事件類別
   * @param {string} eventAction 事件動作
   * @param {string} eventLabel 事件標籤 (選填)
   * @param {number} eventValue 事件 value (選填)
   */
  public static sendEvent(eventCategory: string,
                   eventAction: string,
                   eventLabel: string = null,
                   eventValue: number = null) {
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
    console.log({
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }
}