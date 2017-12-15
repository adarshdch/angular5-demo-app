/*
  Do not specify app-wide singleton providers in a shared module.
  A lazy-loaded NgModule that imports that shared module makes its own copy of the service.
*/

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [ CommonModule, FormsModule ]
})
export class SharedModule { }
