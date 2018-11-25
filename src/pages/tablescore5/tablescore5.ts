import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase , FirebaseListObservable } from 'angularfire2/database-deprecated';
import { TeamItem } from '../../models/team-item/team-item.interface';


/**
 * Generated class for the Tablescore5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-tablescore5',
  templateUrl: 'tablescore5.html',
})
export class Tablescore5Page {

teamItemRef$: FirebaseListObservable<TeamItem[]>;

  constructor(public navCtrl: NavController, private database: AngularFireDatabase) {
    this.teamItemRef$ = this.database.list('team-list5');
}
}