import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonRange } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import {Howl, Howler} from 'howler';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {
  @ViewChild('range',{static:false}) range: IonRange

  items:any="¡Qué más pues! Ave maría, expresiones muy paisas, muy colombianas, tanto como lo es el metro de Medellín que cada año atrae turistas, atrae personas de todas partes del mundo, que es reconocido también en todas partes como un ejemplo de orden, de limpieza, de buen funcionamiento, es una de las cosas de las cuales se habla en todo el mundo en respecto de Medellín.";
  constructor(
    private modalCtrl:ModalController,
    private nativeAudio: NativeAudio,
    private storage: Storage
    ) { }

  ngOnInit() {
    // this.play()
      // this.updateProgress()
      this.player = new Howl({
        src: ['http://traffic.libsyn.com/listeningmethod/EP015_Mini_lesson_-updated_27.11.19_SS_-_Final.mp3'],
        html5:true,
        autoplay:this.isPlayi,
        onplay:(res) =>{
          console.log('onplay',res);
          this.storage.set('playerStatus', res);
          this.total_time = this.secondsToHms(this.player.duration())
          this.updateProgress();
        },
        onend:() =>{
          console.log('onend');
        } 
      });
  }

  player:Howl = null; 
  isPlayi:any = false;
  progress:any = 0;
  duration:any;
  newValue:any;
  ru_time:any = this.secondsToHms(0);
  total_time:any = this.secondsToHms(0);
  speed:any = 1.00;

  closeModal() {
    if(this.isPlayi){
      this.storage.set('playerStatus', false);
      this.player.stop();
    }
    this.modalCtrl.dismiss();
  }
  secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 9 ? h  : "0"+h;
    var mDisplay = m > 9 ? m  : "0"+m;
    var sDisplay = s > 9 ? s  : "0"+s;
    return hDisplay +":"+ mDisplay +":"+ sDisplay; 
}
  minModal(){
    this.modalCtrl.dismiss();
  }

  play(){
    // 'http://traffic.libsyn.com/listeningmethod/EP015_Mini_lesson_-updated_27.11.19_SS_-_Final.mp3'
    this.isPlayi = true;

   
    
    this.player.play();
  }
  pause(){
    this.isPlayi = false;

    // this.player = new Howl({
    //   src: ['../../../../assets/audio/EP015_Mini_lesson.mp3']
    // });
    
    this.player.pause();
  }
  
  seek(){
    this.newValue=this.range.value || 0;
    this.duration = this.player.duration() || 0;
    this.player.seek(this.duration*(this.newValue/100))
    this.ru_time =this.secondsToHms(this.duration*(this.newValue/100))
  }
  updateProgress(){
    this.isPlayi = true;
      console.log('this.player.playing()',this.player.playing());
    let seek=this.player.seek();
    console.log('seek',seek)
    this.newValue=this.range.value || 0;                       
    this.duration = this.player.duration() || 0;
    
    console.log('time',this.duration*(this.newValue/100))
    this.progress = (seek / this.duration)*100 || 0;
    this.ru_time =this.secondsToHms(this.duration*(this.newValue/100))
   
    setTimeout(() => {
      this.updateProgress()
    }, 1000);
  }
  speedUp(speed){  
    this.speed = (speed == 1.50 ? 1.00 : 1.50);

    this.player.rate(speed);
    // this.updateProgress()
  }
}
