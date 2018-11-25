import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Fixtures4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fixtures4',
  templateUrl: 'fixtures4.html',
})
export class Fixtures4Page {
  ctrl = [
    {
        home: "โอลิมปิก ลียง",
        homeImg: "assets/imgs/france/Olympique.png",
        away: "แซงต์ เอเตียน",
        awayImg: "assets/imgs/france/ETIENNE.png",
        time: "03.00 น."
    }]
    ctrl1 = [
    {
      home: "แปแอ็สเฌ",
        homeImg: "assets/imgs/france/PARIS.png",
        away: "ตูลูส",
        awayImg: "assets/imgs/france/TOULOUSE.png",
        time: "23.00 น."
    },
    {
      home: "ดิฌง",
        homeImg: "assets/imgs/france/DIJON.png",
        away: "บอร์กโดซ์",
        awayImg: "assets/imgs/france/Bodeaux.png",
        time: "02.00 น."
    },    
    {
      home: "ก็อง",
        homeImg: "assets/imgs/france/CAEN.png",
        away: "โมนาโก",
        awayImg: "assets/imgs/france/MONACO.png",
        time: "02.00 น."
    },
    {
    home: "สตารส์บูร์ก",
    homeImg: "assets/imgs/france/stabug.png",
    away: "นีมส์",
    awayImg: "assets/imgs/france/NIMES.png",
    time: "02.00 น."
    },
    {
    home: "น็องต์",
    homeImg: "assets/imgs/france/NANTES.png",
    away: "อองเช่",
    awayImg: "assets/imgs/france/ANGERS.png",
    time: "02.00 น."
    },
    {
      home: "แร็ง",
      homeImg: "assets/imgs/france/Reims.png",
      away: "แก็งก็อง",
      awayImg: "assets/imgs/france/GUINGAMP.png",
      time: "02.00 น."
  }
]
ctrl2 = [
  {
    home: "มงต์เปลลิเยร์",
    homeImg: "assets/imgs/france/MONTPELLIER.png",
    away: "แรนส์",
    awayImg: "assets/imgs/france/RENNES.png",
    time: "21.00 น."
},
{
    home: "นีซ",
    homeImg: "assets/imgs/france/Ogcnice.png",
    away: "ลีลล์",
    awayImg: "assets/imgs/france/LILLE.png",
    time: "23.00 น."
},
{
    home: "อาเมียงส์",
    homeImg: "assets/imgs/france/Amiens.png",
    away: "มาร์แซย์",
    awayImg: "assets/imgs/france/Marseille.png",
    time: "03.00 น."
}]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Fixtures4Page');
  }

}
