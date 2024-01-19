class table_child extends HTMLElement {
    datasets={};
    iddanhgia;
    constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
   
    }
    connectedCallback() {
      this.render();
    }
    render(){
      const data=this.datasets;
        this.shadowRoot.innerHTML = `
        <style>
        .tableadd{
          width: 100%;
          height: 100%;
          z-index: 100;
          position: fixed;
          left: 0;
          top: 0;
          background-color: rgb(0, 0, 0);
          background-color: rgba(0,0,0,0.4);
      }
      .table
      {
          top:5%;
          width: 100%;
          height: 90%;
          background-color: white;
          border-radius: 20px;
          border: 2px solid blue;
      }
      .outtable{
          top:5%;
          width: 90%;
          height: 95%;
          position: absolute;
          transform: translateY(-40%);
          transform: translateX(5%);
      }
      .headertable{
          width: 100%;
          text-align: center;
      
      }
      .headertable button{
          background: rgb(255, 255, 255);
          color: rgb(0, 5, 8);
          border: 1px solid rgb(0, 0, 0);
          border-radius: 6px;
          float: right;
          width: 40px;
          font-size: 20px;
          height: 40px;
          margin-top: 5px;
          margin-right: 5px;
          transition: 1000ms;
      }
      .headertable button:hover{
          background-color: rgb(56, 47, 134);
          color: rgb(223, 229, 233);
          border: 1px solid rgb(241, 132, 132);
      }
      .headertable .text-header {
          margin-top: 20px;
          margin-left: 50px;
          width: 85%;
          float: left;
          word-wrap: break-word;
          font-size: 30px;
          transition: 1000ms;
      }
      .text-header .showthongbao{
          width: 60%;
          margin: auto;
          height: 100%;
          background: rgb(95, 95, 233);
          border: 2px solid blue;
          border-radius: 30px;
          color: rgb(235, 239, 243);
      }
      .headertable .text-header:hover{
          
          transition: 1000ms;
      }
      .bodytable{
          width: 100%;
      }
      
        </style>
        <div  *ngIf="tableopen" class="tableadd">
        <div class="outtable">
            <div class="table">
                <div class="headertable">
                    <div class="text-header"><div class="showthongbao">${ data.tenChucNang }</div></div>
                     <button id="clickout">X</button>
                </div>
                <div id='childtable'>
                            
                </div>
                <button-send> </button-send>
            </div>1
        </div>
    </div>
    
    `;
    this.shadowRoot.getElementById('clickout').onclick =e=>{
      const e2 = document.querySelector("table-parent").shadowRoot.querySelector('table-child');
      e2.remove();
    }
    const noidungdanhgia=this.shadowRoot.getElementById('childtable');
    let headerss = new Headers();
    headerss.append('Content-Type', 'application/json');
    headerss.append('Access-Control-Allow-Origin', 'http://localhost:8000');
    headerss.append('Accept', 'application/json');
    headerss.append('GET', 'POST', 'OPTIONS');
 
    const options={
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({ idChucNang: data.id, idNguoiDanhGia:config.id }),
      headers: headerss
  };
  fetch('http://127.0.0.1:8000/api/getgiaodienDanhGiaiChucNang',options).then(response => response.json())
  .then(json => {
    if(json[0])
    {
      this.iddanhgia=json[0].id;
      if(json[0].chiTietDanhGia.length>0)
      {
          for (let i = 0; i < json[0].chiTietDanhGia.length; i++) {

              if(json[0].chiTietDanhGia[i].idKieuDanhGia==1)
              {
                const danhgia=document.createElement('text-l');
                danhgia.noidungchiietdanhgia={
                  tenDanhGia:json[0].chiTietDanhGia[i].tenDanhGia,
                  id:json[0].chiTietDanhGia[i].id,
                  idKieuDanhGia:json[0].chiTietDanhGia[i].idKieuDanhGia,
                  ketQuaDanhGia:json[0].chiTietDanhGia[i].ketQuaDanhGia
                  };
                this.shadowRoot.getElementById('childtable').appendChild(danhgia);
              }else if(json[0].chiTietDanhGia[i].idKieuDanhGia==2)
              {
                const danhgia=document.createElement('button-star');
                danhgia.noidungchiietdanhgia={
                  tenDanhGia:json[0].chiTietDanhGia[i].tenDanhGia,
                  id:json[0].chiTietDanhGia[i].id,
                  idKieuDanhGia:json[0].chiTietDanhGia[i].idKieuDanhGia,
                  ketQuaDanhGia:json[0].chiTietDanhGia[i].ketQuaDanhGia
                  };
                this.shadowRoot.getElementById('childtable').appendChild(danhgia);
              }
          }
      }else {
    
      }
  }
  else {
    this.iddanhgia=0;
    const options={
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({ idHeThong:config.idHeThong }),
      headers: headerss
  };
  fetch('http://127.0.0.1:8000/api/getgiaodiendanhgianoidung',options).then(response => response.json())
  .then(json => {
            for (let i = 0; i < json.length; i++) {
                  if(json[i].idKieuDanhGia==1)
                  {
                    const danhgia=document.createElement('text-l');
                    danhgia.noidungchiietdanhgia={
                      tenDanhGia:json[i].tenDanhGia,
                      id:json[i].id,
                      idKieuDanhGia:json[i].idKieuDanhGia,
                      ketQuaDanhGia:json[i].ketQuaDanhGia
                      };
                    this.shadowRoot.getElementById('childtable').appendChild(danhgia);
                  }else if(json[i].idKieuDanhGia==2)
                  {
                    const danhgia=document.createElement('button-star');
                    danhgia.noidungchiietdanhgia={
                      tenDanhGia:json[i].tenDanhGia,
                      id:json[i].id,
                      idKieuDanhGia:json[i].idKieuDanhGia,
                      ketQuaDanhGia:json[i].ketQuaDanhGia
                      };
                    this.shadowRoot.getElementById('childtable').appendChild(danhgia);       
                  }
                }

  }).catch(error => console.log('Authorization failed: ' + error.message)); 
  }
  }).catch(error => console.log('Authorization failed: ' + error.message)); 
}
   }
   customElements.define('table-child',table_child);