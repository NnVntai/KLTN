import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableparentsComponent } from './components/table/tableparents/tableparents.component';
import { TablechildComponent } from './components/table/tablechild/tablechild.component';
import { OpenComponent } from './components/button/open/open.component';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './components/slider/slider/slider.component';
import { ButtonchucnangComponent } from './components/button/buttonchucnang/buttonchucnang.component';
import { ListfunComponent } from './components/slider/listfun/listfun.component';
import { ButtonstarComponent } from './components/button/buttonstar/buttonstar.component';
import { InputtxtComponent } from './components/input/inputtxt/inputtxt.component';
import { TextLComponent } from './components/input/text-l/text-l.component';
import { FormsModule } from '@angular/forms';
import { SendComponent } from './components/button/send/send.component'; 
import { ChiTietDanhGia } from './Object/CUSTOMERJOURNEYMAP';


@NgModule({
  declarations: [
    AppComponent,
    TableparentsComponent,
    TablechildComponent,
    OpenComponent,
    SliderComponent,
    ButtonchucnangComponent,
    ListfunComponent,
    ButtonstarComponent,
    InputtxtComponent,
    TextLComponent,
    SendComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[TableparentsComponent,TablechildComponent,AppComponent,ButtonstarComponent,InputtxtComponent,TextLComponent]
})
export class AppModule { }
