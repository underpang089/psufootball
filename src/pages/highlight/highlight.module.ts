import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { highlightPage } from '../highlight/highlight';

@NgModule({
  declarations: [
    highlightPage,
  ],
  imports: [
    IonicPageModule.forChild(highlightPage),
  ],
})
export class HighlightPageModule {}
