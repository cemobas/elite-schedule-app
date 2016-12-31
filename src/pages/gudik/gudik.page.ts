import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { TeamHomePage, TournamentsPage } from '../pages';
import { EliteApi, UserSettings } from '../../shared/shared';

@Component({
  templateUrl: 'gudik.page.html'
})
export class GudikPage {

    favourites: any[];

  constructor(
    public loadingController: LoadingController,
    public nav: NavController,
    public eliteApi: EliteApi,
    public userSettings: UserSettings) {
  }

  favouriteTapped($event, favourite) {
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favourite.tournamentId)
      .subscribe(t => this.nav.push(TeamHomePage, favourite.team));
  }

  goToTournaments() {
    this.nav.push(TournamentsPage);
  }

  ionViewDidEnter(){
    this.userSettings.getAllFavorites().then(favs => this.favourites = favs);
  }

}
