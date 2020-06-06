import { Component, OnInit,ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-traducir',
  templateUrl: './traducir.component.html',
  styleUrls: ['./traducir.component.scss'],
})
export class TraducirComponent implements OnInit {

  @ViewChild (IonSlides,{static: false}) protected slideWithNav: IonSlides;
 
  title = "We’ll open any web page and allow you to click any Spanish word and instantly get a translation to English"
  allItems=[{
    img:"../../../assets/img/sl0102.png",
    title:"Algunos escritores y editores rusos pia que los libros sean un bien de primera necesidad",
    des:"Listen, I've had a pretty messed up day..."
  },
  {
    img:"../../../assets/img/sl0102.png",
    title:"Finn",
    des:"Listen, I've had a pretty messed up day..."
  },
  {
    img:"../../../assets/img/sl0102.png",
    title:"Finn",
    des:"Listen, I've had a pretty messed up day..."
  }]

  slideOptsOne = {
    initialSlide: 3,
    slidesPerView: 1.3,
    autoplay: false,
    loop: false,
    spaceBetween: 20,
    centeredSlides: true,
  };

  constructor(private navController: NavController,private storage: Storage) { }
  ionViewWillEnter(){
    this.storage.set('activeTab','five');
    this.slideWithNav.slideTo(3, 0).then(() => {
    setTimeout(() => {
    }, 250);
    });
    }
  ngOnInit() {
    this.storage.set('activeTab','five');
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
