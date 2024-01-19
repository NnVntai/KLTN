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
export class NguoiDungService {
    constructor(private http:HttpClient){}
    private url="http://127.0.0.1:8000";
    
    getUser(token:any)
    {
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.get<NguoiQuanTri[]>(this.url+"/api/getUser",{'headers': headers});  
    }
    insertUser(userQT:NguoiQuanTri,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/insertuser",body,{'headers': headers});  
    }
    checkusername(userQT:NguoiQuanTri,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post<NguoiQuanTri[]>(this.url+"/api/checkusername",body,{'headers': headers});  
    }
    getinforuser(userQT:NguoiQuanTri,token:any){
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post<NguoiQuanTri[]>(this.url+"/api/getinforuser",userQT,{'headers': headers});  
    }
    changeuser(userQT:NguoiQuanTri,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/changeuser",body,{'headers': headers});  
    }
    changepassword(userQT:NguoiQuanTri,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/changepassword",body,{'headers': headers});  
    }
    deleteuser(userQT:NguoiQuanTri,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/deleteuser",body,{'headers': headers});  
    }
    checkpass(userQT:NguoiQuanTri,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post<NguoiQuanTri[]>(this.url+"/api/checkpass",body,{'headers': headers});  
    } 
    getUserVaiTro(token:any){
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.get<NguoiQuanTri[]>(this.url+"/api/getUserVaiTro",{'headers': headers});  
    } 
    
}