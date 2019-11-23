import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NdrNavbarComponent } from './ndr-navbar/ndr-navbar.component';
import { NdrMulticonverterComponent } from './ndr-multiconverter/ndr-multiconverter.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NdrNavbarComponent, NdrMulticonverterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
