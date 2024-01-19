import { Component } from '@angular/core';
import { Configx } from "../app/service/config";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer';
  constructor(private data:Configx)
  {
      this.data.ConnetDanhGia.MaHeThong="yGTk94YGQJgobAkEa1iLVcjqYnjYHJlB7sZbnNTGxj5jBeoDzj";
      this.data.ConnetDanhGia.TenNguoiDung="Nguyen van a";
      this.data.ConnetDanhGia.ManguoiDung="1";
  }
}
