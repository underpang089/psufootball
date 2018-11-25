import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Fixtures1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fixtures1',
  templateUrl: 'fixtures1.html',
})
export class Fixtures1Page {
  ctrl = [
    {
        home: "เวสต์แฮม",
        homeImg: "assets/imgs/england/Westham.png",
        away: "แมนซิตี้",
        awayImg: "assets/imgs/england/mancity.png",
        time: "22.00 น."
    },
    {
      home: "เอฟเวอร์ตัน",
        homeImg: "assets/imgs/england/Everton.png",
        away: "คาร์ดิฟฟ์",
        awayImg: "assets/imgs/england/Cardiff.png",
        time: "22.00 น."
    },
    {
      home: "ไบร์ทตัน",
        homeImg: "assets/imgs/england/Brighton.png",
        away: "เลสเตอร์",
        awayImg: "assets/imgs/england/Leicester.png",
        time: "22.00 น."
    },    
    {
      home: "วัตฟอร์ต",
        homeImg: "assets/imgs/england/Watford.png",
        away: "ลิเวอร์พูล",
        awayImg: "assets/imgs/england/Liverpool.png",
        time: "22.00 น."
    },
    {
    home: "แมนยู",
    homeImg: "assets/imgs/england/manu.png",
    away: "คริสตัลพาเลซ",
    awayImg: "assets/imgs/england/Crystalpalace.png",
    time: "22.00 น."
    },
    {
    home: "ฟูแล่ม",
    homeImg: "assets/imgs/england/Fulham.png",
    away: "เซาแธมป์ตัน",
    awayImg: "assets/imgs/england/Southampton.png",
    time: "22.00 น."
    },
    {
      home: "สปอร์ส",
      homeImg: "assets/imgs/england/spurs.png",
      away: "เชลซี",
      awayImg: "assets/imgs/england/chelsea.png",
      time: "00.30 น."
  }
]
ctrl1 = [
  {
    home: "บอร์นมัธ",
    homeImg: "assets/imgs/england/Bournemouth.png",
    away: "อาร์เซน่อล",
    awayImg: "assets/imgs/england/Arsenal.png",
    time: "20.30 น."
},
{
    home: "วูล์ฟแฮมป์ตัน",
    homeImg: "assets/imgs/england/Wolverhampton.png",
    away: "ฮัดเดอร์ฟิลด์",
    awayImg: "assets/imgs/england/Huddersfield.png",
    time: "20.30 น."
},
{
    home: "เบิร์นลีย์",
    homeImg: "assets/imgs/england/Burnley.png",
    away: "นิวคาสเซิล",
    awayImg: "assets/imgs/england/Newcastle.png",
    time: "20.30 น."
}]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Fixtures1Page');
  }

}
