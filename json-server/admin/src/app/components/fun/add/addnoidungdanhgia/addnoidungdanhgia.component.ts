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
  KieuDanhGia,
  NoiDungDanhGia} from "../../../../Object/CUSTOMERJOURNEYMAP ";
import { Router  } from "@angular/router";
import {  Datatalbemu } from "../../../../Service/data.service";
import { NoiDungDanhGiaService } from "../../../../Service/noidungdanhgia.module";
import {  NoidungdanhgiaComponent} from "../../noidungdanhgia/noidungdanhgia.component";
import { KieuDanhGiaService  } from "../../../../Service/kieudanhgia.module";
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-addnoidungdanhgia',
  templateUrl: './addnoidungdanhgia.component.html',
  styleUrls: ['./addnoidungdanhgia.component.css']
})
export class AddnoidungdanhgiaComponent implements OnInit {
  countryForm!: FormGroup;
  //truyen bien mo the 
  // @Output()@Input() exittable: boolean |undefined;
  exittable:boolean=false;
  //khai bao bien 
  mucdouutien:number=0;
  idkieudanhgia:number=0;  
  mucdouutienc:number=0;
  kieudanhgiac:number=0;
  tendanhgia:string="";
  tendanhgiac:number=0;

  //khai bao icon
  faTimesCircle=faTimesCircle;  faCheck=faCheck; faSpinner=faSpinner;
  //khai bao bien kiem tra 
  buttonc:boolean=true;
  // khoi tao mang vai tro va he thong
  maHT:number=0;
  kieuDanhGia:KieuDanhGia[]=[];
  HeThong:HeThong[]=[];
  KieuDanhGia:KieuDanhGia[]=[];

  //bien kiem tra ky tu dat biet 
  sss:any=/[^~!@#$%&*\[\]\{\}\<\>\^+=:,;?/\\]+$/;
  idNoiDungDanhGia:number=0;
  constructor(private router:Router, 
    private datas2: Datatalbemu,private sys:NoidungdanhgiaComponent,private kieudanhgiaservice:KieuDanhGiaService,private noidungdanhgiaservice:NoiDungDanhGiaService) { 
      this.datas2.currentMessageNoiDungDG.subscribe(message => this.exittable = message);
      this.datas2.currentMessageNoiDungDGiD.subscribe(message => this.idNoiDungDanhGia = message);
      this.maHT=JSON.parse(localStorage.getItem('User')||"")[0].idHeThong;
   
  }
  ngOnInit(): void {
    this.kieudanhgiaservice.getkieudanhgia(localStorage.getItem("token")).subscribe(data=>{

      let check_token=data as unknown as {_token:number};

        if(check_token._token==12)
        {
          alert("Phiên đăng nhập hết hạng vui lòng đăng nhập lại");
          localStorage.removeItem("token");
          localStorage.removeItem("User");
          this.router.navigate(['/login']);
        }
        if(data!=undefined)
        {
         
          this.KieuDanhGia=data;
        }
    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });
  }
  outtable()  
  {
    this.idkieudanhgia=0;
    this.mucdouutien=0;
    this.datas2.changeMessageNoiDungDGiD(this.idNoiDungDanhGia=0);
    this.datas2.changeMessageNoiDungDG(!this.exittable);
    this.tendanhgia="";
  }
  dangky()
  {
      if(confirm("Bạn có muốn thêm nội dung hay không?"))
      {
      this.noidungdanhgiaservice.insertnoidungdanhgia(new NoiDungDanhGia(0,this.mucdouutien,JSON.parse(localStorage.getItem('User')||"")[0].idHeThong,this.idkieudanhgia,this.tendanhgia),localStorage.getItem("token")).subscribe(data=>{
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
          alert("Thêm nội dung đánh giá thành công");
          this.datas2.changeMessageNoiDungDGiD(this.idNoiDungDanhGia=0);
          this.datas2.changeMessageNoiDungDG(!this.exittable);
          this.idkieudanhgia=0;
          this.mucdouutien=0;
          this.sys.ngOnInit();
        }
      },error=>{
        console.log('oops', error); 
        this.router.navigate(['error404']);
      });
     }
      
  }
  checkerrors(objectcheck:string, returncheck:number)
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
  checkerror(objectcheck:number, returncheck:number)
  {
    if(objectcheck!=0||objectcheck!=undefined)
    { 
         
                  if(this.sss.test(objectcheck))
                  {
                    returncheck=1;
                  }else {
                    returncheck=2;
               
                  }    
        }
    return returncheck;
  }
  checkbutton(buttonc:boolean)
  {
    if(this.mucdouutienc==1&&this.kieudanhgiac==1)
    {
      buttonc=false;
    }
    else{
      buttonc=true;
    }
    return buttonc;
  }
  update(idnoidungdanhgia:number,idhethong:number)
  {
    
    this.noidungdanhgiaservice.getinfornoidungdanhgia(new NoiDungDanhGia(idnoidungdanhgia,0,idhethong,0,""),localStorage.getItem("token")).subscribe(data3=>{
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
           this.mucdouutien=data3[0].mucDoUuTien;
           this.idkieudanhgia=data3[0].idKieuDanhGia;
           this.tendanhgia=data3[0].tenDanhGia;
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
      this.noidungdanhgiaservice.updatenoidungdanhgia(new NoiDungDanhGia(this.idNoiDungDanhGia,this.mucdouutien
        ,JSON.parse(localStorage.getItem('User')||"")[0].idHeThong,this.idkieudanhgia,this.tendanhgia),localStorage.getItem("token")).subscribe(data=>{
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
          alert("Cập nhật nội dung đánh giá thành công");
          this.datas2.changeMessageNoiDungDGiD(this.idNoiDungDanhGia=0);
          this.datas2.changeMessageNoiDungDG(!this.exittable);
          this.idkieudanhgia=0;
          this.mucdouutien=0;
          this.tendanhgia="";
          this.sys.ngOnInit();
        }
    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });
  }
  }

}
