import { Component, OnInit,ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {

  @ViewChild (IonSlides,{static: false}) protected slideWithNav: IonSlides;
 
  
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1.3,
    autoplay: false,
    loop: false,
    spaceBetween: 20,
    centeredSlides: true,
  };

  constructor(private navController: NavController) { }

  ngOnInit() {
    //this.slideOptsOne.initialSlide =0;
  }

  moveCard(id){
    let val;
    Object.assign(this.slideOptsOne,{initialSlide:id})
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
