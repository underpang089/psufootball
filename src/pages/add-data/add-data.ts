import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

import { TeamItem } from '../../models/team-item/team-item.interface';
import { AngularFireDatabase , FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-add-data',
  templateUrl: 'add-data.html',
})
export class AddDataPage {

  teamItem = {} as TeamItem;
  teamItemRef$: FirebaseListObservable<TeamItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
  this.teamItemRef$ = this.database.list('team-list5');

  }

  
  Submit(teamItem : TeamItem){
    this.teamItemRef$.push({
      itemName: this.teamItem.itemName,
      itemP: Number(this.teamItem.itemP),
      itemWin: Number(this.teamItem.itemWin),
      itemDraw: Number(this.teamItem.itemDraw),
      itemLose: Number(this.teamItem.itemLose),
      itemGd: Number(this.teamItem.itemGd),
      itemPoint: Number(this.teamItem.itemPoint)
    });
  }  

}
