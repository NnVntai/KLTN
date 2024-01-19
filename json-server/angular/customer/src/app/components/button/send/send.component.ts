import { Component, Input, Output, ViewChild } from '@angular/core';
import { DataCustomer } from "../../../service/data.module";
import { TablechildComponent } from "../../table/tablechild/tablechild.component";
import { DanhGiaService } from "../../../service/DanhGia";
import { Danhgia } from 'src/app/Object/CUSTOMERJOURNEYMAP';
import { ListfunComponent } from "../../slider/listfun/listfun.component";
@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent {
  @ViewChild(TablechildComponent) parents:any;
  @Input()  iddanhgia:number;
  guiudanhgia:any[]; 
  guidanhgias:any[]=[];
  idchucnang:number;
  idnguoidung:number;
  txtsend:string;
  sendup:boolean;
  constructor(private datas:DataCustomer,private tablechild:TablechildComponent,private danhgiaserve:DanhGiaService,private listdanhgia:ListfunComponent)
  {
    this.datas.currentidanhgia.subscribe(datas=>this.iddanhgia=datas);
    this.datas.sendtable.subscribe(data=>this.sendup=data);
    if(this.sendup)
    {
      this.txtsend="Cập nhật đánh giá";
    }else{
      this.txtsend="Gửi đánh giá";
    }
    this.datas.currentidchucnang.subscribe(idchucnang=>this.idchucnang=idchucnang);
    this.datas.currentidnguoidung.subscribe(idnguoidung=>this.idnguoidung=idnguoidung);
  }
  send(){
    if(this.tablechild.notdanhgia())
    {
      
      this.guiudanhgia= this.tablechild.getdanhgia();
      for (let k = 0; k < this.guiudanhgia.length; k++) {
        this.guidanhgias.push({
          id:k,
          tenDanhGia:this.guiudanhgia[k].instance.tenDanhGia,
          ketQuaDanhGia:this.guiudanhgia[k].instance.ketQuaDanhGia,
          idKieuDanhGia:this.guiudanhgia[k].instance.idKieuDanhGia,
        },)    
      }
      if(confirm("Bạn có muốn lưu đánh giá không?"))
      {
        if(this.sendup==true)
        {
          // console.log(this.iddanhgia);
          this.danhgiaserve.capnhatdanhgianguoidung(new Danhgia(this.iddanhgia,new Date(),this.idnguoidung,this.idchucnang,this.guidanhgias)).subscribe(data=>{
            if(data==1)
            {
              alert("Cập nhật đánh giá thành công!");
              this.tablechild.closetable();
              this.listdanhgia.ngOnInit();
            }else{
              alert("Lỗi Cập nhật giá thất bại");
            }
          },error=>{
            console.log(error);
          })
          
        }else{
          this.danhgiaserve.insertdanhgianguoidung(new Danhgia(0,new Date(),this.idnguoidung,this.idchucnang,this.guidanhgias)).subscribe(data=>{
            if(data==1)
            {
              alert("Gửi đánh giá thành công!");
              this.tablechild.closetable();
              this.listdanhgia.ngOnInit();
            }else{
              alert("Lỗi Gửi đánhg giá thất bại");
            }
          },error=>{
            console.log(error);
          })
        }
      }
    }else {
      alert("Không Có Thông tin đánh giá!");
    }
  }
}
