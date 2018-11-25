import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase , FirebaseListObservable } from 'angularfire2/database-deprecated';
import { TeamItem } from '../../models/team-item/team-item.interface';



@Component({
  selector: 'page-table-score1',
  templateUrl: 'table-score1.html',
})
export class TableScore1Page {

  teamItemRef$: FirebaseListObservable<TeamItem[]>;

  constructor(public navCtrl: NavController, private database: AngularFireDatabase) {
    this.teamItemRef$ = this.database.list('team-list');
}
}
