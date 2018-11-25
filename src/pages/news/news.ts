import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { New1Page } from '../new1/new1';
import { New2Page } from '../new2/new2';
import { New3Page } from '../new3/new3';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  onClick() {
    this.navCtrl.push(New1Page);
  }
  onClick1() {
    this.navCtrl.push(New2Page);
  }
  onClick2() {
    this.navCtrl.push(New3Page);
  }
}
