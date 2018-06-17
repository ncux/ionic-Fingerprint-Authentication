import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { FingerprintAIO, FingerprintOptions } from "@ionic-native/fingerprint-aio";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: FingerprintOptions = {clientId: 'demo', clientSecret: 'secret', disableBackup: true};

  constructor(private platform: Platform, private fingerprint: FingerprintAIO) {   }

  async scanFingerprint() {
    try {
      await this.platform.ready();
      const available = await this.fingerprint.isAvailable();
      console.log(available);
      if (available == 'OK') {
        const result = await this.fingerprint.show(this.options);
        console.log(result);
      }
    } catch (e) {
      console.log(e);
    }

  }

}
