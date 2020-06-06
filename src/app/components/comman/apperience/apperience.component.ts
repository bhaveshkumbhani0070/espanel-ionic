import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-apperience',
  templateUrl: './apperience.component.html',
  styleUrls: ['./apperience.component.scss'],
})
export class ApperienceComponent implements OnInit {

  constructor(private modalCtrl:ModalController,private storage: Storage) { }

  mode='light';

  closeModal() {
    this.modalCtrl.dismiss();
  }
  ionViewWillEnter(){
   
    this.storage.get('thememode').then((val) => {
      this.mode=val;
      
    });
  }
  ngOnInit() {}

  changemode(event){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    if(event.detail.value=="dark"){
      document.body.setAttribute('data-theme', 'dark');
      this.storage.set('thememode','dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
      this.storage.set('thememode','light');
    }
  }

  
}
