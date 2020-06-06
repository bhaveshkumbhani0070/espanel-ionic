import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'
import { ModalController } from '@ionic/angular';
import {ProfileComponent} from './components/comman/profile/profile.component';
import {SettingComponent} from './components/comman/setting/setting.component';
import {EnComponent} from './components/comman/en/en.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public modalController: ModalController,
    private storage: Storage,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.storage.get('thememode').then((val) => {
     if(val!=null){
      this.changemode(val)
     }
     
    });

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

 changemode(data){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    if(data=="dark"){
      document.body.setAttribute('data-theme', 'dark');
      this.storage.set('thememode','dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
      this.storage.set('thememode','light');
    }
  }

  
  
  async GoToProfile() {
    const modal = await this.modalController.create({
      component: ProfileComponent,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      },
      cssClass:'modal-changes'
    });
    
    return await modal.present();
  }
  
  async GoToSettings(){
    const modal = await this.modalController.create({
      component: SettingComponent
    });
    return await modal.present();
  }
  async GoToEn(){
    const modal = await this.modalController.create({
      component: EnComponent
    });
    return await modal.present();
  }
  
  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }
}
