import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddChampComponent } from './components/add-champ/add-champ.component';
import { ChampDetailsComponent } from './components/champ-details/champ-details.component';
import { ChampsListComponent } from './components/champs-list/champs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddChampComponent,
    ChampDetailsComponent,
    ChampsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
