import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { highlightPage } from '../highlight/highlight';
import { FixturesPage } from '../fixtures/fixtures';
import { TableScorelistPage } from '../table-scorelist/table-scorelist';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onClickPage1(){
    this.navCtrl.push(NewsPage);
  }
  onClickPage2(){
    this.navCtrl.push(highlightPage);
  }
  onClickPage3(){
    this.navCtrl.push(FixturesPage);
  }
  onClickPage4(){
    this.navCtrl.push(TableScorelistPage);
  }
}
