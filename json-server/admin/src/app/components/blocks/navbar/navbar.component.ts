import { IfStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { json } from 'body-parser';
import { 
  Login,
  NguoiDanhGia,
  NguoiQuanTri,
  VaiTro,
  HeThong,
  DanhGia,
  ChiTietDanhGia,
  ChucNang,
  KieuDanhGia} from "../../../Object/CUSTOMERJOURNEYMAP ";
import { Datatalbemu } from "../../../Service/data.service";
import {  LoginService} from "../../../Service/login.module";
import { VaiTroService } from "../../../Service/vaitro.model";
import { faUser,faSignIn } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  message:String|undefined;
  faUser=faUser;
  faSignIn=faSignIn;
  constructor( private router: Router,private vaitroservice:VaiTroService ) { 
    if(localStorage.getItem('token'))
    {
      this.message=JSON.parse(localStorage.getItem("User")||"")[0].hoTen;
    }else{

    this.vaitroservice.getVaiTro(localStorage.getItem("token")).subscribe(data=>{
      let checkdata= data as unknown as {"_token":number};
      if( checkdata._token==12)
      {
        alert("phien đăng nhập của bạn hết hạn vùi lòng đăng nhập lại");
        localStorage.removeItem('token');
        localStorage.removeItem('User');
        this.router.navigate(['login']);
      }else if(checkdata._token==1){
        alert("phien đăng nhập của bạn hết hạn vùi lòng đăng nhập lại");
        localStorage.removeItem('token');
        localStorage.removeItem('User');
        this.router.navigate(['login']);
      }else{
        this.router.navigate(['login']);
      }
    },error=>{
      console.log('oops', error); 
    });
  }
  }
  ngOnInit(): void {
  }
  login()
  {
    try {
      if(localStorage.getItem('token'))
      {
        if(confirm("bạn có muốn đăng xuất"))
        {
         localStorage.removeItem('token');
          localStorage.removeItem('User');
         this.router.navigate(['/login']);
         this.message="login";
        }
      }else{
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.log(error);
    }

     
  }
}
