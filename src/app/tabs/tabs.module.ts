import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {HeaderComponent} from '../components/header/header.component';
import {SlideComponent} from '../components/slide/slide.component';
import {LableCardComponent} from '../components/comman/lable-card/lable-card.component';
import {TitleComponent} from '../components/comman/title/title.component';

import {HomeComponent} from '../components/home/home.component';
import {ConversacionesComponent} from '../components/conversaciones/conversaciones.component';
import {HistoriasComponent} from '../components/historias/historias.component';
import {NoticiasComponent} from '../components/noticias/noticias.component';
import {TraducirComponent} from '../components/traducir/traducir.component';
import {AudioPlayerComponent} from '../components/comman/audio-player/audio-player.component';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    
  ],
  declarations: [ TabsPage,HeaderComponent,SlideComponent,LableCardComponent,TitleComponent,
                  HomeComponent,ConversacionesComponent,
                  HistoriasComponent,NoticiasComponent,TraducirComponent,AudioPlayerComponent],
  entryComponents:[AudioPlayerComponent],
  providers: [NativeAudio]
})
export class TabsPageModule {}
