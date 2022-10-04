// Angular
import { Injectable } from '@angular/core';

// Capacitor
import { AppLauncher } from '@capacitor/app-launcher';

@Injectable({
  providedIn: 'root'
})
export class ApplauncherService {

  constructor() { }

  async open(url: string): Promise<void> {
    await AppLauncher.openUrl({ url: url });
  };
}
