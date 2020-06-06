import { Component, OnInit ,ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {AudioPlayerComponent} from '../comman/audio-player/audio-player.component';
import {MiniLessonComponent} from '../comman/mini-lesson/mini-lesson.component';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild (IonSlides,{static: false}) protected slideWithNav1: IonSlides;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    loop: false,
    spaceBetween: 20,
    centeredSlides: true,
  };
  slideOptsTwo = {
    initialSlide: 0,
    slidesPerView: 2.77,
    autoplay: false,
    loop: false,
    spaceBetween: 5,
    centeredSlides: false,
    centeredSlidesBounds:false,
    slidesPerColumnFill:true
  };

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 15,
    slidesPerView: 2.77
  };
  totalSlides=[
    {img:"../../../assets/img/Thumbnail-EP009.png",content:"Todo Tiempo pasado fue mejor" },
    {img:"../../../assets/img/IMG_20171006_140629-1.png",content:"Todo Tiempo pasado fue mejor" },
    {img:"../../../assets/img/ep015-thumbnail-1-1.png",content:"Todo Tiempo pasado fue mejor" },
    {img:"../../../assets/img/ep015-thumbnail-1-1.png",content:"Todo Tiempo pasado fue mejor" }
  ]

  constructor(
    private navController: NavController, 
    private router: Router,
    private modalController:ModalController,
    private storage: Storage) { 
   
  }

  ngOnInit() {
    this.storage.set('activeTab','one');
    this.storage.get('token').then((val) => {
      if(!val){
        this.router.navigate(['/splash'])
      }
    });
  }

  ionViewWillEnter(){
    this.storage.set('activeTab','one');
    this.slideWithNav1.slideTo(0, 0).then(() => {
    setTimeout(() => {
    }, 250);
    });
  }

  SlideDidChange(val){
    
  }

  changeslider(e){
    this.slideWithNav1.getActiveIndex().then((id) => {
      console.log('shital///////////',id)
    });
  }

  changeTa(val){
    console.log('val',val);
    this.navController.navigateRoot('/tabs/'+val);
  }
  async audioPlay(type){
    const modal = await this.modalController.create({
      component: type=="audio" ? AudioPlayerComponent:MiniLessonComponent,
      cssClass: 'my-custom-modal-css'
    });
    return await modal.present();
  }
} 
