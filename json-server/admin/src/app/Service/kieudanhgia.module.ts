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
export class KieuDanhGiaService {
    constructor(private http:HttpClient){}
    private url="http://127.0.0.1:8000";

    getkieudanhgia(token:any)
    {
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token} 
        return this.http.get<KieuDanhGia[]>(this.url+"/api/getkieudanhgia",{'headers':headers}); 
    }
    deletekieudanhgia(danhgia:KieuDanhGia,token:any)
    {
        const body=JSON.stringify(danhgia);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token} 
        return this.http.post(this.url+"/api/deletekieudanhgia",body,{'headers':headers}); 
    }
    insertkieudanhgia(danhgia:KieuDanhGia,token:any)
    {
        const body=JSON.stringify(danhgia);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token} 
        return this.http.post(this.url+"/api/insertkieudanhgia",body,{'headers':headers}); 
    }
    updatekieudanhgia(danhgia:KieuDanhGia,token:any)
    {
        const body=JSON.stringify(danhgia);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token} 
        return this.http.post(this.url+"/api/updatekieudanhgia",body,{'headers':headers}); 
    }
    getinforkieudanhgia(danhgia:KieuDanhGia,token:any)
    {
        const body=JSON.stringify(danhgia);
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': token} 
        return this.http.post<KieuDanhGia[]>(this.url+"/api/getinforkieudanhgia",body,{'headers':headers}); 
    }

}