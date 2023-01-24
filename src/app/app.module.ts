import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodeBaseComponent } from './ui/node-base/node-base.component';
import { InputBaseComponent } from './ui/input-base/input-base.component';
import { InputColorComponent } from './ui/input-base/input-color/input-color.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeBaseComponent,
    InputBaseComponent,
    InputColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
