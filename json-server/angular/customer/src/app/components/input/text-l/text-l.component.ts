import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-l',
  templateUrl: './text-l.component.html',
  styleUrls: ['./text-l.component.css']
})
export class TextLComponent {
  @Input() tenDanhGia:string; ketQuaDanhGia:string;
  idKieuDanhGia:number=1;
 constructor()
 {

 }
}
