import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {SidebarLeftToggleDirective} from './app-left.directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SidebarLeftToggleDirective],
  bootstrap:    [ AppComponent, ]
})
export class AppModule { }
