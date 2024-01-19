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
import { VaitroComponent } from "../../vaitro/vaitro.component";
import { VaiTroService  } from "../../../../Service/vaitro.model";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-vaitro',
  templateUrl: './add-vaitro.component.html',
  styleUrls: ['./add-vaitro.component.css']
})
export class AddVaitroComponent implements OnInit {
  countryForm!: FormGroup;
  //truyen bien mo the 
  // @Output()@Input() exittable: boolean |undefined;
  exittable:boolean=false;
  //khai bao bien 
  tenVaiTro:string='';
  tenVaiTroc:number=0;

  //khai bao icon
  faTimesCircle=faTimesCircle;  faCheck=faCheck; faSpinner=faSpinner;
  //khai bao bien kiem tra 
  buttonc:boolean=true;

  VaiTro:VaiTro[]=[];
  //bien kiem tra ky tu dat biet 
  sss:any=/[^~!@#$%&*\[\]\{\}\<\>\^+=:,;?/\\]+$/;
  idVaiTro:number=0;
  constructor(private router:Router, 
    private datas2: Datatalbemu,private sys:VaitroComponent,
    private vaitroservice:VaiTroService) { 
      this.datas2.currentVaiTroOpen.subscribe(message => this.exittable = message);
      this.datas2.currentIdVaiTro.subscribe(message => this.idVaiTro = message);
  }
  ngOnInit(): void {
  }
  outtable()  
  {
    this.datas2.changeIdVaiTro(this.idVaiTro=0);
    this.datas2.changeVaiTroOpen(!this.exittable);
    this.tenVaiTro="";
  }
  dangky()
  {
      if(confirm("Bạn có muốn thêm Vai trò mới hay không?"))
      {
      this.vaitroservice.insertVaiTro(new VaiTro(0,this.tenVaiTro),localStorage.getItem("token")).subscribe(data=>{
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
          alert("Thêm Vai trò thành công");
          this.datas2.changeIdVaiTro(this.idVaiTro=0);
          this.datas2.changeVaiTroOpen(!this.exittable);
          this.tenVaiTro="";
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
    if(this.tenVaiTroc==1)
    {
      buttonc=false;
    }
    else{
      buttonc=true;
    }
    return buttonc;
  }
  update(idvaitro:number)
  {
    this.vaitroservice.getVaiTroId(new VaiTro(idvaitro,''),localStorage.getItem("token")).subscribe(data3=>{
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
           this.tenVaiTro=data3[0].tenVaiTro;
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
      this.vaitroservice.updateVaiTro(new VaiTro(this.idVaiTro,this.tenVaiTro),localStorage.getItem("token")).subscribe(data=>{
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
          alert("Cập nhật Vai trò thành công");
          this.datas2.changeIdVaiTro(this.idVaiTro=0);
          this.datas2.changeVaiTroOpen(!this.exittable);
          this.tenVaiTro="";
          this.sys.ngOnInit();
        }
    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });
  }
  }

}
