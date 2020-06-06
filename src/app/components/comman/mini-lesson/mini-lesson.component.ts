import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AudioPlayerComponent} from '../../comman/audio-player/audio-player.component';

@Component({
  selector: 'app-mini-lesson',
  templateUrl: './mini-lesson.component.html',
  styleUrls: ['./mini-lesson.component.scss'],
})
export class MiniLessonComponent implements OnInit {

  constructor(private modalCtrl:ModalController,private modalController:ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async audioPlay(){
    const modal = await this.modalController.create({
      component: AudioPlayerComponent,
      cssClass: 'my-custom-modal-css'
    });
    return await modal.present();
  }
}
