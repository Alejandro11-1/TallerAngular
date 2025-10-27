import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SeriesModule } from './series/series.module';

@NgModule({
  declarations: [AppComponent], 
  imports: [BrowserModule, HttpClientModule, SeriesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
