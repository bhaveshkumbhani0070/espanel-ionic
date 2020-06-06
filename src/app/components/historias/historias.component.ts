import { Component, OnInit,ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.scss'],
})
export class HistoriasComponent implements OnInit {
  
  
  @ViewChild (IonSlides,{static: false}) protected slideWithNav2: IonSlides;
  
  title = "Cuentos divertidos originales"
  allItems=[{
    img:"../../../assets/img/sl0102.png",
    title:"Finn",
    des:"Listen, I've had a pretty messed up day"
  },
  {
    img:"../../../assets/img/sl0101.png",
    title:"Finn",
    des:"Listen, I've had a pretty messed up day"
  },
  {
    img:"../../../assets/img/sl0103.png",
    title:"Finn",
    des:"Listen, I've had a pretty messed up day"
  }
  ]
  slideOptsOne2 = {
      initialSlide: 1,
      slidesPerView: 1.3,
      autoplay: false,
      loop: false,
      spaceBetween: 20,
      centeredSlides: true
  };

  constructor(private navController: NavController,private storage: Storage) { 
   }
   
  ionViewWillEnter(){
    this.storage.set('activeTab','three');
    this.slideWithNav2.slideTo(1, 0).then(() => {
    setTimeout(() => {
    }, 250);
    });
    }
  ngOnInit() {
    this.storage.set('activeTab','three');
    // this.slideOptsOne.initialSlide =1;
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
  SlideDidChange1(){
    this.slideWithNav2.getActiveIndex().then((id) => {
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
