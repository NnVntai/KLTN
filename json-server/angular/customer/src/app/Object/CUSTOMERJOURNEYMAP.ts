import { NumberValueAccessor } from "@angular/forms";
import { bo } from "chart.js/dist/chunks/helpers.core";

export class NguoiQuanTri {
    id:number;
    hoTen:string;
    username:string;
    password:string|undefined;
    ngaySinh:Date;
    tenCongTy:string;
    idVaiTro:number;
    idHeThong:number|undefined;
    chucDanh:string;
    checked?: boolean;
    VaiTro:VaiTro[]=[];
    HeThong:HeThong[]=[];
    constructor(
        id:number,
        hoTen:string,
        username:string,
        password:string|undefined,
        ngaySinh:Date,
        chucDanh:string,
        tenCongTy:string,
        idVaiTro:number,
        idHeThong:number|undefined,
        checked?: boolean,
        ){
       this.id=id;
       this.hoTen=hoTen;
       this.chucDanh=chucDanh;
       this.username=username;
       this.password=password;
       this.ngaySinh=ngaySinh;
       this.tenCongTy=tenCongTy;
       this.idVaiTro=idVaiTro;
       this.idHeThong=idHeThong;
       this.checked=checked;
    }
  };
  export class VaiTro
  {
    id: number;
    tenVaiTro:string;
     checked?:boolean;
    constructor(
        id: number,
        tenVaiTro: string,
          checked?: boolean,
    ){
        this.id=id;
        this.tenVaiTro=tenVaiTro;
         this.checked=checked;
    }
  }
  export class HeThong
  { 
        id:number;
        tenHeThong:string;
        checked?:boolean;
        maKetNoi:string;
        constructor(
            id: number,
            tenHeThong: string,
            checked:boolean, 
            maKetNoi:string
            ){
            this.id=id;
            this.tenHeThong=tenHeThong;
            this.maKetNoi=maKetNoi;
            this.checked=checked;
        }
  }
  export class Login
  {
        username:string;
        password:string;
        constructor( 
            username:string,
            password:string
            ){
            this.username=username;
            this.password=password;
        }
  }
  export class ChucNang{
    
    id:number;
    tenChucNang:string;
    mucDich:string;
    idHeThong:number;
    checked?:boolean;
    DanhGia?:Danhgia[]=[];
        arr?:number[]=[];
     thongke?:[{ _id: string; Count: number; }];
    idNguoiDanhGia?:number;
    
    constructor(
        id:number,
        tenChucNang:string,
        mucDich:string,
        idHeThong:number,
        checked?:boolean,
         arr?:number[]
    ){
        this.id=id;
        this.mucDich=mucDich;
        this.tenChucNang=tenChucNang;
        this.idHeThong=idHeThong;
        this.checked=checked;
         this.arr=arr;
    }
}
export class Danhgia{
    id:number;
    ngayDanhGia:Date;
    idNguoiDanhGia:number;
    idChucNang:number;
    chiTietDanhGia:ChiTietDanhGia[];
     chucNang?:ChucNang[];
    checked?:boolean;
    nguoiDanhGia?:NguoiDanhGia[];
    constructor(
        id:number,
        ngayDangGia:Date,
        idNguoiDanhGia:number,
        idChucNang:number,
        ChiTietDanhGia:ChiTietDanhGia[],
        checked?:boolean
        ){
        this.id=id;
       this.ngayDanhGia=ngayDangGia;
        this.idNguoiDanhGia=idNguoiDanhGia;
        this.idChucNang=idChucNang;
        this.chiTietDanhGia=ChiTietDanhGia;
        this.checked=checked;
    }
}
export class ChiTietDanhGia{
    id:number;
    tenDanhGia:string;
    ketQuaDanhGia:string;
    idKieuDanhGia:number;
    constructor(
        id:number,
        tenDanhGia:string,
        ketQuaDanhGia:string,
        idKieuDanhGia:number
        ){
      this.id=id;
      this.tenDanhGia=tenDanhGia;
      this.ketQuaDanhGia=ketQuaDanhGia;
      this.idKieuDanhGia=idKieuDanhGia;
    }
}
export class KieuDanhGia{
    id:number;
    tenKieuDanhGia:string;
        checked?:boolean;
    constructor(
        id:number,
        tenKieuDanhGia:string,
         checked?:boolean
        ){
        this.id=id;
        this.tenKieuDanhGia=tenKieuDanhGia;
        this.checked=checked;
    }
}
export class NguoiDanhGia{
    id:number;
    hoTen:string;
    maUser:string;
    idHeThong?:Number;
    checked?:boolean;
    constructor(id:number,
        hoTen:string,
        maUser:string,
        idHeThong?:number,
        checked?:boolean
        ){
       this.id=id;
       this.maUser=maUser;
       this.hoTen=hoTen;
       this.idHeThong=idHeThong;
       this.checked=checked;
    }
}
export class NoiDungDanhGia{
    id:number;
    
    mucDoUuTien:number;
    idHeThong:number;
    idKieuDanhGia:number;
    tenDanhGia:string;
    heThong?:HeThong[];
    kieuDanhGia?:KieuDanhGia[];
    checked?:boolean;

    constructor( id:number,
        mucDoUuTien:number,
        idHeThong:number,
        idKieuDanhGia:number,
        tenDanhGia:string,
        checked?: boolean,

        ){
       this.id=id;
     this.idHeThong=idHeThong;
     this.idKieuDanhGia=idKieuDanhGia;
     this.mucDoUuTien=mucDoUuTien;
     this.tenDanhGia=tenDanhGia
     this.checked=checked;
    }
}


