import { Injectable } from "@angular/core";
import { DataCustomer } from"./data.module";
import { ConnetDanhGia } from "../Object/config";

@Injectable({
    providedIn: 'root'
})
export class Configx {
        ConnetDanhGia:ConnetDanhGia={};
    constructor(private data:DataCustomer) {
      this.data.changeconnet(this.ConnetDanhGia);
      console.log(this.ConnetDanhGia);
    }
}
