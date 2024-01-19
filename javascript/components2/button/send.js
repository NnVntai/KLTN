class button_send extends HTMLElement {
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
    
        this.shadowRoot.innerHTML = `
        <style>
        .send 
        {
            margin: 20px;
            width: 100%;
            height: 50px;
            display: inline-block;
        }
        .send .over 
        {
            width: 300px;
            margin: auto;
            height: 100%;
        }
        .send .over button{
            font-size: 20px;
            
            width: 100%;
            height: 100%;
            border: 3px solid green;
            border-radius: 5px ;
        }
        .send .over button:hover{
            border: 3px solid blue;
            background: rgb(226, 223, 217);
        }
        </style>
        <div class="send">
        <div class="over">
            <button id="senddanhgia">
              ${ 'Gửi đánh giá'}
            </button>
        </div>
    
    </div>
    `;
    this.shadowRoot.getElementById('senddanhgia').onclick =e=>{
      if(confirm("Bạn có muốn gửi đánh giá")){
      const chiTietDanhGia=[];
      const kiemtranoidung=document.querySelector('table-parent').shadowRoot.querySelector('table-child');
      if(kiemtranoidung.iddanhgia!=0)
      {
            const text=document.querySelector('table-parent').shadowRoot.querySelector('table-child').shadowRoot.querySelectorAll('text-l');
            for (let i = 0; i < text.length; i++) {
              chiTietDanhGia.push(text[i].noidungchiietdanhgia);   
            }
            const button=document.querySelector('table-parent').shadowRoot.querySelector('table-child').shadowRoot.querySelectorAll('button-star');
            for (let i = 0; i < button.length; i++) {
              chiTietDanhGia.push(button[i].noidungchiietdanhgia);   
            }
            const idchucnang=document.querySelector('table-parent').shadowRoot.querySelector('table-child');
          
            let headerss = new Headers();
            headerss.append('Content-Type', 'application/json');
            headerss.append('Access-Control-Allow-Origin', 'http://localhost:8000');
            headerss.append('Accept', 'application/json');
            headerss.append('GET', 'POST', 'OPTIONS');
            const options={
              mode: 'cors',
              method: 'POST',
              body: JSON.stringify({ 
                id:kiemtranoidung.iddanhgia,
                idNguoiDungDanhGia:config.id ,
                idChucNang:idchucnang.datasets.id ,
                ngayDanhGia:new Date(),
                chiTietDanhGia:chiTietDanhGia}),
              headers: headerss
          };
          fetch('http://127.0.0.1:8000/api/capnhatdanhgianguoidung',options).then(response => response.json())
          .then(json => {
              if(json==1)
              {
                alert("Gửi thông tin đánh giá thành công");
                const e2 = document.querySelector("table-parent").shadowRoot.querySelector('table-child');
                e2.remove();
                const e3 = document.querySelector("table-parent").shadowRoot.querySelector("list-fun")
                e3.connectedCallback();
              }else{
                alert("Gửi thông tin đánh giá không thành công");
              }
          }).catch(error => console.log('Authorization failed: ' + error.message)); 
      }else{
            const text=document.querySelector('table-parent').shadowRoot.querySelector('table-child').shadowRoot.querySelectorAll('text-l');
            for (let i = 0; i < text.length; i++) {
              chiTietDanhGia.push(text[i].noidungchiietdanhgia);   
            }
            const button=document.querySelector('table-parent').shadowRoot.querySelector('table-child').shadowRoot.querySelectorAll('button-star');
            for (let i = 0; i < button.length; i++) {
              chiTietDanhGia.push(button[i].noidungchiietdanhgia);   
            }
            const idchucnang=document.querySelector('table-parent').shadowRoot.querySelector('table-child');
          
            let headerss = new Headers();
            headerss.append('Content-Type', 'application/json');
            headerss.append('Access-Control-Allow-Origin', 'http://localhost:8000');
            headerss.append('Accept', 'application/json');
            headerss.append('GET', 'POST', 'OPTIONS');
            const options={
              mode: 'cors',
              method: 'POST',
              body: JSON.stringify({ 
                id:0,
                idNguoiDanhGia:config.id ,
                idChucNang:idchucnang.datasets.id ,
                ngayDanhGia:new Date(),
                chiTietDanhGia:chiTietDanhGia}),
              headers: headerss
          };
          fetch('http://127.0.0.1:8000/api/insertdanhgianguoidung',options).then(response => response.json())
          .then(json => {
              if(json==1)
              {
                alert("Gửi thông tin đánh giá thành công");
                const e2 = document.querySelector("table-parent").shadowRoot.querySelector('table-child');
                e2.remove();
                const e3 = document.querySelector("table-parent").shadowRoot.querySelector("list-fun")
                e3.connectedCallback();
              }else{
                alert("Gửi thông tin đánh giá không thành công");
              }
           }).catch(error => console.log('Authorization failed: ' + error.message)); 
    }
  }}
    }
   }
   customElements.define('button-send',button_send);