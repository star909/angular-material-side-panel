import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { AgmOverlays } from "agm-overlays"
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelListComponent } from './modules/panel-list/panel-list.component';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    PanelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmOverlays,
    HttpClientModule,
    RatingModule,
    AgmCoreModule.forRoot(
      {
        apiKey: 'AIzaSyBVj41fTYfeDrxPrLVtpWtmh7Pm-KSOLK8'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
