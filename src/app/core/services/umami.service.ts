import { Injectable } from '@angular/core';

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, data?: Record<string, unknown>) => void;
    };
  }
}

@Injectable({
  providedIn: 'root'
})
export class UmamiService {

  track(event: string, data?: Record<string, unknown>) {
    window.umami?.track(event, data);
  }

}
