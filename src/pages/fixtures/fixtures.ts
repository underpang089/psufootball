import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Fixtures1Page } from '../fixtures1/fixtures1';
import { Fixtures2Page } from '../fixtures2/fixtures2';
import { Fixtures3Page } from '../fixtures3/fixtures3';
import { Fixtures4Page } from '../fixtures4/fixtures4';
import { Fixtures5Page } from '../fixtures5/fixtures5';

/**
 * Generated class for the FixturesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fixtures',
  templateUrl: 'fixtures.html',
})
export class FixturesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FixturesPage');
  }
  buttonClick(){
    this.navCtrl.push(Fixtures1Page);
  }
  buttonClick1(){
    this.navCtrl.push(Fixtures2Page);
  }
  buttonClick2(){
    this.navCtrl.push(Fixtures3Page);
  }
  buttonClick3(){
    this.navCtrl.push(Fixtures4Page);
  }
  buttonClick4(){
    this.navCtrl.push(Fixtures5Page);
  }
}
