import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'map.page.html'
})
export class MapPage {

  constructor(public nav: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MapPage Page');
  }

}
