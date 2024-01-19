import { Component, Input, OnInit, Output, } from '@angular/core';
import { faTimesCircle,faCheck  } from '@fortawesome/free-solid-svg-icons';

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
import { Router  } from "@angular/router";
import { HeThongService } from "../../../Service/hethong.module";
import {  Datatalbemu } from "../../../Service/data.service";
import { VaiTroService } from "../../../Service/vaitro.model";
import { MguserComponent } from "../mguser/mguser.component";
import { NguoiDungService } from "../../../Service/nguoidung.module";
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-thaydoitaikhoan',
  templateUrl: './thaydoitaikhoan.component.html',
  styleUrls: ['./thaydoitaikhoan.component.css']
})
export class ThaydoitaikhoanComponent implements OnInit {
//truyen bien mo the 
userQT:NguoiQuanTri[]=[];
// @Output()@Input() exittable: boolean |undefined;
exittable:boolean=false;
//khai bao bien 
passwordagain:string=""; 
username:string=""; 
hethong:any=""; 
vaitro:any=""; 
name:string=""; 
password:string="";
chucdanh:string="";
tencongty:string="";
ngaysinh: string="";
//khai bao icon
faTimesCircle=faTimesCircle;  faCheck=faCheck;
//khai bao bien kiem tra 
iduser:number=0;
usernamdi:boolean=false;
usernamec:number=0;
namec:number=0;
passwordc:number=0;
passwordagainc:number=0;
hethongc:number=0;
vaitroc:number=0;
buttonc:boolean=true;
chucdanhc:number=0;
tencongtyc:number=0;
ngaysinhc:number=0;
// khoi tao mang vai tro va he thong
Vaitro:VaiTro[]=[];
HeThong:HeThong[]=[];
//bien kiem tra ky tu dat biet 
sss:any=/[^~!@#$%&*\[\]\{\}\<\>\^+=:,;?/\\]+$/;

constructor(private router:Router, private datas2: Datatalbemu, private nguoidungservice:NguoiDungService
  ) { 
  this.datas2.currentloginid.subscribe(data=>this.iduser=data);
}
ngOnInit(): void {
  this.update(1);
}
kiemtradate()
{
  if(this.ngaysinh!="")
  {
      this.ngaysinhc=1;
  }else this.ngaysinhc=2;

}
outtable()
{

  this.username=""; 
  this.hethong="";  
  this.vaitro=""; 
  this.name=""; 
  this.ngaysinh="";
  this.tencongty="";
  this.chucdanh="";
  this.tencongty="";
  this.chucdanh="";
  this.ngaysinh="";
  this.usernamdi=false
}
checkerror(objectcheck:string, returncheck:number)
{
  if(objectcheck!="")
  { 
    if(objectcheck.length>5)
    {
       for (let i = 0; i < objectcheck.length; i++) {
                if(this.sss.test(objectcheck[i]))
                {
                  returncheck=1;
                }else {
                  returncheck=2;
                  break;
                }    
      }
    }else{
    returncheck=2;
    }
  }else{
    returncheck=2;
  }
  return returncheck;
}
update(iduser:number)
{

  this.nguoidungservice.getinforuser(new NguoiQuanTri(
    JSON.parse(localStorage.getItem('User')||"")[0].id,this.name,this.username,
    this.password,new Date(this.ngaysinh),this.chucdanh,
    this.tencongty,this.vaitro,this.hethong,true),localStorage.getItem("token")).subscribe(data3=>{
      let check_token=data3 as unknown as {_token:number};
      if(check_token._token==12)
      {
        alert("Phiên đăng nhập hết hạng vùi lòng đăng nhập lại");
        localStorage.removeItem("token");
        localStorage.removeItem("User");
        this.router.navigate(['/login']);
      }
      this.userQT=data3;
      this.usernamdi=true;
      this.name=this.userQT[0].hoTen;
      this.username=this.userQT[0].username;
      this.tencongty=this.userQT[0].tenCongTy;
      this.chucdanh=this.userQT[0].chucDanh;
      this.ngaysinh=moment(this.userQT[0].ngaySinh).format('YYYY-MM-DD');
  },error=>{
    console.log('oops', error); 
    this.router.navigate(['error404']);
  });

}
capnhat()
{
  if(confirm("Bạn Có muốn cập nhật lại tài khoản không ?")){
 
    this.nguoidungservice.changeuser(new NguoiQuanTri( JSON.parse(localStorage.getItem('User')||"")[0].id,
      this.name,this.username,this.username,
      new Date(this.ngaysinh),this.chucdanh,this.tencongty,
      this.vaitro,this.hethong,true),localStorage.getItem("token")).subscribe(data=>{
        let check_token=data as unknown as {_token:number};
        if(check_token._token==12)
        {
          alert("Phiên đăng nhập hết hạng vùi lòng đăng nhập lại");
          localStorage.removeItem("token");
          localStorage.removeItem("User");
          this.router.navigate(['/login']);
        }
      if(data==1)
      {
        alert("Cập nhật tài khoản thành công");
        this.name="";
        this.username="";
        this.vaitro="";
        this.hethong="";
        this.tencongty="";
        this.chucdanh="";
        this.ngaysinh="";
        this.usernamdi=false;
        this.ngOnInit();
      }
  },error=>{
    console.log('oops', error); 
    this.router.navigate(['error404']);
  });
}
}

}
