import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, WelcomeComponent],
  exports:   [ HomeComponent ],
})
export class HomeModule { }
