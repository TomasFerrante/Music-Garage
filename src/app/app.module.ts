import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdListComponent } from './cd-list/cd-list.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { AboutComponent } from './about/about.component';
import { CdsComponent } from './cds/cds.component';

@NgModule({
  declarations: [
    AppComponent,
    CdListComponent,
    ShopListComponent,
    AboutComponent,
    CdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
