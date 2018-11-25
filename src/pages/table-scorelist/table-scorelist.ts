import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TableScore1Page } from '../table-score1/table-score1';
import { Tablescore2Page } from '../tablescore2/tablescore2';
import { Tablescore3Page } from '../tablescore3/tablescore3';
import { Tablescore4Page } from '../tablescore4/tablescore4';
import { Tablescore5Page } from '../tablescore5/tablescore5';

/**
 * Generated class for the TableScorelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-table-scorelist',
  templateUrl: 'table-scorelist.html',
})
export class TableScorelistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TableScorelistPage');
  }
  buttonClick(){
    this.navCtrl.push(TableScore1Page);
  }
  buttonClick1(){
    this.navCtrl.push(Tablescore2Page);
  }
  buttonClick2(){
    this.navCtrl.push(Tablescore3Page);
  }
  buttonClick3(){
    this.navCtrl.push(Tablescore4Page);
  }
  buttonClick4(){
    this.navCtrl.push(Tablescore5Page);
  }
}
