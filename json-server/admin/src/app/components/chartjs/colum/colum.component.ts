import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ThongKeService } from "../../../Service/thongke.module";
import { DanhGiaService } from "../../../Service/danhgia.module";
import { HeThongService } from "../../../Service/hethong.module";
import Chart, { TimeScale } from 'chart.js/auto';
import { 
  Login,
  NguoiDanhGia,
  NguoiQuanTri,
  VaiTro,
  HeThong,
  DanhGia,
  ChiTietDanhGia,
  ChucNang,
  KieuDanhGia} from "../../../Object/CUSTOMERJOURNEYMAP ";

@Component({
  selector: 'app-colum',
templateUrl: './colum.component.html',
  styleUrls: ['./colum.component.css']
})
export class ColumComponent implements OnInit {

  @Input() idhethongs:number=0;
  chart: any;
  yearId:number[]=[];
  yearnow!:number;
  getyear:any;
  hethong:HeThong[]=[];
  constructor(private hethongservice:HeThongService,private thongkeservice:ThongKeService,private router:Router) { }

  ngOnInit(): void {
    this.createpie();
  }
  randomColor()
  {
    return '#'+ Math.floor(Math.random()*16777215).toString(16);
  }
  selectOption()
  {
    this.chart.destroy();
    this.createline(  (this.yearId+'01-01').toString(),(this.yearId+'12-31').toString());
  }
  kiemtracotrungarr(input:any[], char:string,check:number)
  {
    for (let i = 0; i < input.length; i++) {
      if(char==input[i])
      { 
        i=check;
        return false;
        break;   
      }      
    }
    return true;
  }
  timtrungarr(input:any[], char:string)
  {
    for (let i = 0; i < input.length; i++) {
      if(char==input[i])
      { 
        return i;
      }      
    }
    return -1;
  }
  createpie(){
    const labels: string[]=[];
    const datasets: any[]=[];
    const tendangia:string[]=[];
    const idchitiet:number[][]=[];
    this.thongkeservice.getthongkequantritheochucnang(new ChucNang(0,"","",this.idhethongs),localStorage.getItem("token")).subscribe(
      data=>{
        let check_token= data as unknown as {"_token":number};
        if(check_token._token==12)
        {
          localStorage.removeItem("token");
          localStorage.removeItem("User");
          this.router.navigate(['/login']);
        }
        else{
      for (let z = 0; z < data.length; z++) {
        labels.push(data[z].tenChucNang);
        idchitiet.push([]);
        for (let db = 0; db < Number(data[z].DanhGia?.length); db++) {

          for (let ct = 0; ct < Number(data[z].DanhGia![db].chiTietDanhGia?.length); ct++){
           
            let check:number=-1;
            if(Number(data[z].DanhGia![db].chiTietDanhGia[ct].idKieuDanhGia)==2)44
            {
         
              if(this.kiemtracotrungarr(tendangia,data[z].DanhGia![db].chiTietDanhGia![ct].tenDanhGia,check))
              {
               tendangia.push(data[z].DanhGia![db].chiTietDanhGia![ct].tenDanhGia);
              
               idchitiet[z].push(Number(data[z].DanhGia![db].chiTietDanhGia![ct].ketQuaDanhGia));
              }else {
                if(idchitiet[z][this.timtrungarr(tendangia,data[z].DanhGia![db].chiTietDanhGia![ct].tenDanhGia)]==undefined)
                {
                  idchitiet[z].push(Number(data[z].DanhGia![db].chiTietDanhGia![ct].ketQuaDanhGia));
                }else{
                  idchitiet[z][this.timtrungarr(tendangia,data[z].DanhGia![db].chiTietDanhGia![ct].tenDanhGia)]=
                  ((idchitiet[z][this.timtrungarr(tendangia,data[z].DanhGia![db].chiTietDanhGia![ct].tenDanhGia)]
                  +Number(data[z].DanhGia![db].chiTietDanhGia[ct].ketQuaDanhGia)));
                }
              }
            }
          }                  
        }
      }
      for (let i = 0; i < tendangia.length; i++) {
       const datas:number[]=[];
        for (let z = 0; z < data.length; z++) {
         datas.push(idchitiet[z][i]);
        }
          datasets.push({
            label: tendangia[i],
            backgroundColor:this.randomColor(),
            data:datas
          });
      }

      this.chart = new Chart("funhethongid", {
        type: 'bar',
        data: {
          labels: labels,
          datasets: datasets
        },
        options: {
          plugins:{
          title: {
            display: true,
            text: 'Sổ điểm trung bình từng điểm đánh giá của các chức năng',
            font:{
              size:30
            }
          }
        }
      }
     })
    ;}
    },error=>{
      console.log(error);
    })  
  }
  createline(ngaydaunams:string,ngaycuoinams:string){
    const datasets: any[]=[];
    const months:number[]=[];
    for (let yearvn = 1920; yearvn < 2100; yearvn++) {
      this.yearId.push(yearvn);
    }
    for (let m = 0; m < 12; m++) {
        months[m]=0;
    }
    this.thongkeservice.getthongketheonamline(
      { idHeThong:this.idhethongs,ngaydaunam:new Date(ngaydaunams),ngaycuoinam:new Date(ngaycuoinams)},localStorage.getItem("token")).subscribe(
      data=>{
        let check_token= data as unknown as {"_token":number};
        if(check_token._token==12)
        {
          localStorage.removeItem("token");
          localStorage.removeItem("User");
          this.router.navigate(['/login']);
        }
        else{
          for (let z = 0; z < data.length; z++) {
            for (let k = 0; k <Number(data[z].thongke?.length); k++) {
              months[Number(data[z].thongke![k]._id)-1]=months[Number(data[z].thongke![k]._id)-1]+data[z].thongke![k].Count;
            }
            datasets.push({
              data: months,
              label: data[z].tenChucNang,
              borderColor: this.randomColor(),
              fill: false
            })
          }
          this.chart = new Chart("MyChart", {
            type: 'line',
            data: {
              labels: [1,2,3,4,5,6,7,8,9,10,11,12],
              datasets: datasets
            },
            options: {
              plugins:{ 
                title: {
                  display: true,
                  text: 'Hiển thị thống kê các đánh giá phần mềm theo năm '+this.getyear,
                }
              }
            }
          });
        }
      },error=>{
        console.log(error);
      })
  } 
  public Print = () => {
    const a = document.createElement('a');
    a.href = this.chart.toBase64Image();
    a.download = 'danhgia.png';
    a.click();   
  }

}
