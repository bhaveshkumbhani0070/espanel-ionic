import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    document.body.setAttribute('data-theme', 'light');
    
 }
  login(){
    this.router.navigate(['/tabs/home'])
  }

  moveFocus(nextElement) {
      nextElement.setFocus();
  }
}
