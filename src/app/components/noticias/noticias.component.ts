import { Component, OnInit,ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {

  @ViewChild (IonSlides,{static: false}) protected slideWithNav: IonSlides;
  
  title = "Historias reales de los pueblitos latinoamericanos"
  allItems=[{
    img:"../../../assets/img/sl0103.png",
    title:"Finn",
    des:"Listen, I've had a pretty messed up day"
  },
  {
    img:"../../../assets/img/sl0102.png",
    title:"Finn",
    des:"Listen, I've had a pretty messed up day"
  },
  {
    img:"../../../assets/img/sl0101.png",
    title:"Finn",
    des:"Listen, I've had a pretty messed up day"
  }]
  
  slideOptsOne = {
    initialSlide: 2,
    slidesPerView: 1.3,
    autoplay: false,
    loop: false,
    spaceBetween: 20,
    centeredSlides: true,
  };

  ionViewWillEnter(){
    this.storage.set('activeTab','four');
    this.slideWithNav.slideTo(2, 0).then(() => {
    setTimeout(() => {
    }, 250);
    });
    }

  constructor(private navController: NavController,private storage: Storage) { }

  ngOnInit() {
    this.storage.set('activeTab','four');
    //this.slideOptsOne.initialSlide =0;
  }

  moveCard(id){
    // let val;
    // switch (id) {
    //   case 0:
    //     val='conversaciones';
    //     break;
    //   case 1:
    //     val='historias';
    //     break;
    //   case 2:
    //     val='noticias';
    //     break;
    //   case 3:
    //     val='traducir';
    //     break;            
    //   default:
    //     break;
    // }
    // this.navController.navigateRoot('/tabs/'+val);
  }
  SlideDidChange(){
    this.slideWithNav.getActiveIndex().then((id) => {
      console.log('sliderIndex',id)
      let val;
      switch (id) {
        case 0:
          val='conversaciones';
          break;
        case 1:
          val='historias';
          break;
        case 2:
          val='noticias';
          break;
        case 3:
          val='traducir';
          break;            
        default:
          break;
      }
      this.navController.navigateRoot('/tabs/'+val);
    });
	}
}
