// const danhgia=require('../../components/app');

class button_open extends HTMLElement {
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
      .open button{
        height: 50px;
        display: inline-block;
        font-size: 25px;
        border: 3px solid white;
        border-radius: 5px;
        background-color: beige;
        transition: 2000ms;
    }
    .open button:hover{
        border: 3px solid green;
        background-color: aquamarine;
        transition: 2000ms;
    }
    
      </style>
      <link  rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <div class="open">
          <button id="open" ><i class="material-icons">star_border</i> Đánh giá</button>
      </div>
    `;
  
    this.shadowRoot.getElementById('open').onclick =e=>{
      let headerss = new Headers();
      headerss.append('Content-Type', 'application/json');
      headerss.append('Access-Control-Allow-Origin', 'http://localhost:8000');
      headerss.append('Accept', 'application/json');
      headerss.append('GET', 'POST', 'OPTIONS');
      const options={
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({maKetNoi: config.maketnoi}),
        headers: headerss
    };
    fetch('http://127.0.0.1:8000/api/checkmahethongdanhgia',options).then(response => response.json())
    .then(json => { 
      if(json[0])
      { 
        config.idHeThong=json[0].id;
       const options={
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({maUser:config.mauser,idHeThong:json[0].id}),
        headers: headerss
    };
    fetch('http://127.0.0.1:8000/api/getnguoidanhgia',options).then(response => response.json())
    .then(data => { 
      if(data[0])
      {
        config.id=data[0].id;
        const sss= document.createElement("table-parent");
        document.getElementById('tableparent').appendChild(sss);
      }else{
        const options={
          mode: 'cors',
          method: 'POST',
          body: JSON.stringify({hoTen:config.tennguoidung,maUser:config.mauser,idHeThong:json[0].id}),
          headers: headerss
      };
      fetch('http://127.0.0.1:8000/api/insertnguoidanhgia',options).then(response => response.json())
      .then(data => { 
          config.id=data.id;
          const sss= document.createElement("table-parent");
          document.getElementById('tableparent').appendChild(sss);
      }).catch(error => console.log('Authorization failed: ' + error.message));
      }
    }).catch(error => console.log('Authorization failed: ' + error.message));
      }else{
        alert("vui lòng kiểm tra lại đường dẫn đến hệ thống");
      }
    }).catch(error => console.log('Authorization failed: ' + error.message));
    }
   }}
   customElements.define('button-open',button_open);