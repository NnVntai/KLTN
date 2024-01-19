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
import { KieudanhgiaComponent } from "../../kieudanhgia/kieudanhgia.component";
import { KieuDanhGiaService  } from "../../../../Service/kieudanhgia.module";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-kieudanhgia',
  templateUrl: './add-kieudanhgia.component.html',
  styleUrls: ['./add-kieudanhgia.component.css']
})
export class AddKieudanhgiaComponent implements OnInit {
  countryForm!: FormGroup;
  //truyen bien mo the 
  // @Output()@Input() exittable: boolean |undefined;
  exittable:boolean=false;
  //khai bao bien 
  tenKieuDanhGia:string='';
  tenKieuDanhGiac:number=0;

  //khai bao icon
  faTimesCircle=faTimesCircle;  faCheck=faCheck; faSpinner=faSpinner;
  //khai bao bien kiem tra 
  buttonc:boolean=true;
  KieuDanhGia:KieuDanhGia[]=[];
  //bien kiem tra ky tu dat biet 
  sss:any=/[^~!@#$%&*\[\]\{\}\<\>\^+=:,;?/\\]+$/;
  idKieuDanhGia:number=0;
  constructor(private router:Router, 
    private datas2: Datatalbemu,private sys:KieudanhgiaComponent,
    private kieudanhgiaservice:KieuDanhGiaService) { 
      this.datas2.currentKieuDanhGiaOpen.subscribe(message => this.exittable = message);
      this.datas2.currentIdKieuDanhGia.subscribe(message => this.idKieuDanhGia = message);
  }
  ngOnInit(): void {
  }
  outtable()  
  {
    this.datas2.changeIdKieuDanhGia(this.idKieuDanhGia=0);
    this.datas2.changeKieuDanhGiaOpen(!this.exittable);
    this.tenKieuDanhGia="";
  }
  dangky()
  {
      if(confirm("Bạn có muốn thêm Kiểu Đánh Giá mới hay không?"))
      {
      this.kieudanhgiaservice.insertkieudanhgia(new KieuDanhGia(0,this.tenKieuDanhGia),localStorage.getItem("token")).subscribe(data=>{
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
          alert("Thêm Kiểu Đánh Giá thành công");
          this.datas2.changeIdKieuDanhGia(this.idKieuDanhGia=0);
          this.datas2.changeKieuDanhGiaOpen(!this.exittable);
          this.tenKieuDanhGia="";
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
  checkbutton(buttonc:boolean)
  {
    if(this.tenKieuDanhGiac==1)
    {
      buttonc=false;
    }
    else{
      buttonc=true;
    }
    return buttonc;
  }
  update(idKieuDanhGia:number)
  {
    this.kieudanhgiaservice.getinforkieudanhgia(new KieuDanhGia(idKieuDanhGia,''),localStorage.getItem("token")).subscribe(data3=>{
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
           this.tenKieuDanhGia=data3[0].tenKieuDanhGia;
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
      this.kieudanhgiaservice.updatekieudanhgia(new KieuDanhGia(this.idKieuDanhGia,this.tenKieuDanhGia),localStorage.getItem("token")).subscribe(data=>{
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
          alert("Cập nhật Kiểu Đánh Giá thành công");
          this.datas2.changeIdKieuDanhGia(this.idKieuDanhGia=0);
          this.datas2.changeKieuDanhGiaOpen(!this.exittable);
          this.tenKieuDanhGia="";
          this.sys.ngOnInit();
        }
    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });
  }
  }
}
