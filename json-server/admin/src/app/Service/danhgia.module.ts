import { Injectable } from "@angular/core";
import { 
    Login,
    NguoiDanhGia,
    NguoiQuanTri,
    VaiTro,
    HeThong,
    DanhGia,
    ChiTietDanhGia,
    ChucNang,
    KieuDanhGia} from "../Object/CUSTOMERJOURNEYMAP ";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Headers } from "node-fetch";

@Injectable({
    providedIn: 'root'
})
export class DanhGiaService {
    constructor(private http:HttpClient){}
    private url="http://127.0.0.1:8000";
 
    getdanhgiadmin(chucnang:ChucNang,token:any)
    {
        const body=JSON.stringify(chucnang);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token} 
        return this.http.post<DanhGia[]>(this.url+"/api/getdanhgiadmin",body,{'headers':headers}); 
    }
    deletedanhgia(danhgia:DanhGia,token:any)
    {
        const body=JSON.stringify(danhgia);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token} 
        return this.http.post(this.url+"/api/deletedanhgia",body,{'headers':headers}); 
    }
    getnguoidungdanhgia(nguoidanhgia:NguoiDanhGia,token:any)
    {
        const body=JSON.stringify(nguoidanhgia);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token} 
        return this.http.post<NguoiDanhGia[]>(this.url+"/api/getlistnguoidungdanhgia",body,{'headers':headers}); 
    }

}