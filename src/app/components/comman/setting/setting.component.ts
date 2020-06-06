import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {TermsComponent} from '../terms/terms.component';
import {PrivacyComponent} from '../privacy/privacy.component';
import {ApperienceComponent} from '../Apperience/Apperience.component';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})


export class SettingComponent implements OnInit {
 
  constructor(
    private modalCtrl:ModalController,
    private storage: Storage,
    private router:Router,
    public menuCtrl: MenuController) { 
  
  }

  ngOnInit() {
  
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }

  

  changemode(event){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('data-theme', 'dark');
      this.storage.set('thememode','dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
      this.storage.set('thememode','light');
    }
  }

   colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');		
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }
  
  async GoToTerms(){
    const modal = await this.modalCtrl.create({
      component: TermsComponent
    });
    return await modal.present();
  }
  async GoToPrivacy(){
    const modal = await this.modalCtrl.create({
      component: PrivacyComponent
    });
    return await modal.present();
  }
  async GoToApperience(){
  
    const modal = await this.modalCtrl.create({
      component: ApperienceComponent
    });
    return await modal.present();
  }


  logout(){
    this.menuCtrl.toggle(); 
    this.modalCtrl.dismiss();
    this.router.navigate(['/splash'])
  }
}
