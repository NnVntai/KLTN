import { Injectable } from "@angular/core";
import { 
    Login,
    NguoiDanhGia,
    NguoiQuanTri,
    VaiTro,
    HeThong,
    Danhgia,
    ChiTietDanhGia,
    ChucNang,
    KieuDanhGia,NoiDungDanhGia} from "../Object/CUSTOMERJOURNEYMAP";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Headers } from "node-fetch";

// this will update the process.env with environment variables in .env file

@Injectable({
    providedIn: 'root'
})
export class DanhGiaService {
    // private url2=process.env["URL_DATA"];
    private url="http://127.0.0.1:8000";
    constructor(private http:HttpClient){
        // console.log(this.url2);
        // this.url2=process.env["URL_DATA"]||"";
    }
    

    getinforsys(userQT:HeThong){
        const body=JSON.stringify(userQT);
        const headers = { 'content-type': 'application/json'}  
        return this.http.post<HeThong[]>(this.url+"/api/checkmahethongdanhgia",body,{'headers': headers});  
    }
    getchucnang(chucnang:ChucNang,idNguoiDanhGias:number) {  
        chucnang.idNguoiDanhGia=idNguoiDanhGias;
        const body=JSON.stringify(chucnang);
        const headers = { 'content-type': 'application/json'}  
        return this.http.post<ChucNang[]>(this.url+"/api/getchucnangdanhgianguoidungs",body,{'headers':headers});  
    }
    getdanhgia(chucnang:Danhgia,idNguoiDanhGias:number) {   
        const body=JSON.stringify(chucnang);
        const headers = { 'content-type': 'application/json'}  
        return this.http.post<Danhgia[]>(this.url+"/api/getgiaodienDanhGiaiChucNang",body,{'headers':headers});  
    } 
    getthongtinnguoidanhgia(NguoiDanhGia:NguoiDanhGia) {   
        const body=JSON.stringify(NguoiDanhGia);
        const headers = { 'content-type': 'application/json'}  
        return this.http.post<NguoiDanhGia[]>(this.url+"/api/getnguoidanhgia",body,{'headers':headers});  
    }   
    insertnguoidanhgia(NguoiDanhGia:NguoiDanhGia) {   
        const body=JSON.stringify(NguoiDanhGia);
        const headers = { 'content-type': 'application/json'}  
        return this.http.post<NguoiDanhGia[]>(this.url+"/api/insertnguoidanhgia",body,{'headers':headers});  
    }
    insertdanhgianguoidung(danhgia:Danhgia){
        const body=JSON.stringify(danhgia);
        const headers = { 'content-type': 'application/json'}  
        return this.http.post(this.url+"/api/insertdanhgianguoidung",body,{'headers':headers});
    }
    getgiaodiendanhgia(danhgia:Danhgia)
    {
        const body=JSON.stringify(danhgia);
        const headers = { 'content-type': 'application/json'}  
        return this.http.post<Danhgia[]>(this.url+"/api/insertdanhgianguoidung",body,{'headers':headers});
    }
    getgiaodiendanhgiakhongconguoidung(danhgia:Danhgia)
    {
        const body=JSON.stringify(danhgia);
        const headers = { 'content-type': 'application/json'}  
        return this.http.post<Danhgia[]>(this.url+"/api/getgiaodiendanhgiakhongconguoidung",body,{'headers':headers});
    }
    capnhatdanhgianguoidung(danhgia:Danhgia)
    {
        const body=JSON.stringify(danhgia);
        const headers = { 'content-type': 'application/json'}  
        return this.http.post(this.url+"/api/capnhatdanhgianguoidung",body,{'headers':headers});
    }
    getgiaodiendanhgianoidung(danhgia:NoiDungDanhGia)
    {
        const body=JSON.stringify(danhgia);
        const headers = { 'content-type': 'application/json'}  
        return this.http.post<NoiDungDanhGia[]>(this.url+"/api/getgiaodiendanhgianoidung",body,{'headers':headers});
    }
}