import { Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { query } from 'express';
import { queueScheduler } from 'rxjs';
import {DataCustomer} from "../../../service/data.module";
import { ChucNang,Danhgia,KieuDanhGia, NoiDungDanhGia } from "../../../Object/CUSTOMERJOURNEYMAP";
import { DanhGiaService } from "../../../service/DanhGia";
import { InputtxtComponent } from "../../input/inputtxt/inputtxt.component";
import { TextLComponent } from "../../input/text-l/text-l.component";
import { ButtonstarComponent } from "../../button/buttonstar/buttonstar.component";
import { ButtonchucnangComponent } from "../../button/buttonchucnang/buttonchucnang.component";
import { ListfunComponent } from "../../slider/listfun/listfun.component";
import { TableparentsComponent } from "../../table/tableparents/tableparents.component";
@Component({
  selector: 'app-tablechild',
  templateUrl: './tablechild.component.html',
  styleUrls: ['./tablechild.component.css']
})
export class TablechildComponent implements OnInit{
  @ViewChild('childtable',{read: ViewContainerRef, static:false }) childtable: ViewContainerRef;
  @ViewChild(ButtonchucnangComponent) child:any;
  @Input() showmucdich:string;
  components:any[]=[];
  tableopen:boolean=false;
  danhgias:Danhgia[]=[];
  NoiDungDanhGia:NoiDungDanhGia[]=[];
  tables:string="";
  inputtable:any;
  buttonrate:any;
  idhethong:number;
  idchucnang:number;
  idnguoidung:number;
  guidanhgia:any;
  TXTthongbao:string="";
  iddanhgia:number;
  constructor( private datacustomer:DataCustomer,private danhgiaserve:DanhGiaService,private componentFactoryResolver: ComponentFactoryResolver,
    private listfun:ListfunComponent,private tableparent:TableparentsComponent) {
    this.datacustomer.currenttableCustomer2.subscribe(message=>this.tableopen=message);
    this.datacustomer.currentidhethong.subscribe(message=>this.idhethong=message); 
    this.datacustomer.currentidchucnang.subscribe(message=>this.idchucnang=message);
    this.datacustomer.currentidnguoidung.subscribe(message=>this.idnguoidung=message);
    this.danhgiaserve.getdanhgia(new Danhgia(1,new Date(),1,this.idchucnang,[]),this.idnguoidung).subscribe(data=>{
        this.danhgias=data;
        this.TXTthongbao=this.showmucdich;
          if(this.danhgias[0])
          {
            this.iddanhgia=this.danhgias[0].id;
            if(this.danhgias[0].chiTietDanhGia?.length>0)
            {
                for (let i = 0; i < this.danhgias[0].chiTietDanhGia.length; i++) {

                    if(String(this.danhgias[0].chiTietDanhGia[i].idKieuDanhGia)=="1")
                    {
                      this.renderTreeListReport(TextLComponent,this.danhgias[0].chiTietDanhGia[i].tenDanhGia,this.danhgias[0].chiTietDanhGia[i].ketQuaDanhGia);
                    }else if(this.danhgias[0].chiTietDanhGia[i].idKieuDanhGia==2)
                    {
                      this.renderTreeListReport(ButtonstarComponent,this.danhgias[0].chiTietDanhGia[i].tenDanhGia,this.danhgias[0].chiTietDanhGia[i].ketQuaDanhGia);
                    }
                }
            }else {
          
            }
        }
        else {
          this.danhgiaserve.getgiaodiendanhgianoidung(new NoiDungDanhGia(0,0,this.idhethong,0,'')).subscribe(data=>{
            this.NoiDungDanhGia=data;
            for (let i = 0; i < this.NoiDungDanhGia.length; i++) {
              if(String(this.NoiDungDanhGia[i].idKieuDanhGia)=="1")
              {
                this.renderTreeListReport(TextLComponent,this.NoiDungDanhGia[i].tenDanhGia,"");
              }else if(this.NoiDungDanhGia[i].idKieuDanhGia==2)
              {
                this.renderTreeListReport(ButtonstarComponent,this.NoiDungDanhGia[i].tenDanhGia,"");             
              }
            }
          });
                  
      //     this.danhgiaserve.getgiaodiendanhgiakhongconguoidung(new Danhgia(1,new Date(),this.idnguoidung,this.idchucnang,[])).subscribe(data=>{
      //       this.danhgias=data;
      //       if(this.danhgias[0])
      //       {
      //         if(this.danhgias[0].chiTietDanhGia?.length>0)
      //         {
      //             for (let i = 0; i < this.danhgias[0].chiTietDanhGia.length; i++) {
      //               if(String(this.danhgias[0].chiTietDanhGia[i].idKieuDanhgia)=="1")
      //               {
      //                 // this.renderTreeListReport(TextLComponent,"","");
      //               }else if(this.danhgias[0].chiTietDanhGia[i].idKieuDanhgia==2)
      //               {
      //                 // this.renderTreeListReport(ButtonstarComponent,"","");             
      //               }
      //             }
      //         }else {
            
      //         }
      //       }else {
      //         this.TXTthongbao="Chưa có Thông tin đánh giá";
      //       }
      //     },error=>{
      //       console.log('oops', error); 
      //     });
        }
      },error=>{
        console.log('oops', error); 
      });
  }
  renderTreeListReport(componentClass: Type<any>,tenDanhGia:string,ketQuaDanhGia:string) {
    const factory = this.componentFactoryResolver.resolveComponentFactory<any>(componentClass);
    const component = this.childtable.createComponent(factory);
    component.instance.tenDanhGia=tenDanhGia;
    component.instance.ketQuaDanhGia=ketQuaDanhGia;
    this.components.push(component);
  }
  removeComponents() {
    const components = this.components;
    if (components.length > 0) {
      components.forEach(comp => {
        this.childtable.remove(components[comp]);
      })
    }
  }

  ngOnInit(): void {

  }
  closetable()
  { 
    this.childtable.clear();
    this.removeComponents();
    this.components=[];
    this.listfun.ngOnInit();
    this.datacustomer.changetableCustomer2(!this.tableopen);
  }
  getdanhgia()
  {
   return this.components;
  }
  notdanhgia()
  {
    if(this.TXTthongbao=="Chưa có Thông tin đánh giá")
    {
      return false;
    }else {
      return true;
    }
  } 
}
