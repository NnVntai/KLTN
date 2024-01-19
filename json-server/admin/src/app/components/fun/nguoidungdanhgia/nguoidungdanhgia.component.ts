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
  KieuDanhGia} from "../../../Object/CUSTOMERJOURNEYMAP ";
  import { DanhGiaService } from "../../../Service/danhgia.module";
  import { HeThongService } from "../../../Service/hethong.module";
  import { ChucNangService } from "../../../Service/chucnang.module";
  import { Router, TitleStrategy } from "@angular/router";
import { Datatalbemu } from "../../../Service/data.service";
import { faSort,faPlus,faTrash,faPencil,faFileExcel  } from '@fortawesome/free-solid-svg-icons';
import { ExcelService } from '../../../../excel-service';

@Component({
  selector: 'app-nguoidungdanhgia',
  templateUrl: './nguoidungdanhgia.component.html',
  styleUrls: ['./nguoidungdanhgia.component.css']
})
export class NguoidungdanhgiaComponent implements OnInit {

  chucnang:ChucNang[]=[];
  listnguoidung:NguoiDanhGia[]=[];
  nameHT:string="";
  listchucnang:number=0;
  faSort=faSort;faPlus=faPlus;faTrash=faTrash;faPencil=faPencil;
  faFileExcel=faFileExcel;
  sreach:any;
  maHT:number=0;
  idCN:number=0;
  p:number=1;
  key:string ='id';
  reverse:boolean=false;
  exittable: boolean=false;
  idFUNCTION:number=0;
  listfuntion:number[]=[];
  //excel
  data: any[] = [];
  columns: any[]=[];
  footerData: any[][] = [];
  totalSalesAmount = 0;
  sum:number[]=[];

  constructor(private router:Router,private datas:Datatalbemu,private danhgiaservice:DanhGiaService,
    private hethongservice:HeThongService,private chucnangservice:ChucNangService,private excelService:ExcelService) { 
    this.datas.currentMessageFUN.subscribe(message => this.exittable = message);
    this.datas.currentMessageFUNID.subscribe(message => this.idFUNCTION = message);
    this.datas.currentMessageSYSID.subscribe(message => this.maHT = message);
    
    if(localStorage.getItem("User"))
    {
      this.maHT=JSON.parse(localStorage.getItem("User")||"")[0].idHeThong;
      this.hethongservice.getinforsys(new HeThong(this.maHT,"",""),localStorage.getItem("token")).subscribe(data2=>{
                let check_token=data2 as unknown as {_token:number};
                if(check_token._token==12)
                {
                  alert("Phiên đăng nhập hết hạng vùi lòng đăng nhập lại");
                  localStorage.removeItem("token");
                  localStorage.removeItem("User");
                  this.router.navigate(['/login']);
                }
             let datar =data2[0] as unknown as {tenHeThong:string}
             this.nameHT=datar.tenHeThong;
      },error=>{
        console.log(error);
      })
   
    }
  }

  ngOnInit(): void {
    this.columns=[];
    this.data=[];
    this.footerData=[];
    this.sum=[];
    this.chucnangservice.getchucnang(new ChucNang(1,"","",this.maHT,false),localStorage.getItem("token")).subscribe(data2=>{
      for (let i = 0; i < data2?.length; i++) {
        this.listfuntion.push(data2[i].id);
      }   
      this.chucnang=data2;
      if(this.listchucnang!=0)
      {
        this.listfuntion=[];
        this.listfuntion.push(Number(this.listchucnang));
      }
     
      this.danhgiaservice.getnguoidungdanhgia(new NguoiDanhGia(0,"","",this.maHT),localStorage.getItem("token")).subscribe(data2=>{
            this.listnguoidung=data2;
        // console.log(data2);
          //   for (let z = 0; z < this.listnguoidung[0].DanhGia!.length; z++) {
       
          //     if(this.listnguoidung[0].[z].tenDanhGia=="")
          //     {
          //       this.columns.push('Nội Dung góp Ý Khác')
          //     }else{
          //       this.columns.push(this.Danhgia[0].chiTietDanhGia[z].tenDanhGia)
          //     }
          // } 
          for (let i = 0; i <  this.listnguoidung.length; i++) {
        
              this.data.push({
                STT:i+1,
                hoTen:this.listnguoidung[i].hoTen,
                ngayDanhGia:this.listnguoidung[i].maUser,
                tenChucNang:this.listnguoidung[i].DanhGia?.length+"/"+this.chucnang.length,
                
              });
          }

    this.footerData.push([' ', '', '','']);
},error=>{
  console.log('oops', error); 
  this.router.navigate(['error404']);
});
    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });    
    this.columns=['STT','Tên người đánh giá','Mã Người Dùng','Số Chức Năng Đã Đánh giá',]
 
  }
  Search()
  {
    if(this.sreach=="")
      {
        this.ngOnInit();
      }else{
        this.listnguoidung=this.listnguoidung.filter(res=>{
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
    this.listnguoidung.forEach(x => x.checked = ev.target.checked)
  }
  isAllCheckBoxChecked() {
    return this.listnguoidung.every(p => p.checked);
  }
  exportExcel() {
    this.excelService.exportAsExcelFile('Danh sách Người Đánh gia Hệ Thống '+this.nameHT, '', this.columns, this.data, this.footerData, 'sales-report', 'Sheet1');
  }
  deleteuser()
  {
    try {
      let a=0;
      if(confirm("bạn có chắc có muốn xóa không"))
      {
      for (let i = 0; i < this.listnguoidung.length; i++) {
      //   if(this.listnguoidung[i].checked==true)
      //   {
      //     this.danhgiaservice.deletedanhgia(new DanhGia(this.listnguoidung[i].id,new Date(),1,2,[]),localStorage.getItem("token")).subscribe(data=>{
      //       if(data==1)
      //       {
      //         this.ngOnInit();
      //       }
      // },error=>{
      //   console.log('oops', error); 
      //   this.router.navigate(['error404']);
      // });
      //   }
      }
      if(a>0)
      {alert("Xóa thành công");}
    }
    } catch (error) {
      alert(error);
    }
  }

}
