import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showmenu:boolean;
  permissionUser:boolean|undefined;
  permissionQT:boolean|undefined;
  constructor() { 
    if(localStorage.getItem('token'))
    {
      this.showmenu=true;
      if(localStorage.getItem('User'))
      {
       
        if( JSON.parse(localStorage.getItem('User')||"")[0].idVaiTro==1)
        {
          this.permissionQT=true;
          this.permissionUser=false;
        }else {
          this.permissionQT=false;
          this.permissionUser=true;
        }
      }
    }else{
      this.showmenu=false;
      this.permissionQT=false;
      this.permissionUser=false;
    }
  }
  
  ngOnInit(): void {
 
  }

}
