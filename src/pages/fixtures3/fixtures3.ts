import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Fixtures3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fixtures3',
  templateUrl: 'fixtures3.html',
})
export class Fixtures3Page {
  ctrl = [
    {
        home: "อูดีเนเซ",
        homeImg: "assets/imgs/italy/udinese.png",
        away: "โรม่า",
        awayImg: "assets/imgs/italy/roma.png",
        time: "21.00 น."
    },
    {
      home: "ยูเวนตุส",
        homeImg: "assets/imgs/italy/Juventus.png",
        away: "สปอล",
        awayImg: "assets/imgs/italy/spal.png",
        time: "00.00 น."
    },
    {
      home: "อินเตอร์",
        homeImg: "assets/imgs/italy/INTER.png",
        away: "โฟรซิโนเน่",
        awayImg: "assets/imgs/italy/Frosinone.png",
        time: "02.30 น."
    }]
    ctrl1 = [     
    {
      home: "ปาร์มา",
        homeImg: "assets/imgs/italy/Parma.png",
        away: "ซาซซูโอโล่",
        awayImg: "assets/imgs/italy/SASSUOLO.png",
        time: "18.30 น."
    },
    {
    home: "โบโลญญ่า",
    homeImg: "assets/imgs/italy/Bolognafc.png",
    away: "ฟิออเรนตีน่า",
    awayImg: "assets/imgs/italy/FIORENTINA.png",
    time: "21.00 น."
    },
    {
    home: "นาโปลี",
    homeImg: "assets/imgs/italy/NAPOLI.png",
    away: "คิเอโว",
    awayImg: "assets/imgs/italy/CHIEVO.png",
    time: "21.00 น."
    },
    {
      home: "เอ็มโปลี",
      homeImg: "assets/imgs/italy/EMPOLI.png",
      away: "อตาลันต้า",
      awayImg: "assets/imgs/italy/Atalanta.png",
      time: "21.00 น."
  },
  {
    home: "ลาซิโอ",
    homeImg: "assets/imgs/italy/Lazio.png",
    away: "เอซีมิลาน",
    awayImg: "assets/imgs/italy/ACMilan.png",
    time: "00.00 น."
},
{
    home: "เจนัว",
    homeImg: "assets/imgs/italy/GENOA.png",
    away: "ซัมป์โดเรีย",
    awayImg: "assets/imgs/italy/SAMPDORIA.png",
    time: "02.30 น."
}]
ctrl2 = [
{
    home: "กายารี่",
    homeImg: "assets/imgs/italy/CAGLIARI.png",
    away: "โตริโน่",
    awayImg: "assets/imgs/italy/TORINO.png",
    time: "02.30 น."
}]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Fixtures3Page');
  }

}
