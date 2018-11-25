import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsPage } from '../pages/news/news';
import { TableScore1Page } from '../pages/table-score1/table-score1';
import { highlightPage } from '../pages/highlight/highlight';
import { TableScorelistPage } from '../pages/table-scorelist/table-scorelist';
import { FixturesPage } from '../pages/fixtures/fixtures';
import { Tablescore2Page } from '../pages/tablescore2/tablescore2';
import { Tablescore3Page } from '../pages/tablescore3/tablescore3';
import { Tablescore4Page } from '../pages/tablescore4/tablescore4';
import { Tablescore5Page } from '../pages/tablescore5/tablescore5';
import { Fixtures1Page } from '../pages/fixtures1/fixtures1';
import { Fixtures2Page } from '../pages/fixtures2/fixtures2';
import { Fixtures3Page } from '../pages/fixtures3/fixtures3';
import { Fixtures4Page } from '../pages/fixtures4/fixtures4';
import { Fixtures5Page } from '../pages/fixtures5/fixtures5';



import { IonicModule, IonicApp, IonicErrorHandler } from 'ionic-angular';
import { AddDataPage } from '../pages/add-data/add-data';
import { New1Page } from '../pages/new1/new1';
import { New2Page } from '../pages/new2/new2';
import { New3Page } from '../pages/new3/new3';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
    TableScore1Page,
    highlightPage,
    TableScorelistPage,
    FixturesPage,
    Tablescore2Page,
    Tablescore3Page,
    Tablescore4Page,
    Tablescore5Page,
    Fixtures1Page,
    Fixtures2Page,
    Fixtures3Page,
    Fixtures4Page,
    Fixtures5Page,
    AddDataPage,
    New1Page,
    New2Page,
    New3Page

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage,
    TableScore1Page,
    highlightPage,
    TableScorelistPage,
    FixturesPage,
    Tablescore2Page,
    Tablescore3Page,
    Tablescore4Page,
    Tablescore5Page,
    Fixtures1Page,
    Fixtures2Page,
    Fixtures3Page,
    Fixtures4Page,
    Fixtures5Page,
    AddDataPage,
    New1Page,
    New2Page,
    New3Page

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
