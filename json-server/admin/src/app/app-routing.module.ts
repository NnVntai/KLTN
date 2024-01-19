import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/fun/home/home.component';
import { LoginComponent } from './components/blocks/login/login.component';
import { ChangepassComponent } from './components/fun/changepass/changepass.component';
import {  DanhgiaComponent} from "./components/fun/danhgia/danhgia.component";
import {  FuncComponent} from "./components/fun/func/func.component";
import {SystemComponent  } from "./components/fun/system/system.component";
import {  ThongkeComponent} from "./components/fun/thongke/thongke.component";
import {MguserComponent} from "./components/fun/mguser/mguser.component";
import {NoidungdanhgiaComponent } from "./components/fun/noidungdanhgia/noidungdanhgia.component";
import { KieudanhgiaComponent } from "./components/fun/kieudanhgia/kieudanhgia.component";
import { VaitroComponent } from "./components/fun/vaitro/vaitro.component";
import { ThaydoitaikhoanComponent } from "./components/fun/thaydoitaikhoan/thaydoitaikhoan.component";
import { NguoidungdanhgiaComponent } from "./components/fun/nguoidungdanhgia/nguoidungdanhgia.component";
import { ErrorComponent } from "./components/blocks/error/error.component";
import { Error404Component } from "./components/blocks/error404/error404.component";


const routes: Routes = [
  {path:  '' ,component: HomeComponent},
  {path:  'login', component: LoginComponent},
  {path:  'function/changepassword',component: ChangepassComponent},
  {path:  'function/xemdanhgia',component: DanhgiaComponent},
  {path:  'function/quanlychucnang',component: FuncComponent},
  {path:  'function/quanlyhethong',component: SystemComponent},
  {path:  'function/xemthongke',component: ThongkeComponent},   
  {path:  'function/noidungdanhgia',component: NoidungdanhgiaComponent},
  {path:  'function/quanlynguoidung',component: MguserComponent},
  {path:  'function/vaitro',component: VaitroComponent},
  {path:  'function/kieudanhgia',component: KieudanhgiaComponent},
  {path:  'function/thaydoitaikhoan',component: ThaydoitaikhoanComponent},
  {path:  'function/quanlynguoidanhgia',component: NguoidungdanhgiaComponent},
  {path: 'error404' ,component:Error404Component},
    {path: '**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
