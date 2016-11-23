import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'standings.page.html'
})
export class StandingsPage {

  constructor(public nav: NavController) {}

  ionViewDidLoad() {
    console.log("standings loaded");
  }

  foo() {
    console.log("bar");
  }
}
