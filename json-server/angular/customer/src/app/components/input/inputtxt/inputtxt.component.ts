import { Component, Input } from '@angular/core';
import { DataCustomer } from "../../../service/data.module";

@Component({
  selector: 'app-inputtxt',
  templateUrl: './inputtxt.component.html',
  styleUrls: ['./inputtxt.component.css']
})
export class InputtxtComponent {
  @Input()
  ketQuaDanhGia:string;
  idKieuDanhGia:number=3;
  tenDanhGia:string;
  constructor(private datas:DataCustomer)
  {
    
  }
  input()
  {
 
  }
}
