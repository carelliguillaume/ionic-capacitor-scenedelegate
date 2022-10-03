import { Component } from '@angular/core';
import { BrowserService } from '../common/services/browser.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private browserService: BrowserService) {}

  private async openCapacitorBrowser(presentationStyle: "fullscreen" | "popover"): Promise<void> {
    let url = "https://capacitorjs.com"

    try {
      await this.browserService.open(url, presentationStyle);
    } catch (error) {
      console.error(`Unable to open browser URL (${url})`);
    }
  }

  async openCapacitorBrowserFullscreen(): Promise<void> {
    await this.openCapacitorBrowser('fullscreen');
  }

  async openCapacitorBrowserPopover(): Promise<void> {
    await this.openCapacitorBrowser('popover');
  }

}
