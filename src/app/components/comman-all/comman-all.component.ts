import { Component, OnInit,ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-comman-all',
  templateUrl: './comman-all.component.html',
  styleUrls: ['./comman-all.component.scss'],
})
export class CommanAllComponent implements OnInit {

  @ViewChild (IonSlides,{static: false}) protected slideWithNav: IonSlides;
 
  
  title = "Conversaciones auténticas de las calles de Medellín, Colombia. co"

  allItems=[{
    img:"../../../assets/img/sl0101.png",
    title:"¿Alguna vez te has enamorado de una mujer paisa?",
    des:"Listen, I've had a pretty messed up day..."
  },
  {
    img:"../../../assets/img/sl0102.png",
    title:"¿Alguna vez te has enamorado de una mujer paisa?",
    des:"Listen, I've had a pretty messed up day..."
  },
  {
    img:"../../../assets/img/sl0103.png",
    title:"Finn",
    des:"Listen, I've had a pretty messed up day..."
  }]
  activeTab:any;
  slideOptsOne = {
    // initialSlide: 0,
    slidesPerView: 1.3,
    autoplay: false,
    loop: false,
    spaceBetween: 20,
    centeredSlides: true,
  };

  constructor(private navController: NavController,private storage: Storage,private router: Router) { }

  ngOnInit() {
    this.storage.set('activeTab','two');
    console.log('activeTab',this.activeTab)
    
  }

  slidernext(e){
    setTimeout(() => {
      console.log('e.detail.movementX',e.detail.movementX);
        // if(e.detail.movementX>0){
        // this.router.navigate(['/tabs/tab3']);
        // }
        // else if(e.detail.movementX<0){
        //   this.router.navigate(['/tabs/tab2']);
        // }
      }, 4000);
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
    this.slideWithNav.getActiveIndex().then((id) => {
      console.log('sliderIndex',id)
      this.activeTab=id;
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
      this.router.navigateByUrl('/tabs/'+val);
      // this.navController.navigateRoot('/tabs/'+val);
      // Object.assign(this.slideOptsOne,{initialSlide:this.activeTab})
    });
  }
  getIndex(event) {
    console.log(event.clickedIndex);
  }
}
