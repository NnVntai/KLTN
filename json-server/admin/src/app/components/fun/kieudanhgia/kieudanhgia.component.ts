import { Component, OnInit, ViewChild } from '@angular/core';

import { 
  Login,
  NguoiDanhGia,
  NguoiQuanTri,
  VaiTro,
  HeThong,
  DanhGia,
  ChiTietDanhGia,
  ChucNang,
  KieuDanhGia,NoiDungDanhGia} from "../../../Object/CUSTOMERJOURNEYMAP ";
import { Router } from "@angular/router";
import { Datatalbemu } from "../../../Service/data.service";
import { AddKieudanhgiaComponent  } from "../add/add-kieudanhgia/add-kieudanhgia.component";
import { faSort,faPlus,faTrash,faPencil  } from '@fortawesome/free-solid-svg-icons';
import { KieuDanhGiaService } from "../../../Service/kieudanhgia.module";

@Component({
  selector: 'app-kieudanhgia',
  templateUrl: './kieudanhgia.component.html',
  styleUrls: ['./kieudanhgia.component.css']
})
export class KieudanhgiaComponent implements OnInit {
  @ViewChild(AddKieudanhgiaComponent) child:any ;
  KieuDanhGia:KieuDanhGia[]=[];
  faSort = faSort; faPlus=faPlus; faTrash=faTrash;faPencil=faPencil;
  sreach:any;
  p:number=1;
  key:string ='id';
  reverse:boolean=false;
  exittable: boolean=false;
  constructor(private router:Router,private data2:Datatalbemu,private kieudanhgiaservice:KieuDanhGiaService) { 
    this.data2.currentKieuDanhGiaOpen.subscribe(message => this.exittable = message);
  }
  ngOnInit(): void {
      this.kieudanhgiaservice.getkieudanhgia(localStorage.getItem("token")).subscribe(data=>{
            this.KieuDanhGia=data;
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
   }
   Search()
   {
       if(this.sreach=="")
       {
         this.ngOnInit();
       }else{
         this.KieuDanhGia=this.KieuDanhGia.filter(res=>{
           return res.tenKieuDanhGia.toLocaleLowerCase().match(this.sreach.toLocaleLowerCase());
         })
       }
   }
  sort(key: string)
  {
    this.key=key;
    this.reverse=!this.reverse;
  }
    checkAllCheckBox(ev: any) { 
      this.KieuDanhGia.forEach(x => x.checked = ev.target.checked)
    }
    isAllCheckBoxChecked() {
      return this.KieuDanhGia.every(p => p.checked);
    }
    addKieuDanhGia(exittable:boolean)
    {
      this.data2.changeKieuDanhGiaOpen(exittable);
    }
    openupdate(ad:any)
    {
      this.data2.changeKieuDanhGiaOpen(!this.exittable);
      this.data2.changeIdKieuDanhGia(ad);
       this.child.update(ad);
    }
    deleteKieuDanhGia()
    {
      try {
        let a=0;
        if(confirm("Bạn có chắc có muốn xóa không?"))
        {
        for (let i = 0; i < this.KieuDanhGia.length; i++) {
          if(this.KieuDanhGia[i].checked==true)
          {
            this.kieudanhgiaservice.deletekieudanhgia(new KieuDanhGia(this.KieuDanhGia[i].id,''),localStorage.getItem("token")).subscribe(data=>{
              if(data==1)
              {
                this.ngOnInit();
              }
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
