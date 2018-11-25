import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase , FirebaseListObservable } from 'angularfire2/database-deprecated';
import { TeamItem } from '../../models/team-item/team-item.interface';

/**
 * Generated class for the Tablescore4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-tablescore4',
  templateUrl: 'tablescore4.html',
})
export class Tablescore4Page {

  teamItemRef$: FirebaseListObservable<TeamItem[]>;

  constructor(public navCtrl: NavController, private database: AngularFireDatabase) {
    this.teamItemRef$ = this.database.list('team-list4');
}
}