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
import { AddVaitroComponent  } from "../add/add-vaitro/add-vaitro.component";
import { faSort,faPlus,faTrash,faPencil  } from '@fortawesome/free-solid-svg-icons';
import { VaiTroService } from "../../../Service/vaitro.model";

@Component({
  selector: 'app-vaitro',
  templateUrl: './vaitro.component.html',
  styleUrls: ['./vaitro.component.css']
})
export class VaitroComponent implements OnInit {
  @ViewChild(AddVaitroComponent) child:any ;
  VaiTro:VaiTro[]=[];
  faSort = faSort;
  faPlus=faPlus; 
  faTrash=faTrash;
  faPencil=faPencil;
  sreach:any;
  p:number=1;
  key:string ='id';
  reverse:boolean=false;
  exittable: boolean=false;
  constructor(private router:Router,private data2:Datatalbemu,private vaitroservice:VaiTroService) { 
    this.data2.currentVaiTroOpen.subscribe(message => this.exittable = message);
  }
  ngOnInit(): void {
      this.vaitroservice.getVaiTro(localStorage.getItem("token")).subscribe(data=>{
            this.VaiTro=data;
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
         this.VaiTro=this.VaiTro.filter(res=>{
           return res.tenVaiTro.toLocaleLowerCase().match(this.sreach.toLocaleLowerCase());
         })
       }
   }
  sort(key: string)
  {
    this.key=key;
    this.reverse=!this.reverse;
  }
    checkAllCheckBox(ev: any) { 
      this.VaiTro.forEach(x => x.checked = ev.target.checked)
    }
    isAllCheckBoxChecked() {
      return this.VaiTro.every(p => p.checked);
    }
    addVaiTro(exittable:boolean)
    {
      this.data2.changeVaiTroOpen(exittable);
    }
    openupdate(ad:any)
    {
      this.data2.changeVaiTroOpen(!this.exittable);
      this.data2.changeIdVaiTro(ad);
       this.child.update(ad);
    }
    deleteVaiTro()
    {
      try {
        let a=0;
        if(confirm("Bạn có chắc có muốn xóa không?"))
        {
        for (let i = 0; i < this.VaiTro.length; i++) {
          if(this.VaiTro[i].checked==true)
          {
            this.vaitroservice.deleteVaiTro(new VaiTro(this.VaiTro[i].id,''),localStorage.getItem("token")).subscribe(data=>{
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
