import { Component, OnInit, ViewChild } from '@angular/core';
import { HeThongService } from "../../../Service/hethong.module";
import { ChucNangService } from "../../../Service/chucnang.module";
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
import { Router } from "@angular/router";
import { Datatalbemu } from "../../../Service/data.service";
import { faSort,faPlus,faTrash,faPencil  } from '@fortawesome/free-solid-svg-icons';
import { AddfuncComponent } from '../add/addfunc/addfunc.component';
import { throwToolbarMixedModesError } from '@angular/material';


@Component({
  selector: 'app-func',
  templateUrl: './func.component.html',
  styleUrls: ['./func.component.css']
})
export class FuncComponent implements OnInit {
  @ViewChild(AddfuncComponent) child:any ;
  ChucNang:ChucNang[]=[];
  nameHT:string="";
  faSort=faSort;
  faPlus=faPlus;
  faTrash=faTrash;
  faPencil=faPencil;
  sreach:any;
  maHT:number=0;
  idCN:number=0;
  p:number=1;
  key:string ='id';
  reverse:boolean=false;
  exittable: boolean=false;
  idFUNCTION:number=0;
  constructor(private datas:Datatalbemu,private router:Router,private chucnangservice:ChucNangService, private hethongservice:HeThongService) { 
    this.datas.currentMessageFUN.subscribe(message => this.exittable = message);
    this.datas.currentMessageFUNID.subscribe(message => this.idFUNCTION = message);
    this.datas.currentMessageSYSID.subscribe(message => this.maHT = message);
    if(localStorage.getItem("User"))
    {
      this.maHT=JSON.parse(localStorage.getItem("User")||"")[0].idHeThong;
      this.hethongservice.getinforsys(new HeThong(this.maHT,"",""),localStorage.getItem("token")).subscribe(data=>{
                let check_token=data as unknown as {_token:number};
                if(check_token._token==12)
                {
                  alert("Phiên đăng nhập hết hạng vùi lòng đăng nhập lại");
                  localStorage.removeItem("token");
                  localStorage.removeItem("User");
                  this.router.navigate(['/login']);
                }
             let datar =data[0] as unknown as {tenHeThong:string}
             this.nameHT=datar.tenHeThong;
      })
    }
  }
  ngOnInit(): void {
    this.chucnangservice.getchucnang(new ChucNang(1,"","",this.maHT,true),localStorage.getItem("token")).subscribe(data=>{

         let check_token=data as unknown as {_token:number};
          if(check_token._token==12)
          {
            localStorage.removeItem("token");
            localStorage.removeItem("User");
            this.router.navigate(['/login']);
          }
    this.ChucNang=data;
},error=>{
  console.log('oops', error); 
  this.router.navigate(['error404']);
});
  }
  Search()
  {
      if(this.sreach=="")
      {
        this.ngOnInit();
      }else{
        this.ChucNang=this.ChucNang.filter(res=>{
          return res.tenChucNang.toLocaleLowerCase().match(this.sreach.toLocaleLowerCase());
        })
      }
  }
  sort(key: string)
  {
    this.key=key;
    this.reverse=!this.reverse;
  }
  checkAllCheckBox(ev: any) { 
    this.ChucNang.forEach(x => x.checked = ev.target.checked)
  }
  isAllCheckBoxChecked() {
    return this.ChucNang.every(p => p.checked);
  }
  AddFUN(exittable:boolean)
  {
    this.datas.changeMessageFUN(exittable);
    this.datas.changeMessageSYSID(this.maHT);
  }
  openupdate(ad:any)
  {
    this.datas.changeMessageFUN(!this.exittable);
    this.datas.changeMessageFUNID(ad);
    this.datas.changeMessageSYSID(this.maHT);
    this.child.update(ad,this.maHT);
  }
  deleteFUN()
  {
    try {
      let a=0;
      if(confirm("bạn có chắc có muốn xóa không"))
      {
      for (let i = 0; i < this.ChucNang.length; i++) {
        if(this.ChucNang[i].checked==true)
        {
          this.chucnangservice.deletechucnang(new ChucNang(this.ChucNang[i].id,"","",this.maHT,false),localStorage.getItem("token")).subscribe(data=>{
            if(data==1)
            {
              this.ngOnInit();
            }
      },error=>{
        console.log('oops', error); 
        this.router.navigate(['error404']);
      });
        }
      }
      if(a>0)
      {alert("Xóa thành công");}
    }
    } catch (error) {
      alert(error);
    }
  }
}
