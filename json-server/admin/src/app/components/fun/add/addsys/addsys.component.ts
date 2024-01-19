import { Component, OnInit } from '@angular/core';
import { faTimesCircle,faCheck ,faSpinner } from '@fortawesome/free-solid-svg-icons';
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
import {  Datatalbemu } from "../../../../Service/data.service";

import { HeThongService } from "../../../../Service/hethong.module";
import { SystemComponent } from "../../system/system.component";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addsys',
  templateUrl: './addsys.component.html',
  styleUrls: ['./addsys.component.css']
})
export class AddsysComponent implements OnInit {

  countryForm!: FormGroup;
  //truyen bien mo the 
  
  // @Output()@Input() exittable: boolean |undefined;
  exittable:boolean=false;
  //khai bao bien 
  maHT:number; username:string; 
  //khai bao icon
  faTimesCircle=faTimesCircle;  faCheck=faCheck; faSpinner=faSpinner;
  //khai bao bien kiem tra 
  idHT:number=0;
  buttonc:boolean=true;
  usernamec:number;
  maketnoi:string;
  ipHeThong:string;
  ipHeThongc:number;
  // khoi tao mang vai tro va he thong

  HeThong:HeThong[]=[]; 
  //bien kiem tra ky tu dat biet 
  sss:any=/[^~!@#$%&*\[\]\{\}\<\>\^+=,;?/\\]+$/;

  constructor(private router:Router, 
    private datas2: Datatalbemu,private sys:SystemComponent,private hethongservice:HeThongService) { 
    this.datas2.currentMessageSYS.subscribe(message => this.exittable = message);
    this.datas2.currentMessageSYSID.subscribe(message => this.idHT = message);
    this.ipHeThongc=0;
    this.usernamec=0; 
    this.buttonc=true;
    this.maHT=0;  this.username=""; this.maketnoi=""; 
    this.ipHeThong='';
   
  }
  ngOnInit(): void {
  }
  outtable()
  {
    this.maHT=0;
    this.ipHeThongc=0;  this.username="";  this.maketnoi=""; 
    this.datas2.changeMessageSYSID(this.idHT=0);
    this.datas2.changeMessageSYS(!this.exittable);
  }
  dangky()
  {
      this.hethongservice.insertsystem(new HeThong(this.maHT,this.username,this.maketnoi,false,this.ipHeThong),localStorage.getItem("token")).subscribe(data=>{
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
          alert("Thêm Hệ Thống thành công");
          this.datas2.changeMessageSYS(!this.exittable);
          this.maHT=0;
          this.username="";
          this.maketnoi="";
          this.ipHeThong='';
          this.sys.ngOnInit();
        }
    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });
    
  }
  checkerror(objectcheck:string, returncheck:number)
  {
    if(objectcheck!="")
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
    return returncheck;
  }
  
  checkbutton(buttonc:boolean)
  {
    if(this.usernamec==1&&this.maketnoi!=""&&this.ipHeThongc==1)
    {
      buttonc=false;
    }
    else{
      buttonc=true;
    }
    return buttonc;
  }
  checkusername(objectcheck:number,idHT:number) 
  {

    // if(objectcheck!=idHT)
    //   {
    //   this.hethongservice.checksys(new HeThong(objectcheck,this.username,true,""),localStorage.getItem("token")).subscribe(data=>{
    //     if(data.length>0)
    //     {
    //       this.mahtc=2;
    //     }
    //   },error=>{
    //     console.log('oops', error); 
    //     this.router.navigate(['error404']);
    //   });
    // }
  }
  update(iduser:number)
  {
    this.hethongservice.getinforsys(new HeThong(this.idHT,this.username,this.maketnoi,true,this.ipHeThong),localStorage.getItem("token")).subscribe(data3=>{
      let check_token=data3 as unknown as {_token:number};
          if(check_token._token==12)
          {
            alert("Phiên đăng nhập hết hạng vùi lòng đăng nhập lại");
            localStorage.removeItem("token");
            localStorage.removeItem("User");
            this.router.navigate(['/login']);
          } 
      this.HeThong=data3;
        this.maHT=this.HeThong[0].id;
        this.username=this.HeThong[0].tenHeThong;
       this.maketnoi=this.HeThong[0].maKetNoi;
       if(this.HeThong[0].ipHeThong!=undefined)
       {
        const tull=this.HeThong[0].ipHeThong;
        this.ipHeThong=String(tull);
       }else {
        const tull=this.HeThong[0].ipHeThong;
        this.ipHeThong=String(tull);
       }

    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });
  }
  capnhat()
  {
    if(confirm("Bạn có muốn cập nhật Hệ Thống không?"))
    {
      this.hethongservice.changesys(new HeThong(this.idHT,this.username,this.maketnoi,true,this.ipHeThong),localStorage.getItem("token")).subscribe(data=>{
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
          alert("Cập nhật Hệ Thống thành công!");
          this.datas2.changeMessageSYS(!this.exittable);
          this.datas2.changeMessageSYSID(this.idHT=0);
          this.maHT=0;
          this.username="";
          this.maketnoi="";
          this.ipHeThong="";
          this.sys.ngOnInit();
        }
    },error=>{
      alert("Cập nhật Hệ Thống Không thành công!");
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });
  }
  }
  makeid(dodai:number)
    {
    let text = "";
    const char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0; i < dodai; i++ )
    {  
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
    }
}
