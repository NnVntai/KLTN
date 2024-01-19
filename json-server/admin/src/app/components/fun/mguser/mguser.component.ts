import { Component, OnInit, ViewChild } from '@angular/core';
import { NguoiDungService } from "../../../Service/nguoidung.module";
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
import { Router, TitleStrategy } from "@angular/router";
import { Datatalbemu } from "../../../Service/data.service";
import { faSort,faPlus,faTrash,faPencil  } from '@fortawesome/free-solid-svg-icons';
import { AddUserComponent } from "../add/add-user/add-user.component";


@Component({
  selector: 'app-mguser',
  templateUrl: './mguser.component.html',
  styleUrls: ['./mguser.component.css']
})
export class MguserComponent implements OnInit {
  @ViewChild(AddUserComponent) child:any ;
  userQT:NguoiQuanTri[]=[];
  faSort = faSort;
  faPlus=faPlus; 
  faTrash=faTrash;
  faPencil=faPencil;
  sreach:any;
  p:number=1;
  key:string ='id';
  reverse:boolean=false;
  exittable: boolean=false;
  iduser:number=0;

  constructor(private router:Router,private data2:Datatalbemu,private nguoidungservice:NguoiDungService) { 
    this.data2.currentMessage.subscribe(message => this.exittable = message);
    this.data2.currentMessageID.subscribe(message => this.iduser = message);
  }
  ngOnInit(): void {
      this.nguoidungservice.getUserVaiTro(localStorage.getItem("token")).subscribe(data=>{
            this.userQT=data;
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
        this.userQT=this.userQT.filter(res=>{
          return res.hoTen.toLocaleLowerCase().match(this.sreach.toLocaleLowerCase());
        })
      }
  }
  sort(key: string)
  {
    this.key=key;
    this.reverse=!this.reverse;
  }

    checkAllCheckBox(ev: any) { 
      this.userQT.forEach(x => x.checked = ev.target.checked)
    }
    isAllCheckBoxChecked() {
      return this.userQT.every(p => p.checked);
    }
    AddUser(exittable:boolean)
    {
      this.data2.changeMessage(exittable);
    }
    openupdate(ad:any)
    {
      this.data2.changeMessage(!this.exittable);
      this.data2.changeMessageID(ad);
       this.child.update(ad);
      // this.adduser.update();
    }
    deleteuser()
    {
     
      try {
        let a=0;
        if(confirm("Bạn có chắc có muốn xóa không?"))
        {
          const start = new Date(Date.now());
        for (let i = 0; i < this.userQT.length; i++) {
          
          if(this.userQT[i].checked==true)
          {
            this.nguoidungservice.deleteuser(new NguoiQuanTri(this.userQT[i].id,"","","",start,"","",0,0,true),localStorage.getItem("token")).subscribe(data=>{
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
