import { Component } from '@angular/core';
import { ApplauncherService } from '../common/services/applauncher.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private appLauncherService: ApplauncherService) {}

  async openCapacitorAppLauncher(): Promise<void> {
    let url = 'ulys.alpha.auth://';
    await this.appLauncherService.open(url);
  }

}
