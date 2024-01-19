import { query } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { ChucNang } from "../../../Object/CUSTOMERJOURNEYMAP";
import { DanhGiaService } from "../../../service/DanhGia";
import { DataCustomer } from "../../../service/data.module";
import { ListfunComponent } from "../listfun/listfun.component";
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @ViewChild('myDOMElement', { static: true }) MyDOMElement: ElementRef;
  chucnang:ChucNang[]=[];
  idhethong:number=0;
  idnguoidung:number;
  list:boolean[]=[];
  with:number;
  constructor(private datacustomer:DataCustomer,private dataservice:DanhGiaService)
  {
    this.datacustomer.currentidnguoidung.subscribe(merge=>this.idnguoidung=merge);
    this.datacustomer.currentidhethong.subscribe(merge=>this.idhethong=merge);
        this.dataservice.getchucnang(new ChucNang(0,"","",this.idhethong),this.idnguoidung).subscribe(data=>{
              if(data)
              {
               this.chucnang=data;
                if(innerWidth>=1900)
                {     
                    this.list=this.transform(Math.ceil(this.chucnang.length/4));           
                }
                else if(innerWidth>=1476){
                  this.list=this.transform(Math.ceil(this.chucnang.length/3));        
                }else if(innerWidth>=1028){
                  this.list=this.transform(Math.ceil(this.chucnang.length/2));        
                }
                else{
                    this.list=this.transform(this.chucnang.length);
                }
              }else{
                alert("chua co chuc nang danh gia");
              }
      
              this.click(0);
        });
        
  }
  transform(value:number) : any {
    let res = [];
    for (let i = 0; i < value; i++) {
        res.push(false);
      }
      return res;
    }
    ngOnChanges() {

    }
    click(value:any)
    {
      for (let i = 0; i < this.list.length; i++) {
        this.list[i]=false;
      }
      this.list[value]=true;
      this.with=330*value;
      this.datacustomer.changewothbuuton(this.with);

    }

}


