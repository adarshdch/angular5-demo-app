import { SharedModule } from './../../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [ ContactComponent ],
  exports:   [ ContactComponent ]
})
export class ContactModule { }
