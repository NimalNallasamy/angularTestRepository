import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { manualComponent } from 'src/manualComponent/manualComponent.component';
import { CommandLineComponentComponent } from './command-line-component/command-line-component.component';

@NgModule({
  declarations: [
    AppComponent, manualComponent, CommandLineComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
