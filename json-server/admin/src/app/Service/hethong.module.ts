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
export class HeThongService {
    constructor(private http:HttpClient){}
    private url="http://127.0.0.1:8000";
    getHeThong(token:any){
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.get<HeThong[]>(this.url+"/api/getHeThong",{'headers': headers});  
    }
    deletesys(userQT:HeThong,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/xoaHeThong",body,{'headers': headers});  
    }
    changesys(userQT:HeThong,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/capNhatHeThong",body,{'headers': headers});  
    }   
    insertsystem(userQT:HeThong,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/insertHeThong",body,{'headers': headers});  
    }
    checksys(userQT:HeThong,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post<HeThong[]>(this.url+"/api/kiemTraHeThong",body,{'headers': headers});  
    }  
    getinforsys(userQT:HeThong,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post<HeThong[]>(this.url+"/api/layThongTinChiTietHeThong",body,{'headers': headers});  
    }  
    
}