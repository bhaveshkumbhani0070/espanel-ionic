import { Component, OnInit,ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-conversaciones',
  templateUrl: './conversaciones.component.html',
  styleUrls: ['./conversaciones.component.scss'],
})
export class ConversacionesComponent implements OnInit {
 
  

  @ViewChild (IonSlides,{static: false}) protected slideWithNav1: IonSlides;
 
  title = "Conversaciones auténticas de las calles de Medellín, Colombia. co"

  allItems=[{
    img:"../../../assets/img/sl0103.png",
    title:"¿Alguna vez te has enamorado de una mujer paisa?",
    des:"Listen, I've had a pretty messed up day"
  },
  {
    img:"../../../assets/img/sl0102.png",
    title:"¿Alguna vez te has enamorado de una mujer paisa?",
    des:"Listen, I've had a pretty messed up day"
  },
  {
    img:"../../../assets/img/sl0103.png",
    title:"Finn",
    des:"Listen, I've had a pretty messed up day"
  },
  {
    img:"../../../assets/img/sl0103.png",
    title:"Finn",
    des:"Listen, I've had a pretty messed up day"
  },
  {
    img:"../../../assets/img/sl0103.png",
    title:"Finn",
    des:"Listen, I've had a pretty messed up day"
  }
  ]
  slideOptsOne1 = {
      initialSlide: 0,
      slidesPerView: 1.3,
      autoplay: false,
      loop: false,
      spaceBetween: 20,
      centeredSlides: true
  };

  ionViewWillEnter(){
    this.storage.set('activeTab','two');
    this.slideWithNav1.slideTo(0, 0).then(() => {
    setTimeout(() => {
    }, 250);
    });
    }
    
    
  constructor(private navController: NavController,private storage: Storage) { 
    
    // this.slideWithNav.slideTo(1, 400)
    
  }
 
  ngOnInit() {
    this.storage.set('activeTab','two');
    
    //this.slideOptsOne.initialSlide =0;
  }

  moveCard(id){
    // let val;
    // Object.assign(this.slideOptsOne,{initialSlide:id})
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
    this.slideWithNav1.getActiveIndex().then((id) => {
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
  getIndex(event) {
    console.log('111',event.clickedIndex);
  }

}
