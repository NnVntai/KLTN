import { Component, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-buttonstar',
  templateUrl: './buttonstar.component.html',
  styleUrls: ['./buttonstar.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom, 
})
export class ButtonstarComponent {
  @Input()ketQuaDanhGia:number;tenDanhGia:string;
  constructor()
  {
  
  }
  choosen:boolean=false;
  idKieuDanhGia:number=2;
  star(id:number)
  {
   
  }
}

