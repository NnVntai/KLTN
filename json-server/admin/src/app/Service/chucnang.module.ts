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
export class ChucNangService {
    constructor(private http:HttpClient){}
    private url="http://127.0.0.1:8000";
    inserchucnang(chucnang:ChucNang,token:any) {   
            const body=JSON.stringify(chucnang);
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token} 
            return this.http.post(this.url+"/api/insertChucNang",body,{'headers':headers});  
    }
    getchucnang(chucnang:ChucNang,token:any)
    {
        const body=JSON.stringify(chucnang);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token} 
        return this.http.post<ChucNang[]>(this.url+"/api/getChucNang",body,{'headers':headers});  
    }
    getinforchucnang(chucnang:ChucNang,token:any)
    {
        const body=JSON.stringify(chucnang);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token} 
        return this.http.post<ChucNang[]>(this.url+"/api/getThongTinChiTietChucNang",body,{'headers':headers});  
    }
    deletechucnang(chucnang:ChucNang,token:any)
    {
        const body=JSON.stringify(chucnang);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token} 
        return this.http.post(this.url+"/api/deleteChucNang",body,{'headers':headers});  
    }
    updateChucNang(chucnang:ChucNang,token:any)
    {
        const body=JSON.stringify(chucnang);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token} 
        return this.http.post(this.url+"/api/updateChucNang",body,{'headers':headers});  
    }
    checkChucNang(chucnang:ChucNang,token:any)
    {
        const body=JSON.stringify(chucnang);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token} 
        return this.http.post<ChucNang[]>(this.url+"/api/checkChucNang",body,{'headers':headers});  
    }
}