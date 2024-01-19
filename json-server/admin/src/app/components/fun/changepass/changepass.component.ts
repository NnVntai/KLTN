import { Component, OnInit } from '@angular/core';
import { faTimesCircle,faCheck  } from '@fortawesome/free-solid-svg-icons';
import { NguoiDungService } from "../../../Service/nguoidung.module";
import { Router } from "@angular/router";
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
@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
  buttonc:boolean=false;
  passwordc:number=0;
  passwordoc:number=0;
  faTimesCircle=faTimesCircle;
  faCheck=faCheck;
  passwordac:number=0;
  password:string="";
  passwordo:string="";
  passworda:string="";
  constructor(private router:Router,private nguoidungservice:NguoiDungService) { }
  sss:any=/[^~!@#$%&*\[\]\{\}\<\>\^+=:,;?/\\]+$/;
  ngOnInit(): void {
  }
  checkbutton(buttonc:boolean)
  {
    if(this.passwordc==1&& this.passwordac==1&&this.passwordoc==1)
    {
      buttonc=false;
    }
    else{
      buttonc=true;
    }
    return buttonc;
  }
  checkerror(objectcheck:string, returncheck:number)
  {
    if(objectcheck!="")
    { 
      if(objectcheck.length>=5)
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
    }else{
      returncheck=2;
    }
    return returncheck;
  }
  checkpassagain(objectcheck:string,returncheck:number,returnpass:string)
  {
    if(objectcheck==returnpass)
    {
      returncheck=1;
    }else{
      returncheck=2;
    }
    return returncheck;
  }
  changepass()
  {
    if(confirm("bạn có muốn đổi mật khẩu")){
      let getid=JSON.parse( localStorage.getItem("User")||"")[0].id;
      const start = new Date(Date.now());
      this.nguoidungservice.checkpass(new NguoiQuanTri(getid,"","",this.passwordo,start,"","",0,0,true),localStorage.getItem("token")).subscribe(data=>{
        if(data.length>0)
        {
            this.nguoidungservice.changepassword(new NguoiQuanTri(getid,"","",this.password,start,"","",0,0,false),localStorage.getItem("token")).subscribe(data=>{
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
                alert("Thay đổi mật khẩu thành công!");
                this.router.navigate(['/']); 
                this.password="";
                this.passworda="";
                this.passwordo="";
              }
          },error=>{
            console.log('oops', error); 
            this.router.navigate(['error404']);
          });
        }else{
          alert("Nhập lại mật khẩu cũ không đúng");
          this.passwordoc=2;
          this.password="";
          this.passworda="";
          this.passwordo="";
        }
    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });
    }
  }
}
