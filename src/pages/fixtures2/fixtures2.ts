import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Fixtures2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fixtures2',
  templateUrl: 'fixtures2.html',
})
export class Fixtures2Page {
  ctrl = [
    {
        home: "เลกาเนส",
        homeImg: "assets/imgs/spain/Leganes.png",
        away: "อลาเบส",
        awayImg: "assets/imgs/spain/ALAVES.png",
        time: "03.00 น."
    }
  ]
  ctrl1 = [
    {
      home: "เอย์บาร์",
        homeImg: "assets/imgs/spain/EIBAR.png",
        away: "เรอัลมาดริด",
        awayImg: "assets/imgs/spain/Realmadrid.png",
        time: "19.00 น."
    },
    {
      home: "บาเลนเซีย",
        homeImg: "assets/imgs/spain/ValenciaCF.png",
        away: "ราโย่",
        awayImg: "assets/imgs/spain/Rayo.png",
        time: "22.15 น."
    },    
    {
      home: "ฮูเอสก้า",
        homeImg: "assets/imgs/spain/HUESCA.png",
        away: "เลบันเต",
        awayImg: "assets/imgs/spain/Levante.png",
        time: "00.30 น."
    },
    {
    home: "แอตมาดริด",
    homeImg: "assets/imgs/spain/atletico.png",
    away: "บาร์เซโลน่า",
    awayImg: "assets/imgs/spain/Barcelona.png",
    time: "02.45 น."
    }]
    ctrl2 = [
    {
    home: "แอธ.บิลเบา",
    homeImg: "assets/imgs/spain/Athleticclub.png",
    away: "เคตาเฟ่",
    awayImg: "assets/imgs/spain/Getafe.png",
    time: "18.00 น."
    },
    {
      home: "เซบีย่า",
      homeImg: "assets/imgs/spain/Sevilla.png",
      away: "บายาโดลิด",
      awayImg: "assets/imgs/spain/VALLADOLID.png",
      time: "22.15 น."
  },
  {
    home: "อัสปัญญอล",
    homeImg: "assets/imgs/spain/Rcdespanyol.png",
    away: "คิโรน่า",
    awayImg: "assets/imgs/spain/GIRONA.png",
    time: "00.30 น."
},
{
    home: "บียาร์เรอัล",
    homeImg: "assets/imgs/spain/Villarrealcf.png",
    away: "เรอัล เบติส",
    awayImg: "assets/imgs/spain/RealBetis.png",
    time: "02.45 น."
}]
ctrl3 = [
{
    home: "เรอัลโซเซียดัด",
    homeImg: "assets/imgs/spain/Realsociedad.png",
    away: "เซลต้าบีโก้",
    awayImg: "assets/imgs/spain/Celta.png",
    time: "03.00 น."
}]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Fixtures2Page');
  }

}
