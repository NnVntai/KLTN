import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showtable:boolean=false;
  idhethong:number=0;
  constructor(private router:Router) {
    if(!localStorage.getItem('User'))
    {
      this.router.navigate(['/login']);
    }
    if(localStorage.getItem('User'))
    {
      const table =JSON.parse(localStorage.getItem('User')||"");
      if(table[0].idVaiTro==1)
      {
        this.showtable=true;
      }else{
        this.idhethong=table[0].idHeThong;
      }
    }
   }
  ngOnInit(): void {
  }

}
