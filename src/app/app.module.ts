import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { manualComponent } from 'src/manualComponent/manualComponent.component';
import { CommandLineComponentComponent } from './command-line-component/command-line-component.component';
import { PersonalDataServiceService } from './personal-data-service.service';

@NgModule({
  declarations: [
    AppComponent, manualComponent, CommandLineComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [PersonalDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
