import { Component, Input, OnInit } from '@angular/core';
import { ThongKeService } from "../../../Service/thongke.module";
import { DanhGiaService } from "../../../Service/danhgia.module";
import { HeThongService } from "../../../Service/hethong.module";

import { Router } from "@angular/router";
import Chart from 'chart.js/auto';
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
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  @Input() primss:boolean=false;
   chart: any;
   yearId:number[]=[];
   yearnow!:number;
   getyear:any;
   hethong:HeThong[]=[];
   public width:any;
   public height:any;
  constructor(
    private hethongservice:HeThongService,private thongkeservice:ThongKeService,private router:Router
  ) { 
      this.getyear=new Date().getFullYear();
  }
  ngOnInit(): void {
    // this.createline((this.yearnow+'01-01').toString(),(this.yearnow+'01-01').toString());
    this.createpie();
    // this.createChart();
  }
  selectOption()
  {
    // this.chart.destroy();
    // this.createline(  (this.yearId+'01-01').toString(),(this.yearId+'12-31').toString());
  }
  randomColor()
  {
    return '#'+ Math.floor(Math.random()*16777215).toString(16);
  }
  createpie(){
    const labels: string[]=[];
    const datasets: number[]=[];
    let sum=0;
    const backgroundColor:string[]=[];
    this.hethongservice.getHeThong(localStorage.getItem("token")).subscribe(data=>{
      let check_token= data as unknown as {"_token":number};
     this.hethong=data;
     if(check_token._token==12)
     {
        localStorage.removeItem("token");
        localStorage.removeItem("User");
        this.router.navigate(['/login']);
      }
      for (let i = 0; i <  this.hethong.length; i++) {
        sum=0;
        labels.push(this.hethong[i].tenHeThong);
        backgroundColor.push(this.randomColor());
        this.thongkeservice.getsolieudanhgiahethong(new ChucNang(0,"","",this.hethong[i].id),localStorage.getItem("token")).subscribe(
          data=>{
          for (let z = 0; z < data.length; z++) {
                sum += Number(data[z].DanhGia?.length);
          }
          datasets.push(sum);
          this.chart = new Chart("MyCharts", {
            type: 'pie', //this denotes tha type of chart
      
            data : {
              labels: labels,
              datasets: [{
                label: '# of Votes',
                data: datasets,
                borderWidth: 1,
                backgroundColor: backgroundColor,
              }]
            },  options : {
              plugins:{
                title:{
                  display:true,
                  text:"Tỷ lệ đánh giá của các hệ thống",
                  font:{
                    size:30
                  }
                }
                
              }, animation: {
                onComplete: function () {
                  console.log(this.toBase64Image());
                },
              },
            }   
          });
        },error=>{
          console.log(error);
        })
      }
    },error=>{
      console.log(error);
    });
  }


  public Print = () => {
    const a = document.createElement('a');
    a.href = this.chart.toBase64Image();
    a.download = 'my_file_name.png';
    a.click();   
  }
 
}
