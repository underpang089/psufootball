import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Fixtures5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fixtures5',
  templateUrl: 'fixtures5.html',
})
export class Fixtures5Page {
  ctrl = [
    {
        home: "เลเวอร์คูเซ่น",
        homeImg: "assets/imgs/germany/Bayer04.png",
        away: "ชตุทท์การ์ท",
        awayImg: "assets/imgs/germany/Stuttgart.png",
        time: "02.30 น."
    }]
    ctrl1 = [
    {
      home: "บาเยิร์น",
        homeImg: "assets/imgs/germany/Bayern.png",
        away: "ดุลเซลดอร์ฟ",
        awayImg: "assets/imgs/germany/FORTUNA.png",
        time: "21.30 น."
    },
    {
      home: "เอาก์บวร์ก",
        homeImg: "assets/imgs/germany/FCAUGSBURG.png",
        away: "แฟร้งค์เฟิร์ต",
        awayImg: "assets/imgs/germany/Frankfur.png",
        time: "21.30 น."
    },    
    {
      home: "ไมน์ซ์",
        homeImg: "assets/imgs/germany/Mainz.png",
        away: "ดอร์ทมุนด์",
        awayImg: "assets/imgs/germany/Dortmund.png",
        time: "21.30 น."
    },
    {
    home: "แฮร์ทา",
    homeImg: "assets/imgs/germany/BERLIN.png",
    away: "ฮอฟเฟนไฮม์",
    awayImg: "assets/imgs/germany/HOFFENHEIM.png",
    time: "21.30 น."
    },
    {
    home: "โวล์ฟสบวร์ก",
    homeImg: "assets/imgs/germany/Wolfsburg.png",
    away: "ไลป์ซิก",
    awayImg: "assets/imgs/germany/Leipzig.png",
    time: "21.30 น."
    },
    {
      home: "ชาลเก้",
      homeImg: "assets/imgs/germany/Schalke04.png",
      away: "เนิร์นแบร์ก",
      awayImg: "assets/imgs/germany/FCNURNBERG.png",
      time: "00.30 น."
  }]
  ctrl2 = [
  {
    home: "ไฟร์บวร์ก",
    homeImg: "assets/imgs/germany/SCFREIBURG.png",
    away: "เบรเมน",
    awayImg: "assets/imgs/germany/vader.png",
    time: "21.30 น."
},
{
    home: "กลัดบัค",
    homeImg: "assets/imgs/germany/gladbug.png",
    away: "ฮันโนเวอร์",
    awayImg: "assets/imgs/germany/hunno.png",
    time: "00.00 น."
}]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Fixtures5Page');
  }

}
