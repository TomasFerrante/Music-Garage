import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdListComponent } from './cd-list/cd-list.component';
import { ShopListComponent } from './shop-list/shop-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CdListComponent,
    ShopListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
