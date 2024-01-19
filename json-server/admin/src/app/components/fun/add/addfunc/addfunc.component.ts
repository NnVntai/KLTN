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
import { ChucNangService } from "../../../../Service/chucnang.module";
import { HeThongService } from "../../../../Service/hethong.module";
import { FuncComponent } from "../../func/func.component";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addfunc',
  templateUrl: './addfunc.component.html',
  styleUrls: ['./addfunc.component.css']
})
export class AddfuncComponent implements OnInit {
  countryForm!: FormGroup;
  //truyen bien mo the 
  // @Output()@Input() exittable: boolean |undefined;
  exittable:boolean=false;
  //khai bao bien 
  tenchucnang:string=""; 
  tenchucnangcheck="";
  //khai bao icon
  faTimesCircle=faTimesCircle;  faCheck=faCheck; faSpinner=faSpinner;
  //khai bao bien kiem tra 
  mucdichc:number=0;
  buttonc:boolean=true;
  tenchucnangc:number=0;
  mucdich:string="";
  // khoi tao mang vai tro va he thong
  maHT:number=0;
  ChucNang:ChucNang[]=[];
  HeThong:HeThong[]=[];
  //bien kiem tra ky tu dat biet 
  sss:any=/[^~!@#$%&*\[\]\{\}\<\>\^+=:,;?/\\]+$/;
  idFUNCTION:number=0;
  constructor(private router:Router, 
    private datas2: Datatalbemu,private sys:FuncComponent,private hethongservice:HeThongService,private chucnangservice:ChucNangService) { 
      this.datas2.currentMessageFUN.subscribe(message => this.exittable = message);
      this.datas2.currentMessageFUNID.subscribe(message => this.idFUNCTION = message);
      this.datas2.currentMessageSYSID.subscribe(message => this.maHT = message);
  }
  ngOnInit(): void {
  }
  outtable()
  {
    this.tenchucnang="";  this.mucdich=""; 
    this.datas2.changeMessageFUNID(this.idFUNCTION=0);
    this.datas2.changeMessageFUN(!this.exittable);
  }
  dangky()
  {
      if(confirm("Bạn có muốn thêm chức năng hay không?"))
      {
      this.chucnangservice.inserchucnang(new ChucNang(1,this.tenchucnang,this.mucdich,this.maHT),localStorage.getItem("token")).subscribe(data=>{
        let check_token=data as unknown as {_token:number};
          if(check_token._token==12)
          {
            alert("Phiên đăng nhập hết hạng vui lòng đăng nhập lại");
            localStorage.removeItem("token");
            localStorage.removeItem("User");
            this.router.navigate(['/login']);
          }
        if(data==1)
        {
          alert("Thêm chức năng thành công");
          this.datas2.changeMessageFUN(!this.exittable);
          this.datas2.changeMessageFUNID(this.idFUNCTION=0);
          this.tenchucnang="";
          this.mucdich="";
          this.sys.ngOnInit();
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
    if(this.tenchucnangc==1&&this.mucdichc==1)
    {
      buttonc=false;
    }
    else{
      buttonc=true;
    }
    return buttonc;
  }
  checkusername(objectcheck:string,maHT:number) 
  {
    if(objectcheck!=this.tenchucnangcheck)
    {
      this.chucnangservice.checkChucNang(new ChucNang(1,objectcheck,"",maHT),localStorage.getItem("token")).subscribe(data=>{
        if(data.length>0)
        {
          this.tenchucnangc=2;
        }
        let check_token=data as unknown as {_token:number};
        if(check_token._token==12)
        {
          alert("Phiên đăng nhập hết hạng vui lòng đăng nhập lại");
          localStorage.removeItem("token");
          localStorage.removeItem("User");
          this.router.navigate(['/login']);
        } 
      },error=>{
        console.log('oops', error); 
        this.router.navigate(['error404']);
      });
    }
  }
  update(idchucnang:number,idhethong:number)
  {
    this.chucnangservice.getinforchucnang(new ChucNang(this.idFUNCTION,"","",idhethong),localStorage.getItem("token")).subscribe(data3=>{
      let check_token=data3 as unknown as {_token:number};
          if(check_token._token==12)
          {
            alert("Phiên đăng nhập hết hạng vui lòng đăng nhập lại");
            localStorage.removeItem("token");
            localStorage.removeItem("User");
            this.router.navigate(['/login']);
          } 
          if(data3.length>0)
          {
            this.ChucNang=data3;
            this.tenchucnangcheck=this.ChucNang[0].tenChucNang
            this.tenchucnang=this.ChucNang[0].tenChucNang;
            this.mucdich=this.ChucNang[0].mucDich;
            this.maHT=this.ChucNang[0].idHeThong;
          }
      },error=>{
        console.log('oops', error); 
        this.router.navigate(['error404']);
      });
  }
  capnhat()
  {
    if(confirm("Bạn có muốn cập nhật thông tin không?"))
    {
      this.chucnangservice.updateChucNang(new ChucNang(this.idFUNCTION,this.tenchucnang,this.mucdich,this.maHT),localStorage.getItem("token")).subscribe(data=>{
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
          alert("Cập nhật chức năng thành công");
          this.datas2.changeMessageFUN(!this.exittable);
          this.datas2.changeMessageFUNID(this.idFUNCTION=0);
          this.tenchucnang="";
          this.mucdich="";
          this.sys.ngOnInit();
        }
    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });
  }
  }
}
