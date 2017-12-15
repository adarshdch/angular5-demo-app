import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './assets.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AssetsComponent],
  exports:   [ AssetsComponent ],
})
export class AssetsModule { }
