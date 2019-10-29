import {Component} from '@angular/core';

// import { Platform } from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';


import {NavController, Platform} from '@ionic/angular';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        // private fingerPrint: FingerprintAIO,
        // private platform: Platform,
        // public navCtrl: NavController
    ) {
        // this.platform.ready()
        //     .then(() => this.fingerPrint.isAvailable())
        //     .then(val => console.log('val', val));
    }

}
