import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Howl, Howler} from 'howler';
import { ModalController } from '@ionic/angular';
import {AudioPlayerComponent} from '../components/comman/audio-player/audio-player.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  player:Howl = null; 
  playerStatus:any = false;
  isPlayi:any = false;
  progress:any = 0;
  duration:any;
  newValue:any;
  ru_time:any = this.secondsToHms(0);
  total_time:any = this.secondsToHms(0);
  speed:any = 1.50;
  songId:any;
  constructor(
    private storage:Storage,
    private modalController:ModalController) {
    

    this.storage.set('playerStatus', false);
    setInterval(() => {
      this.storage.get('playerStatus').then((val) => {
        console.log('val',val);
        this.songId=val;
        // this.playSong(val)
        // console.log('this.player.playing()',this.player.playing([1002]));
        this.playerStatus=val;
      });
    }, 1000);
  }
  tabchange(){
   this.getActiveTab()
  }

  ionViewWillEnter(){
   this.storage.get('thememode').then((val) => {
      if(val!=null){
       this.changemode(val)
      }
      
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
    

  ngOnInit() {
    // setInterval(() => {
    //   this.getActiveTab();
    // }, 100);
  }
  pause(){
    this.player.pause(1002);
  }
  playSong(id){
    if(id){
      this.player = new Howl({
        src: ['../../../../assets/audio/Illegal Weapon 2.mp3'],
        html5:true,
        autoplay:this.isPlayi,
        onplay:(res) =>{
          console.log('onplay',res);
        },
        onend:() =>{
          console.log('onend');
        } 
      });
      
      console.log('playing',this.player.playing()) ;
      this.updateProgress()
    }
  }

  updateProgress(){
    // console.log('this.player.playing()',this.player.playing());
  let seek=this.player.seek(this.songId);
  console.log('tab seek',seek)
  // this.newValue=this.range.value || 0;                       
  this.duration = this.player.duration() || 0;
  console.log('duration',this.duration);
  this.progress = (seek / this.duration)*100 || 0;
  console.log('tab progress',this.progress);
  this.ru_time =this.secondsToHms(this.duration*(this.newValue/100))
 
  setTimeout(() => {
    this.updateProgress()
  }, 1000);
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
  home = '../../assets/img/home.png';
  conversaciones = '../../assets/img/conversaciones.png';
  historias='../../assets/img/book.png';
  noticias='../../assets/img/noticias.png';
  traducir='../../assets/img/traducir.png';

  getActiveTab(){
    this.storage.get('activeTab').then((val)=>{
      console.log('active-----',val)
      switch (val) {
        case 'one':
          this.changeHome();
          break;
        case 'two':
          this.changeConversaciones();
          break;
        case 'three':
          this.changehistorias();
          break;
        case 'four':
          this.changeNoticias();
          break;
        case 'five':
          this.changeTraducir();
          break;
              
        default:
          break;
      }
    })
  }
  
  changeHome(){
    this.resteAll()
    this.home = '../../assets/img/home1.png';
  }
  changeConversaciones(){
    this.resteAll()
    this.conversaciones = '../../assets/img/conversaciones1.png';
  }
  changehistorias(){
    this.resteAll()
    this.historias='../../assets/img/book1.png';
  }
  changeNoticias(){
    this.resteAll()
    this.noticias='../../assets/img/noticias1.png';
  }
  changeTraducir(){
    this.resteAll()
    this.traducir='../../assets/img/traducir1.png';
  }
  resteAll(){
    this.home = '../../assets/img/home.png';
    this.conversaciones = '../../assets/img/conversaciones.png';
    this.historias='../../assets/img/book.png';
    this.noticias='../../assets/img/noticias.png';
    this.traducir='../../assets/img/traducir.png';
  }

  async audioPlay(){
    const modal = await this.modalController.create({
      component: AudioPlayerComponent,
      cssClass: 'my-custom-modal-css'
    });
    return await modal.present();
  }
}
