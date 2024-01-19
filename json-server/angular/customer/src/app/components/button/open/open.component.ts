import { Component, OnInit,
  ViewChild,
  ViewContainerRef,ComponentRef ,
  ComponentFactoryResolver,} from '@angular/core';
import {  DataCustomer } from "../../../service/data.module";
import { DanhGiaService } from "../../../service/DanhGia";
import { ChucNang,HeThong, NguoiDanhGia } from "../../../Object/CUSTOMERJOURNEYMAP";
import { ConnetDanhGia } from "../../../Object/config";
import { TableparentsComponent } from "../../table/tableparents/tableparents.component";
const md5 = require('md5');
@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements OnInit{
  @ViewChild('template', { read: ViewContainerRef ,static:true}) 
    opentable:boolean=false;
    ConnetDanhGia:ConnetDanhGia;
    idhethong:number=0;
    maketnoihethong:string="Aufwm3J03XOY4gHSDTWb";
    mauserketnoihethong:string="1";
    tennguoidung:string="Nguyen van a";
  constructor(private datatable:DataCustomer,private danhgiaservice:DanhGiaService, private templates: ViewContainerRef){
    this.datatable.currenttableCustomer.subscribe(message=>this.opentable=message);
    this.datatable.currentidhethong.subscribe(message=>this.idhethong=message);


  } 
  ngAfterViewInit() {
  }
  clickOpen()
  {
    this.datatable.currentconnet.subscribe(mess=>this.ConnetDanhGia=mess);
    this.maketnoihethong=this.ConnetDanhGia.MaHeThong||"";
    this.mauserketnoihethong=this.ConnetDanhGia.ManguoiDung||"";
    this.tennguoidung=this.ConnetDanhGia.TenNguoiDung||"";
    if(this.maketnoihethong!=""&&this.mauserketnoihethong!="")
    {
    this.danhgiaservice.getinforsys(new HeThong(0,"",true,this.maketnoihethong)).subscribe(data=>{
      if(data[0])
      { 
        this.idhethong=data[0].id;
        this.datatable.changeidhethong(this.idhethong);
        localStorage.setItem("sys",JSON.stringify(data));
        const component = this.templates.createComponent(TableparentsComponent);
        this.danhgiaservice.getthongtinnguoidanhgia(new NguoiDanhGia(0,"",this.mauserketnoihethong,this.idhethong)).subscribe(data=>{
        if(data[0])
        { 
          this.datatable.changetableCustomer(true);
          this.datatable.changeidnguoidung(data[0].id);
        }else{
          this.danhgiaservice.insertnguoidanhgia(new NguoiDanhGia(1,this.tennguoidung,this.mauserketnoihethong,this.idhethong)).subscribe(data=>{
          const datas=data as unknown as {maUser:string,id:number}
          if(datas.maUser)
          {
            this.datatable.changeidnguoidung(datas.id);
            this.datatable.changetableCustomer(true);
          }else
          {
            alert("mã user bị lỗi ");
            this.datatable.changetableCustomer(false);
          }
          })
        }
      },error=>{
          console.log('oops', error); 
      });
      }else{
        alert("vui lòng kiểm tra lại đường dẫn đến hệ thống");
        this.datatable.changetableCustomer(false);
      }
    },error=>{
      alert("vui lòng kiểm tra lại đường dẫn đến hệ thống");
      console.log('oops', error); 
    });
  }else{
    alert("vui lòng kiểm tra lại thông tin hệ thống");
  }
  }
  ngOnInit(): void {  
  }
}
