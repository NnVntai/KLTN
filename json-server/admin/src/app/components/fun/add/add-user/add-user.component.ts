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
  KieuDanhGia} from "../../../../Object/CUSTOMERJOURNEYMAP ";
import { Router  } from "@angular/router";
import { HeThongService } from "../../../../Service/hethong.module";
import {  Datatalbemu } from "../../../../Service/data.service";
import { VaiTroService } from "../../../../Service/vaitro.model";
import { MguserComponent } from "../../mguser/mguser.component";
import { NguoiDungService } from "../../../../Service/nguoidung.module";
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit { 
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

  constructor(private router:Router, private datas2: Datatalbemu,
    private mgu:MguserComponent, private vaitroservice:VaiTroService,private hethongservice:HeThongService,
    private nguoidungservice:NguoiDungService
    ) { 
    this.datas2.currentMessage.subscribe(message => this.exittable = message);
    this.datas2.currentMessageID.subscribe(message => this.iduser = message);
    //lay vai tro nguoi dung
    this.vaitroservice.getVaiTro(localStorage.getItem("token")).subscribe(data=>{
        this.Vaitro=data;
        let check_token=data as unknown as {_token:number};
        if(check_token._token==12)
        {
          alert("Phiên đăng nhập hết hạng vùi lòng đăng nhập lại");
          localStorage.removeItem("token");
          localStorage.removeItem("User");
          this.router.navigate(['/login']);
        }
    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });
    //lay ten he thong
    this.hethongservice.getHeThong(localStorage.getItem("token")).subscribe(data=>{
      this.HeThong=data;
      let check_token=data as unknown as {_token:number};
      if(check_token._token==12)
      {
        localStorage.removeItem("token");
        localStorage.removeItem("User");
        this.router.navigate(['/login']);
      }
    },error=>{
    console.log('oops', error); 
    this.router.navigate(['error404']);
    });
  }
  ngOnInit(): void {
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
    this.passwordagain="";  
    this.username=""; 
    this.hethong="";  
    this.vaitro=""; 
    this.name=""; 
    this.password="";
    this.ngaysinh="";
    this.tencongty="";
    this.chucdanh="";
    this.tencongty="";
    this.chucdanh="";
    this.ngaysinh="";
    this.datas2.changeMessageID(this.iduser=0);
    this.datas2.changeMessage(!this.exittable);
    this.usernamdi=false
  }
  dangky()
  {
    if(confirm("Bạn có muốn thêm tài khoản không?"))
    {
        this.nguoidungservice.insertUser(new NguoiQuanTri(1,
        this.name,this.username,this.password,
        new Date(this.ngaysinh),this.chucdanh,
        this.tencongty,this.vaitro,
        this.hethong,true),localStorage.getItem("token")).subscribe(data=>{
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
          alert("Thêm tài khoản thành công");
          this.datas2.changeMessage(!this.exittable);
          this.name="";
          this.username="";
          this.password="";
          this.vaitro="";
          this.hethong="";
          this.passwordagain="";
          this.mgu.ngOnInit();
        }
    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });
  }
    
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
  checkcombox(objectcheck:string|number,returncheck:number)
    {
      if(objectcheck!=null)
      {
        returncheck=1;
      }else{
        returncheck=2;
      }
      return returncheck;
    }
  checkpassagain(objectcheck:string,returncheck:number,returnpass:string)
    {
      if(objectcheck==returnpass)
      {
        returncheck=1;
      }else{
        returncheck=2;
      }
      return returncheck;
    }
  checkbutton(buttonc:boolean)
  {
    if(this.usernamec==1&&this.namec==1&&this.passwordc==1&&this.passwordagainc==1
      &&this.hethongc==1&&this.vaitroc==1&&this.tencongtyc==1&&this.chucdanhc==1&&this.ngaysinhc==1)
    {
      buttonc=false;
    }
    else{
      buttonc=true;
    }
    return buttonc;
  }
  checkusername(objectcheck:string)
  {
    this.nguoidungservice.checkusername(new NguoiQuanTri(1,this.name,objectcheck,this.password,new Date(this.ngaysinh),this.chucdanh,this.tencongty,this.vaitro,this.hethong,true),localStorage.getItem("token")).subscribe(data=>{
       if(data.length>0)
       {
         this.usernamec=2;
       }
    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });
  }
  update(iduser:number)
  {

    this.nguoidungservice.getinforuser(new NguoiQuanTri(
      this.iduser,this.name,this.username,
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
      console.log(new NguoiQuanTri(this.iduser,
        this.name,this.username,this.username,
        new Date(this.ngaysinh),this.chucdanh,this.tencongty,
        this.vaitro,this.hethong,true));
      this.nguoidungservice.changeuser(new NguoiQuanTri(this.iduser,
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
          this.datas2.changeMessage(!this.exittable);
          this.datas2.changeMessageID(this.iduser=0);
          this.name="";
          this.username="";
          this.password="";
          this.vaitro="";
          this.hethong="";
          this.tencongty="";
          this.chucdanh="";
          this.ngaysinh="";
          this.usernamdi=false;
          this.passwordagain="";
          this.mgu.ngOnInit();
        }
    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });
  }
  }
  resetpass()
{ 
  if(confirm("Bạn Có muốn reset password không")){
      this.nguoidungservice.changepassword(new NguoiQuanTri(this.iduser,
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
          alert("Thay đổi mật khẩu thành công");
          this.mgu.ngOnInit();
        }
    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });
  }
}
}

