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
import { NumericType } from "mongodb";
@Injectable({
    providedIn: 'root'
})
export class ThongKeService {
    constructor(private http:HttpClient){}
    private url="http://127.0.0.1:8000";
    getsolieudanhgiahethong(userQT:ChucNang,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post<ChucNang[]>(this.url+"/api/getsolieudanhgiachucnang",body,{'headers': headers});  
    }
    getthongketheonamline(userQT:{idHeThong:number,ngaydaunam:Date,ngaycuoinam:Date},token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post<ChucNang[]>(this.url+"/api/getthongketheonamline",body,{'headers': headers});  
    }
    getthongkequantritheochucnang(chucnang:ChucNang,token:any){
        const body=JSON.stringify(chucnang);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post<ChucNang[]>(this.url+"/api/getthongkequantritheochucnang",body,{'headers': headers});  
    }

}