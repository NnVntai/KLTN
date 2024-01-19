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
  selector: 'app-danhgia',
  templateUrl: './danhgia.component.html',
  styleUrls: ['./danhgia.component.css']
})
export class DanhgiaComponent implements OnInit {
  // @ViewChild() child:any ;
  chucnang:ChucNang[]=[];
  Danhgia:DanhGia[]=[];
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
     
      this.danhgiaservice.getdanhgiadmin(new ChucNang(0,"","",1,false,this.listfuntion),localStorage.getItem("token")).subscribe(data2=>{
            this.Danhgia=data2;

            for (let z = 0; z < this.Danhgia[0].chiTietDanhGia?.length; z++) {
       
              if(this.Danhgia[0].chiTietDanhGia[z].tenDanhGia=="")
              {
                this.columns.push('Nội Dung góp Ý Khác')
              }else{
                this.columns.push(this.Danhgia[0].chiTietDanhGia[z].tenDanhGia)
              }
          } 
          for (let i = 0; i <  this.Danhgia.length; i++) {
        
              this.data.push({
                STT:i+1,
                hoTen:this.Danhgia[i].nguoiDanhGia![0].hoTen,
                ngayDanhGia:this.Danhgia[i].ngayDanhGia,
                tenChucNang:this.Danhgia[i].chucNang![0].tenChucNang,
                
              });
              for (let s = 0; s < this.Danhgia[i].chiTietDanhGia.length; s++) {
                this.data[i][this.Danhgia[i].chiTietDanhGia[s].tenDanhGia] = this.Danhgia[i].chiTietDanhGia[s].ketQuaDanhGia;
                if(this.sum[this.Danhgia[i].chiTietDanhGia[s].id]==undefined)
                {
                  this.sum[this.Danhgia[i].chiTietDanhGia[s].id]=Number(this.Danhgia[i].chiTietDanhGia[s].ketQuaDanhGia);
                }else{
                  this.sum[this.Danhgia[i].chiTietDanhGia[s].id]= (this.sum[this.Danhgia[i].chiTietDanhGia[s].id]+ Number(this.Danhgia[i].chiTietDanhGia[s].ketQuaDanhGia))/2
              } }

          }

    this.footerData.push(['Total', '', '','']);
    for (let s = 0; s < this.Danhgia[0].chiTietDanhGia.length; s++) {
        this.footerData[0].push(this.sum[s]);
    }
    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });
    },error=>{
      console.log('oops', error); 
      this.router.navigate(['error404']);
    });    
    this.columns=['STT','Tên người đánh giá','Ngày Đánh giá','Tên chức năng']
 
  }
  Search(eg:any)
  {
    this.ngOnInit();
  }
  sort(key: string)
  {
    this.key=key;
    this.reverse=!this.reverse;
  }
  checkAllCheckBox(ev: any) { 
    this.Danhgia.forEach(x => x.checked = ev.target.checked)
  }
  isAllCheckBoxChecked() {
    return this.Danhgia.every(p => p.checked);
  }
  exportExcel() {
    this.excelService.exportAsExcelFile('Danh sách Dánh Giá Hệ Thống '+this.nameHT, '', this.columns, this.data, this.footerData, 'sales-report', 'Sheet1');
  }
  deleteuser()
  {
    try {
      let a=0;
      if(confirm("bạn có chắc có muốn xóa không"))
      {
      for (let i = 0; i < this.Danhgia.length; i++) {
        if(this.Danhgia[i].checked==true)
        {
          this.danhgiaservice.deletedanhgia(new DanhGia(this.Danhgia[i].id,new Date(),1,2,[]),localStorage.getItem("token")).subscribe(data=>{
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
