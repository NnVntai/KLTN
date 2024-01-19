import { Component, OnInit, ViewChild } from '@angular/core';
import { HeThongService } from "../../../Service/hethong.module";
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
import { AddnoidungdanhgiaComponent  } from "../add/addnoidungdanhgia/addnoidungdanhgia.component";
import { faSort,faPlus,faTrash,faPencil  } from '@fortawesome/free-solid-svg-icons';
import { NoiDungDanhGiaService } from "../../../Service/noidungdanhgia.module";

@Component({
  selector: 'app-noidungdanhgia',
  templateUrl: './noidungdanhgia.component.html',
  styleUrls: ['./noidungdanhgia.component.css']
})
export class NoidungdanhgiaComponent implements OnInit {
@ViewChild(AddnoidungdanhgiaComponent) child:any ;
  noidungdanhgia:NoiDungDanhGia[]=[];
  faSort = faSort;
  faPlus=faPlus; 
  faTrash=faTrash;
  nameHT:string="";
  faPencil=faPencil;
  sreach:any;
  p:number=1;
  key:string ='id';
  reverse:boolean=false;
  exittable: boolean=false;
  idhethong:number=0;
  constructor(private router:Router,private data2:Datatalbemu,private noidungdanhgiaservice:NoiDungDanhGiaService
    ,private hethongservice:HeThongService) { 
    this.data2.currentMessageNoiDungDG.subscribe(message => this.exittable = message);
    this.data2.currentMessageSYSID.subscribe(idhethong=>this.idhethong=idhethong);
    if(localStorage.getItem("User"))
    {
      this.hethongservice.getinforsys(new HeThong(JSON.parse(localStorage.getItem("User")||"")[0].idHeThong,"",""),localStorage.getItem("token")).subscribe(data=>{
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
      this.noidungdanhgiaservice.getnoidungdanhgia(new NoiDungDanhGia(0,0,JSON.parse(localStorage.getItem('User')||"")[0].idHeThong,0,""),localStorage.getItem("token")).subscribe(data=>{
            this.noidungdanhgia=data;
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
         this.noidungdanhgia=this.noidungdanhgia.filter(res=>{
           return res.tenDanhGia.toLocaleLowerCase().match(this.sreach.toLocaleLowerCase());
         })
       }
   }
  sort(key: string)
  {
    this.key=key;
    this.reverse=!this.reverse;
  }
    checkAllCheckBox(ev: any) { 
      this.noidungdanhgia.forEach(x => x.checked = ev.target.checked)
    }
    isAllCheckBoxChecked() {
      return this.noidungdanhgia.every(p => p.checked);
    }
    AddNoiDung(exittable:boolean)
    {
      this.data2.changeMessageNoiDungDG(exittable);
    }
    openupdate(ad:any)
    {
      this.data2.changeMessageNoiDungDG(!this.exittable);
      this.data2.changeMessageNoiDungDGiD(ad);
       this.child.update(ad,JSON.parse(localStorage.getItem('User')||"")[0].idHeThong);
    }
    deleteNoiDung()
    {
      try {
        let a=0;
        if(confirm("Bạn có chắc có muốn xóa không?"))
        {
        for (let i = 0; i < this.noidungdanhgia.length; i++) {
          if(this.noidungdanhgia[i].checked==true)
          {
            this.noidungdanhgiaservice.deletenoidungdanhgia(new NoiDungDanhGia(this.noidungdanhgia[i].id,0,0,0,""),localStorage.getItem("token")).subscribe(data=>{
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
