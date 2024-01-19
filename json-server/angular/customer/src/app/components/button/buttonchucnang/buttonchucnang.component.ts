import { Component, Input, OnInit,ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Type,
  ViewEncapsulation} from '@angular/core';
import { DataCustomer } from "../../../service/data.module";
import { ChucNang } from "../../../Object/CUSTOMERJOURNEYMAP";
import { TablechildComponent } from "../../table/tablechild/tablechild.component";
import { DanhGiaService } from "../../../service/DanhGia";

@Component({
  selector: 'app-buttonchucnang',
  templateUrl: './buttonchucnang.component.html',
  styleUrls: ['./buttonchucnang.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom, 
})
export class ButtonchucnangComponent implements OnInit {

  @Input()prop!:ChucNang;
  @Input()stt!:number;
  @ViewChild('template2', { read: ViewContainerRef ,static:true})
  namechucnang:string="";
  txtmucdich:string="";
  opentable2:boolean=false;
  components:any[]=[];
  stardanhgia:any=0;
  ketQuaDanhGia:string;
  constructor(private data:DataCustomer, private templates2: ViewContainerRef,private dataservice:DanhGiaService,private componentFactoryResolver: ComponentFactoryResolver)
  {
  }
  ngOnInit(): void {
    this.namechucnang=this.prop.tenChucNang;
    this.txtmucdich=this.prop.mucDich;
 
    if((this.prop.DanhGia?.length))
    {
      let index=0;
      let sum=0;
     for (let i = 0; i < this.prop.DanhGia[0].chiTietDanhGia.length; i++) {
      if(this.prop.DanhGia[0].chiTietDanhGia[i].idKieuDanhGia==2)
      {
        index++;
        sum+=Number(this.prop.DanhGia[0].chiTietDanhGia[i].ketQuaDanhGia);
      }
     }
      this.ketQuaDanhGia=(sum/index).toFixed();
    }else{
      this.stardanhgia="(Chưa Đánh giá)";
    }
  }
  renderTreeListReport(componentClass: Type<any>) {
    this.removeComponents();
    const factory = this.componentFactoryResolver.resolveComponentFactory<any>(componentClass);
    const component = this.templates2.createComponent(factory);
    this.components.push(component);
  }
  public removeComponents() {
    const components = this.components;
    if (components.length > 0) {
      components.forEach(comp => {
        this.templates2.remove(components[comp])
      })
    }
  }
  clickchunang(id:number)
  {
    if(this.opentable2==false)
    {
     
        if((this.prop.DanhGia?.length))
      {
        this.data.changesend(true);
      }else{
        this.data.changesend(false);
      }
      this.templates2.remove();
      this.data.changeidchucnang(id);
      // this.renderTreeListReport(TablechildComponent);
      const  component = this.templates2.createComponent(TablechildComponent);
      component.instance.showmucdich=this.prop.mucDich;
      this.data.changetableCustomer2(!this.opentable2);
    }
  }
}
