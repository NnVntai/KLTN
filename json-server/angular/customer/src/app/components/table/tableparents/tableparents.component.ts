import {   ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Component,
  EventEmitter,
  Output,
  ElementRef,} from '@angular/core';
import { DataCustomer } from "../../../service/data.module";
import { TablechildComponent } from "../tablechild/tablechild.component";
@Component({
  selector: 'app-tableparents',
  templateUrl: './tableparents.component.html',
  styleUrls: ['./tableparents.component.css']
})
export class TableparentsComponent {
  @Output() loaded: EventEmitter<null> = new EventEmitter<null>();
  @Output() destroyed: EventEmitter<null> = new EventEmitter<null>();
  tableopen:boolean=false;
  numv:number;
  constructor(private datacustomer:DataCustomer)
  {
    this.datacustomer.currenttableCustomer.subscribe(message=>this.tableopen=message);
    this.datacustomer.currentidhethong.subscribe(message=>this.numv=message);
  }
  closetable()
  {
    this.datacustomer.changetableCustomer(!this.tableopen);
  }
}