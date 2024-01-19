class app_slide extends HTMLElement {
    constructor() {
   
    super();
    this.with;
    this.list;
    this.attachShadow({
      mode: 'open'
    });
    function click(){
        
    };
    }
    transform(value) {
        let res = [];
        for (let i = 0; i < value; i++) {
            res.push(false);
          }
          return res;
        }
       
    connectedCallback() {
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
        <style>
        .slider{
          top:80%;
          width: 100%;
          margin: auto;
          position: absolute;
      }
      .slider ul {
          width: 150px;
         margin: auto;
      }
      .slider ul li{
          float: left;
          list-style: none;
      }
      .slider ul li .button{
          background: rgb(128, 135, 241);
          width: 15px;
          height: 10px;
          margin-left: 2px;
          margin-right: 2px;
          border: 1px solid rgb(112, 86, 86) ;
          border-radius: 5px;
      }
      .slider ul li .click{
          background: rgb(2, 18, 236);
          width: 30px;
      }
      
        </style>
        <div class="slider" #myDOMElement id="myDOMElement">
        <ul id="addslide" >
          
        </ul>
    </div>
    `;

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

          if(innerWidth>=1900)
          {     
              this.list=this.transform(Math.ceil(json.length/4));           
          }
          else if(innerWidth>=1476){
            this.list=this.transform(Math.ceil(json.length/3));        
          }else if(innerWidth>=1028){
            this.list=this.transform(Math.ceil(json.length/2));        
          }
          else{
              this.list=this.transform(this.chucnang.length);
          }
          this.shadowRoot.getElementById('addslide').innerHTML="";
          this.list[0]=true
          for (let i = 0; i < this.list.length; i++) {

              const lichucnang=document.createElement("li");
              lichucnang.setAttribute('class', 'addli');
              this.shadowRoot.getElementById('addslide').appendChild(lichucnang);
              this.shadowRoot.querySelectorAll('.addli')[i].addEventListener('click',()=>{
                  const listfuntion=click2(i,this.list);
                  this.list="";
                  this.list=listfuntion;
                  jj(this.list);
              })}
              for (let i = 0; i < this.list.length; i++) {
                this.shadowRoot.querySelectorAll('.addli')[i].innerHTML="";

              const divbutton=document.createElement("div");
              if( this.list[i]==true)
              {
                divbutton.setAttribute('class', 'button click');
              }else{
                divbutton.setAttribute('class', 'button');
              }
              const auto=this.shadowRoot.querySelectorAll('.addli')[i].appendChild(divbutton);
            }
             
function  jj(list)
{
              for (let i = 0; i < list.length; i++) {
                document.querySelector('table-parent').shadowRoot.querySelector('app-slider').shadowRoot.querySelectorAll('.addli')[i].innerHTML="";
              const divbutton=document.createElement("div");
              if( list[i]==true)
              {
                divbutton.setAttribute('class', 'button click');
                const withs= document.querySelector('table-parent').shadowRoot.querySelector('list-fun').shadowRoot.getElementById('addbutton');
                withs.style.marginLeft=String(-340*i)+'px';
              }else{ 
                divbutton.setAttribute('class', 'button');
              }
              document.querySelector('table-parent').shadowRoot.querySelector('app-slider').shadowRoot.querySelectorAll('.addli')[i].appendChild(divbutton);
            }
          }
      }).catch(error => console.log('Authorization failed: ' + error.message));
        }
      }
   

   function click2(value,list)
   {
      
     for (let i = 0; i < list.length; i++) {
       list[i]=false;
     }
    list[value]=true;
    return list;
   //   this.with=330*value;
   //  console.log(this.shadowRoot.querySelectorAll('.addli').remove());
   }
   customElements.define('app-slider',app_slide);