import { Component, Input, OnInit, Output } from '@angular/core';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
import { Router } from '@angular/router';
import { LoginService } from "../../../Service/login.module";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  error:String="";
  username:string;
  password:string;

  constructor( private loginService:LoginService, private router: Router)  {
      if(localStorage.getItem('User'))
      {
       this.router.navigate(['/']);
      }
      this.username="";
      this.password="";
  }
  ngOnInit(): void {  
  }
  public onSubmit() 
  {
      this.loginService.getLogin(new Login(this.username, this.password)).subscribe(data=>{
         let data2=data as {"status":boolean,user:any,_token:String};
          if(data2.status==true)
          {
            localStorage.setItem('token',data2._token.toString());
            localStorage.setItem('User',JSON.stringify(data2.user));
            this.router.navigate(['/']);
       
          }
          else{
            console.log(data);
            this.error="sai tài khoản và mật khẩu"
          }
    },error=>{
        console.log('oops', error); 
        this.router.navigate(['error404']);
    });
  }
}

