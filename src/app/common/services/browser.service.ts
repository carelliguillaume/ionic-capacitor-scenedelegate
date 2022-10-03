// Angular
import { Injectable } from '@angular/core';

// Capacitor
import { Browser, OpenOptions } from '@capacitor/browser';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  public browser = Browser;

  constructor() {}

  open(url: string, presentationStyle: "fullscreen" | "popover"): Promise<void> {
    const browserOpenOptions: OpenOptions = {
      toolbarColor: '#EAEAEA',
      url,
      presentationStyle: presentationStyle,
    };

    return this.browser.open(browserOpenOptions);
  }

  close(): Promise<void> {
    return this.browser.close();
  }
}
