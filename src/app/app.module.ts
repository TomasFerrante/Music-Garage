import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdListComponent } from './cd-list/cd-list.component';
import { CdsComponent } from './cds/cds.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { ShopListComponent } from './shop-list/shop-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CdListComponent,
    ShopListComponent,
    AboutComponent,
    CdsComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
