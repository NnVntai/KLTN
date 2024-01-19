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
    KieuDanhGia,
    NoiDungDanhGia} from "../Object/CUSTOMERJOURNEYMAP ";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Headers } from "node-fetch";

@Injectable({
    providedIn: 'root'
})
export class NoiDungDanhGiaService {
    constructor(private http:HttpClient){}
    private url="http://127.0.0.1:8000";
    getnoidungdanhgia(noidungdanhgia:NoiDungDanhGia,token:any)
    {   const body=JSON.stringify(noidungdanhgia);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post<NoiDungDanhGia[]>(this.url+"/api/getnoidungdanhgia",body,{'headers': headers});  
    }
    insertnoidungdanhgia(noidungdanhgia:NoiDungDanhGia,token:any){
        const body=JSON.stringify(noidungdanhgia);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/insertnoidungdanhgia",body,{'headers': headers});  
    }
    deletenoidungdanhgia(noidungdanhgia:NoiDungDanhGia,token:any){
        const body=JSON.stringify(noidungdanhgia);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/deletenoidungdanhgia",body,{'headers': headers});  
    }
    updatenoidungdanhgia(noidungdanhgia:NoiDungDanhGia,token:any){
        const body=JSON.stringify(noidungdanhgia);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/updatenoidungdanhgia",body,{'headers': headers}); 
    }
    getinfornoidungdanhgia(noidungdanhgia:NoiDungDanhGia,token:any){
        const body=JSON.stringify(noidungdanhgia);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post<NoiDungDanhGia[]>(this.url+"/api/getinfornoidungdanhgia",body,{'headers': headers}); 
    }
}