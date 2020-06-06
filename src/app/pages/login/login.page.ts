import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:any;
  constructor(
    private router: Router,
    private storage: Storage,
    public fAuth: AngularFireAuth) { }

  ngOnInit() {
    this.storage.set('token', false);
  }

  ionViewWillEnter(){
     let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
     document.body.setAttribute('data-theme', 'light');
  }

  async login(){
    console.log('email',this.email)
    this.storage.set('token', true);
    this.router.navigate(['/splash/confirm'])

    // try {
    //   var r = await this.fAuth.auth.createUserWithEmailAndPassword('kumbhani.bhavesh.1@gmail.com','9099414492');
    //   if (r) {
    //     console.log("Successfully registered!");
    //   }

    // } catch (err) {
    //   console.error('err',err);
    // }
  }
}
