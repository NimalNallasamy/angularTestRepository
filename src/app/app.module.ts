import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { manualComponent } from 'src/manualComponent/manualComponent.component';
import { CommandLineComponentComponent } from './command-line-component/command-line-component.component';
import { PersonalDataServiceService } from './personal-data-service.service';
import { GamesServiceService } from './games-service.service';
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent, manualComponent, CommandLineComponentComponent, TemplateFormsComponent, ReactiveFormsComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [PersonalDataServiceService, GamesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
