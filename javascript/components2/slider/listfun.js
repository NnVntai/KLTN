class list_fun extends HTMLElement {
    constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    });
    
    }
    connectedCallback() {
      this.render();
      this.shadowRoot.getElementById('addbutton').innerHTML="";
      let headerss = new Headers();
      headerss.append('Content-Type', 'application/json');
      headerss.append('Access-Control-Allow-Origin', 'http://localhost:8000');
      headerss.append('Accept', 'application/json');
      headerss.append('GET', 'POST', 'OPTIONS');
    
      const options={
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({ idHeThong: config.idHeThong, idNguoiDanhGia:config.id }),
        headers: headerss
    };
    fetch('http://127.0.0.1:8000/api/getchucnangdanhgianguoidungs',options).then(response => response.json())
    .then(json => {
     for (let i = 0; i < json.length; i++) {
        json[i].stt=i;
        const lichucnang=document.createElement("li");
        lichucnang.setAttribute('class', 'addli');
        this.shadowRoot.getElementById('addbutton').appendChild(lichucnang);
        const divbutton=document.createElement("div");
        divbutton.setAttribute('class', 'button');
        const auto=this.shadowRoot.querySelectorAll('.addli')[i].appendChild(divbutton);
        const sss= document.createElement("button-chucnang");
        sss.datasets=json[i];
        const auto2= this.shadowRoot.querySelectorAll('.button')[i].appendChild(sss);  
     }
     }).catch(error => console.log('Authorization failed: ' + error.message));
    }
    render(){
        this.shadowRoot.innerHTML = `
        <style>
        .listchucnang {
          top:25%;
          width: 100%;
          margin: auto;
          position: absolute;
      }
      .showchucnang{
          margin: auto;
          overflow: hidden;
          margin-right: 50px;
        
      }
      .listchucnang ul {
           width: 1000000px;
           transition: 2000ms;
      }
      .listchucnang ul li{
          float: left;
          overflow: hidden;
          list-style: none;
      }
      .listchucnang ul li .button{
          width: 308px;
          height: 350px;
          margin-left: 2px;
          margin-right: 2px;
          border-radius: 5px;
      }
      .listchucnang ul li .click{
          width: 30px;
      }
      
      @media only screen and (min-width: 600px) {
          /* For tablets: */
          
        } 
        </style>
          <diV class="listchucnang" >
          <div class="showchucnang" id="changelist">
              <ul id="addbutton">
                
              </ul>
          </div>
      </div>
    `;
   

    }

   }
   customElements.define('list-fun',list_fun);