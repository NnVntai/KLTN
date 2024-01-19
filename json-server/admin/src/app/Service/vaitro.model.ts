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
export class VaiTroService {
    constructor(private http:HttpClient){}
    private url="http://127.0.0.1:8000";
    getVaiTro(token:any){
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.get<VaiTro[]>(this.url+"/api/getVaiTro",{'headers': headers});  
    }
    getVaiTroId(vatro:VaiTro,token:any){
        const body=JSON.stringify(vatro);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post<VaiTro[]>(this.url+"/api/getVaiTroId",body,{'headers': headers});  
    }
    deleteVaiTro(vatro:VaiTro,token:any){
        const body=JSON.stringify(vatro);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/xoavaitro",body,{'headers': headers});  
    }
    updateVaiTro(vatro:VaiTro,token:any){
        const body=JSON.stringify(vatro);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/updateVaiTro",body,{'headers': headers});  
    }
    insertVaiTro(vatro:VaiTro,token:any){
        const body=JSON.stringify(vatro);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/insertVaiTro",body,{'headers': headers});  
    }
     
}