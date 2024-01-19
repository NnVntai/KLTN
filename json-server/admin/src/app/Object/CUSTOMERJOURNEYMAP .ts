import { NumberValueAccessor } from "@angular/forms";
import { number } from "echarts";

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
        ipHeThong?:String;
        constructor(
            id: number,
            tenHeThong: string,
            maKetNoi:string,
            checked?:boolean,
            ipHeThong?:string
            ){
           
            this.id=id;
            this.tenHeThong=tenHeThong;
            this.maKetNoi=maKetNoi;
            this.checked=checked;
            this.ipHeThong=ipHeThong;
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
    DanhGia?:DanhGia[]=[];
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
export class DanhGia{
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
        ngayDanhGia:Date,
        idNguoiDanhGia:number,
        idChucNang:number,
        ChiTietDanhGia:ChiTietDanhGia[],
        checked?:boolean
        ){
        this.id=id;
       this.ngayDanhGia=ngayDanhGia;
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
    checked?:boolean;
    idHeThong?:number;
    DanhGia?:DanhGia[];
    constructor(id:number,
        hoTen:string,
        maUser:string,
        idHeThong?:number
        ){
       this.id=id;
       this.maUser=maUser;
       this.hoTen=hoTen;
       this.idHeThong=idHeThong;
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

