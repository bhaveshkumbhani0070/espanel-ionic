import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProfileComponent} from './components/comman/profile/profile.component';
import {SettingComponent} from './components/comman/setting/setting.component';
import {EnComponent} from './components/comman/en/en.component';
import {TermsComponent} from './components/comman/terms/terms.component';
import {PrivacyComponent} from './components/comman/privacy/privacy.component';
import {MiniLessonComponent} from './components/comman/mini-lesson/mini-lesson.component';
import {ApperienceComponent} from './components/comman/Apperience/Apperience.component';
// import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'

var CREDENTIALS = {
  apiKey: 'AIzaSyCe930bE0KD9gz-YWU2qksDbUju7vcodBM',
  authDomain: 'traveldele-c8f3b.firebaseio.com',
  databaseURL: 'https://traveldele-c8f3b.firebaseio.com',
  projectId: 'traveldele-c8f3b',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '407544698049'

};

@NgModule({
  declarations: [AppComponent, ProfileComponent,SettingComponent,EnComponent,TermsComponent,PrivacyComponent,MiniLessonComponent,ApperienceComponent],
  entryComponents: [ProfileComponent,SettingComponent,EnComponent,TermsComponent,PrivacyComponent,MiniLessonComponent,ApperienceComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(CREDENTIALS),
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
