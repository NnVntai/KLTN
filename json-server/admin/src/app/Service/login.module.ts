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
export class LoginService {
    constructor(private http:HttpClient){}
    private url="http://127.0.0.1:8000";
    getLogin(userQT:Login) {   
            const body=JSON.stringify(userQT);
            const headers = { 'content-type': 'application/json'}  
            return this.http.post(this.url+"/api/login",body,{'headers':headers});  
    }
    getUser(token:any)
    {
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.get<NguoiQuanTri[]>(this.url+"/api/getUser",{'headers': headers});  
    }
    getVaiTro(token:any){
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.get<VaiTro[]>(this.url+"/api/getVaiTro",{'headers': headers});  
    }
    getHeThong(token:any){
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.get<HeThong[]>(this.url+"/api/getHT",{'headers': headers});  
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
    deletesys(userQT:HeThong,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/deletesys",body,{'headers': headers});  
    }
    changesys(userQT:HeThong,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/changesys",body,{'headers': headers});  
    }   
    insertsystem(userQT:HeThong,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post(this.url+"/api/insertsystem",body,{'headers': headers});  
    }
    checksys(userQT:HeThong,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post<HeThong[]>(this.url+"/api/checksys",body,{'headers': headers});  
    }  
    getinforsys(userQT:HeThong,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post<HeThong[]>(this.url+"/api/getinforsys",body,{'headers': headers});  
    }  
    checkpass(userQT:NguoiQuanTri,token:any){
        const body=JSON.stringify(userQT);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token}
        return this.http.post<NguoiQuanTri[]>(this.url+"/api/checkpass",body,{'headers': headers});  
    } 
    
}