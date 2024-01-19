import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/blocks/login/login.component';
import { HomeComponent } from './components/fun/home/home.component';
import { MenuComponent } from './components/blocks/menu/menu.component';
import { NavbarComponent } from './components/blocks/navbar/navbar.component';
import { ThongkeComponent } from './components/fun/thongke/thongke.component';
import { ChangepassComponent } from './components/fun/changepass/changepass.component';
import { DanhgiaComponent } from './components/fun/danhgia/danhgia.component';
import { SystemComponent } from './components/fun/system/system.component';
import { FuncComponent } from './components/fun/func/func.component';
import { MguserComponent } from './components/fun/mguser/mguser.component';
import { ErrorComponent } from './components/blocks/error/error.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TableComponent } from './components/blocks/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddUserComponent } from './components/fun/add/add-user/add-user.component';
import { AddsysComponent } from './components/fun/add/addsys/addsys.component';
import { Error404Component } from './components/blocks/error404/error404.component';
import { AddfuncComponent } from './components/fun/add/addfunc/addfunc.component'
//material
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ChartcolumComponent } from './components/blocks/chartcolum/chartcolum.component';
import { AddrateComponent } from './components/fun/add/addrate/addrate.component';
import { NoidungdanhgiaComponent } from './components/fun/noidungdanhgia/noidungdanhgia.component';
import { FunctionhethongComponent } from './components/chartjs/functionhethong/functionhethong.component';
import { ColumComponent } from './components/chartjs/colum/colum.component';
import { PieComponent } from './components/blocks/pie/pie.component';
import { AddnoidungdanhgiaComponent } from './components/fun/add/addnoidungdanhgia/addnoidungdanhgia.component';
import { AddVaitroComponent } from './components/fun/add/add-vaitro/add-vaitro.component';
import { AddKieudanhgiaComponent } from './components/fun/add/add-kieudanhgia/add-kieudanhgia.component';
import { VaitroComponent } from './components/fun/vaitro/vaitro.component';
import { KieudanhgiaComponent } from './components/fun/kieudanhgia/kieudanhgia.component';
import { ThaydoitaikhoanComponent } from './components/fun/thaydoitaikhoan/thaydoitaikhoan.component';
import { NguoidungdanhgiaComponent } from './components/fun/nguoidungdanhgia/nguoidungdanhgia.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    NavbarComponent,
    ThongkeComponent,
    ChangepassComponent,
    DanhgiaComponent,
    SystemComponent,
    FuncComponent,
    MguserComponent,
    ErrorComponent,
    TableComponent,
    AddUserComponent,
    AddsysComponent,
    Error404Component,
    AddfuncComponent,
    ChartcolumComponent,
    AddrateComponent,
    NoidungdanhgiaComponent,
    FunctionhethongComponent,
    ColumComponent,
    PieComponent,
    AddnoidungdanhgiaComponent,
    AddVaitroComponent,
    AddKieudanhgiaComponent,
    VaitroComponent,
    KieudanhgiaComponent,
    ThaydoitaikhoanComponent,
    NguoidungdanhgiaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    FontAwesomeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
