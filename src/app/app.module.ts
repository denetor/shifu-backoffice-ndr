import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NdrNavbarComponent } from './ndr-navbar/ndr-navbar.component';
import { TaoluComponent } from './taolu/taolu.component';
import { TaoluService } from './taolu.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TaoluComponent },
    ])
    ],
  declarations: [ AppComponent, NdrNavbarComponent, TaoluComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TaoluService]
})
export class AppModule { }
