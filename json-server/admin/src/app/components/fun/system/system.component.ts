import { Component, OnInit, ViewChild } from '@angular/core';
import { Datatalbemu } from "../../../Service/data.service";
import { faSort,faPlus,faTrash,faPencil  } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from "../../../Service/login.module";
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
  import { HeThongService } from "../../../Service/hethong.module";
import { AddsysComponent } from "../add/addsys/addsys.component";
import { Router } from "@angular/router";
@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  @ViewChild(AddsysComponent) child:any ;
  Hethong:HeThong[]=[];
  faSort = faSort;
  faPlus=faPlus;
  faTrash=faTrash;
  faPencil=faPencil;
  sreach:any;
  p:number=1;
  key:string ='id';
  reverse:boolean=false;
  exittable: boolean=false;
  idHT:number=0;
  constructor(private router:Router,private data2:Datatalbemu,private hethongservice:HeThongService) { 
    this.data2.currentMessageSYS.subscribe(message => this.exittable = message);
    this.data2.currentMessageSYSID.subscribe(message => this.idHT = message);
  }
  ngOnInit(): void {
    this.hethongservice.getHeThong(localStorage.getItem("token")).subscribe(data=>{
      this.Hethong=data;
},error=>{
  console.log('oops', error); 
  this.router.navigateByUrl('/');
});
  }
  Search()
  {
      if(this.sreach=="")
      {
        this.ngOnInit();
      }else{
        this.Hethong=this.Hethong.filter(res=>{
          return res.tenHeThong.toLocaleLowerCase().match(this.sreach.toLocaleLowerCase());
        })
      }
  }
  sort(key: string)
  {
    this.key=key;
    this.reverse=!this.reverse;
  }

    checkAllCheckBox(ev: any) { 
      this.Hethong.forEach(x => x.checked = ev.target.checked)
    }
    isAllCheckBoxChecked() {
      return this.Hethong.every(p => p.checked);
    }
    Addsys(exittable:boolean)
    {
      console.log(exittable);
      this.data2.changeMessageSYS(exittable);
      
    }
    openupdate(ad:any)
    {
      this.data2.changeMessageSYS(!this.exittable);
      this.data2.changeMessageSYSID(ad);
       this.child.update(ad);
      // this.adduser.update();
    }
    deletesys()
    {
      try {
        let a=0;
        if(confirm("bạn có chắc muốn xóa không"))
        {
                for (let i = 0; i < this.Hethong.length; i++) {
          if(this.Hethong[i].checked==true)
          {
            this.hethongservice.deletesys(new HeThong(this.Hethong[i].id,this.Hethong[i].tenHeThong,this.Hethong[i].maKetNoi),localStorage.getItem("token")).subscribe(data=>{
              if(data==1)
              {
                a++;
                this.ngOnInit();
              }
        },error=>{
          console.log('oops', error); 
          this.router.navigate(['error404']);
        });
          }
        }if(a>0)
        {
          alert("Xóa thành công");
        }}
      } catch (error) {
        alert(error);
      }
   
    }

}
