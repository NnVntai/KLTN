import { Injectable } from '@angular/core';
import { ConnetDanhGia } from "../Object/config";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCustomer
{
    //open table 1
  private connets = new BehaviorSubject({});
  currentconnet = this.connets.asObservable();
  private tableCustomer = new BehaviorSubject(false);
  currenttableCustomer = this.tableCustomer.asObservable();
    //open table 2
  private tableCustomer2 = new BehaviorSubject(false);
  currenttableCustomer2 = this.tableCustomer2.asObservable();

  private idchucnang = new BehaviorSubject(0);
  currentidchucnang = this.idchucnang.asObservable();

  private withbuuton = new BehaviorSubject(0);
  currentwithbuuton = this.withbuuton.asObservable();

  private idnguoidung = new BehaviorSubject(0);
  currentidnguoidung = this.idnguoidung.asObservable();

  private idhethong = new BehaviorSubject(0);
  currentidhethong = this.idhethong.asObservable();

  private idanhgia = new BehaviorSubject(0);
  currentidanhgia = this.idanhgia.asObservable();

  private send = new BehaviorSubject(false);
  sendtable = this.send.asObservable();
  
    changetableCustomer(message:boolean) {
    this.tableCustomer.next(message);
  }
  changetableCustomer2(message:boolean) {
    this.tableCustomer2.next(message);
  }
  changeidchucnang(message:number) {
    this.idchucnang.next(message);
  }
  changeidnguoidung(message:number) {
    this.idnguoidung.next(message);
  }
  changeidhethong(message:number) {
    this.idhethong.next(message);
  }
  changesend(message:boolean) {
    this.send.next(message);
  }
  changeiddanhgia(message:number) {
    this.idanhgia.next(message);
  }
  changewothbuuton(message:number) {
    this.withbuuton.next(message);
  }
  changeconnet(message:any) {
    this.connets.next(message);
  }
}