import { Injectable } from '@angular/core';

import { number } from 'echarts';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class Datatalbemu{

  private messageSource = new BehaviorSubject(false);
  currentMessage = this.messageSource.asObservable();

  private messageSourceID = new BehaviorSubject(0);
  currentMessageID = this.messageSourceID.asObservable();

  private loginid = new BehaviorSubject(0);
  currentloginid = this.loginid.asObservable();

  private messageSourceSYS = new BehaviorSubject(false);
  currentMessageSYS = this.messageSourceSYS.asObservable();

  private messageSourceSYSID = new BehaviorSubject(0);
  currentMessageSYSID = this.messageSourceSYSID.asObservable();

  private messageSourceFUN = new BehaviorSubject(false);
  currentMessageFUN = this.messageSourceFUN.asObservable();

  private messageSourceFUNID = new BehaviorSubject(0);
  currentMessageFUNID = this.messageSourceFUNID.asObservable();

  private messageSourceNoiDungDG = new BehaviorSubject(false);
  currentMessageNoiDungDG = this.messageSourceNoiDungDG.asObservable();

  private messageSourceNoiDungDGiD = new BehaviorSubject(0);
  currentMessageNoiDungDGiD  = this.messageSourceNoiDungDGiD.asObservable();

  private VaiTroOpen = new BehaviorSubject(false);
  currentVaiTroOpen = this.VaiTroOpen.asObservable();

  private idVaiTro = new BehaviorSubject(0);
  currentIdVaiTro  = this.idVaiTro.asObservable();

  private kieuDanhGiaOpen = new BehaviorSubject(false);
  currentKieuDanhGiaOpen = this.kieuDanhGiaOpen.asObservable();

  private idKieuDanhGia = new BehaviorSubject(0);
  currentIdKieuDanhGia = this.idKieuDanhGia.asObservable();

  private messageSourceLogin = new BehaviorSubject('login');
  currentMessageLogin = this.messageSourceLogin.asObservable();
  
  changeMessageLogin(message: string) {
    this.messageSourceLogin.next(message);
  }
  constructor() {  
  }
 changeMessageSYS(message: boolean) {
    this.messageSourceSYS.next(message);
  }
  changeMessageSYSID(message: number) {
    this.messageSourceSYSID.next(message);
  }
  changeMessage(message: boolean) {
    this.messageSource.next(message);
  }
  changeMessageID(message: number) {
    this.messageSourceID.next(message);
  }
  changeMessageFUN(message: boolean) {
    this.messageSourceFUN.next(message);
  }
  changeMessageFUNID(message: number) {
    this.messageSourceFUNID.next(message);
  }
  changeMessageNoiDungDG(message: boolean) {
    this.messageSourceNoiDungDG.next(message);
  }
  changeMessageNoiDungDGiD(message: number) {
    this.messageSourceNoiDungDGiD.next(message);
  }
  changeVaiTroOpen(message: boolean) {
    this.VaiTroOpen.next(message);
  }
  changeIdVaiTro(message: number) {
    this.idVaiTro.next(message);
  }
  changeKieuDanhGiaOpen(message: boolean) {
    this.kieuDanhGiaOpen.next(message);
  }
  changeIdKieuDanhGia(message: number) {
    this.idKieuDanhGia.next(message);
  }
  changeloginid(message:number)
  {
    this.loginid.next(message);
  }


}
