import { Component, OnInit } from '@angular/core';
import { merge } from 'rxjs';
import { ChucNang } from "../../../Object/CUSTOMERJOURNEYMAP";
import { DanhGiaService } from "../../../service/DanhGia";
import { DataCustomer } from "../../../service/data.module";

@Component({
  selector: 'app-listfun',
  templateUrl: './listfun.component.html',
  styleUrls: ['./listfun.component.css']
})
export class ListfunComponent implements OnInit {
  chucnang:ChucNang[]=[];
  idhethong:number=0;
  idnguoidung:number=0;
  with:number;
  constructor(private datacustomer:DataCustomer,private dataservice:DanhGiaService)
  {    }
  ngOnInit(): void {
 
    this.datacustomer.currentidhethong.subscribe(merge=>this.idhethong=merge);
    this.datacustomer.currentidnguoidung.subscribe(data2=>this.idnguoidung=data2);
    this.dataservice.getchucnang(new ChucNang(0,"","",this.idhethong),this.idnguoidung).subscribe(data=>{ 
      if(data)
      {
        this.chucnang=data;
      }else{
        alert("chua co chuc nang danh gia");
      }
    });
  }
  withd()
  {
    this.datacustomer.currentwithbuuton.subscribe(data=>this.with=data);
    return "-"+this.with+"px";
  }
}
