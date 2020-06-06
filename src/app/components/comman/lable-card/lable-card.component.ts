import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {MiniLessonComponent} from '../mini-lesson/mini-lesson.component';
import {AudioPlayerComponent} from '../audio-player/audio-player.component';

@Component({
  selector: 'app-lable-card',
  templateUrl: './lable-card.component.html',
  styleUrls: ['./lable-card.component.scss'],
})
export class LableCardComponent implements OnInit {
  @Input() items:any;
  @Input() openDetailOrAudio:any;
  constructor(private modalController:ModalController) { }

  ngOnInit() {
    
  }

  async openDetails(data){
    const modal = await this.modalController.create({
      component: this.openDetailOrAudio == 'detail' ? MiniLessonComponent :AudioPlayerComponent
    });
    return await modal.present();
  }
 
}
