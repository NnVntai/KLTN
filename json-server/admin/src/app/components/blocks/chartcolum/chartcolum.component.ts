import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ThongKeService } from "../../../Service/thongke.module";
import { DanhGiaService } from "../../../Service/danhgia.module";
import { HeThongService } from "../../../Service/hethong.module";
import { Router } from "@angular/router";
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

// import Chart from 'chart.js';
@Component({
  selector: 'app-chartcolum',
  templateUrl: './chartcolum.component.html',
  styleUrls: ['./chartcolum.component.css'],
})
export class ChartcolumComponent implements OnInit {
  @Input() primss:boolean=false;
   chart: any;
   yearId:number[]=[];
   yearnow!:number;
   getyear:any;
   hethong:HeThong[]=[];
  constructor(
    private hethongservice:HeThongService,private thongkeservice:ThongKeService,private router:Router
  ) {   
      this.getyear=new Date().getFullYear();
  }

  ngOnInit(): void {
    this.createline((this.getyear+'-01-01').toString(),(this.getyear+'-12-31').toString());
    // this.createpie();
    // this.createChart();
  }
  selectOption()
  {
    this.chart.destroy();
    this.createline(  (this.yearId+'01-01').toString(),(this.yearId+'12-31').toString());
  }
  randomColor()
  {
    return '#'+ Math.floor(Math.random()*16777215).toString(16);
  }

  createline(ngaydaunams:string,ngaycuoinams:string){
    const labels: string[]=[];
    const datasets: any[]=[];
    const months:number[]=[];
    for (let yearvn = 1920; yearvn < 2100; yearvn++) {
      this.yearId.push(yearvn);
    }
    const backgroundColor:string[]=[];
    for (let m = 0; m < 12; m++) {
        months[m]=0;
    }
    this.hethongservice.getHeThong(localStorage.getItem("token")).subscribe(data=>{
        let check_token= data as unknown as {"_token":number};
        this.hethong=data;
        if(check_token._token==12)
        {
          localStorage.removeItem("token");
          localStorage.removeItem("User");
          this.router.navigate(['/login']);
        }else{
        for (let i = 0; i <  this.hethong.length; i++) {

          this.thongkeservice.getthongketheonamline({ idHeThong:this.hethong[i].id,ngaydaunam:new Date(ngaydaunams),ngaycuoinam:new Date(ngaycuoinams)},localStorage.getItem("token")).subscribe(
            data=>{
                for (let z = 0; z < data.length; z++) {
                  for (let k = 0; k <Number(data[z].thongke?.length); k++) {
                    months[Number(data[z].thongke![k]._id)-1]=months[Number(data[z].thongke![k]._id)-1]+data[z].thongke![k].Count;
                  }
                }
                datasets.push({
                  data: months,
                  label: this.hethong[i].tenHeThong,
                  borderColor: this.randomColor(),
                  fill: false
                })
                this.chart = new Chart("chartcolums", {
                  type: 'line',
                  data: {
                    labels: [1,2,3,4,5,6,7,8,9,10,11,12],
                    datasets: datasets
                  },
                  options: {
                   plugins:{ 
                      title: {
                        display: true,
                        text: 'Thống kê đánh giá các hệ thống đã tích hợp theo năm '+this.getyear,
                        font:{
                          size:30
                        }
                      }
                    }
                  }
                });

            },error=>{
              console.log(error);
            })
          }}
    },error=>{
      console.log(error);
    });
   // const randomColor =  '#'+ Math.floor(Math.random()*16777215).toString(16); 
  }
  public Print = () => {
    const a = document.createElement('a');
    a.href = this.chart.toBase64Image();
    a.download = 'danhgia.png';
    a.click();   
  }
}
