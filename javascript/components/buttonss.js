class exit_table extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.render();
    }
    connectedCallback() {
    }
    render(){
        this.shadowRoot.innerHTML = `
        <style>
        .exit_table{
            font-size: 30px;
            height: 50px;
            float:right;
            border-radius: 10px;
            background: white;
            color:black;
        }
        .exit_table:hover {
            background: white;
            color:red;
            border:none;
        }
        </style>
        <button class="exit_table">X</button>
    `;
    }
   }
class button_table extends HTMLElement {
    constructor() {
      super();
      this.title=this.getAttribute('title')||'';
      this.text=this.getAttribute('text')||'';
      this.name=this.getAttribute('name')||'';
      this.attachShadow({
          mode: 'open'
        });
    }
    connectedCallback() {
      this.abc=0;
      this.render();
      this.click_rate();
    }
    render()
    {
        this.shadowRoot.innerHTML=`
        <style>
        .button_table{
            font-size: 20px;
            height: 50px;
            width:200px;
            border-radius: 10px;
            background: white;
            color:black;
        }
        .button_table:hover {
            background: white;
            color:red;
        }
        .text_bottom_button{
            text-align: center;
            width:200px;
        }
        .group_button_view{
            width:210px;
            display: inline-block;
        }
        </style>
        
        <div class="group_button_view">
          <slot name="add-table-view-2">
          </slot>
          <button class="button_table"> ${this.title}</button>
          </br>
          <p class="text_bottom_button">${this.text}</p>
        </div>
        `;
    }
    
    click_rate(index)
    {
      // console.log( this.shadowRoot.querySelector('.button_table'));
         this.shadowRoot.querySelector('.button_table').addEventListener('click',event=>{
        //  console.log(this.querySelector('button-tables div').querySelector('table-view-2').shadowRoot.querySelector('.over_table_view2').style.display);
          try {
            this.querySelector('button-tables div').querySelector('table-view-2').shadowRoot.querySelector('.over_table_view2').style.display='block';
          } catch (error) {
            console.log('table-view-2 tag does not exist');
          }
      });
      
    }
   }
class button_open extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
      this.opentable=false;
      this.render();
     
    }
    connectedCallback() {
   
    }
    render()
    {
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
      <div class="open" id="open2">
          <button id="hello" ><i class="material-icons">star_border</i> Đánh giá</button>
      </div>
      `;
      this.shadowRoot.getElementById('hello').onclick =e=>{

        const sss= document.createElement("lable-table");
        sss.datasets={
          data:2,
          hhh:2
        };
        this.shadowRoot.getElementById('open2').appendChild(sss);
        danhgia.kieua=false;
        danhgia.hellotai="chao may";
    }}

   }
class button_send extends HTMLElement {
    constructor() {
    super();
      let sup = `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <style>
      .center{
        width:300px;
        margin-left:auto;
        margin-right:auto;
      }
      .button_send{
          font-size: 30px;
          height: 50px;
          width:300px;
          margin-left:auto;
          margin-right:auto;
          border-radius: 10px;
          background: white;
          color:black;
      }
      .button_send:hover {
          background: white;
          color:green;
      }
      </style>
      <div class="center">
      <button class="button_send"><i class="fa fa-envelope" style="font-size:36px"></i> Gửi Khảo Sát</button>
      </div>
      `;

    this.attachShadow({
      mode: 'open'
    }).innerHTML=sup;

    }
    connectedCallback() {

    this.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    .button_send{
        font-size: 30px;
        height: 50px;
       
        border-radius: 10px;
        background: white;
        color:black;
    }
    .button_send:hover {
        background: white;
        color:green;
    }
    </style>
    <button class="button_send"><i class="fa fa-envelope" style="font-size:36px"></i> Gửi Khảo Sát</button>
    `;
    }

   }
class stars_rate extends HTMLElement {
    constructor() {
    super();
    let temlate = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <style>
   
   .checked {
       color: orange;
     }
     div.stars {
       width: 270px;
       display: inline-block;
     }
     input.star { display: none; }
     
     label.star {
       float: right;
       padding: 10px;
       font-size: 36px;
       color: #444;
       transition: all .2s;
     }
     input.star:checked ~ label.star:before {
       content: '\f005';
       color: #FD4;
       transition: all .25s;
     }
     input.star-5:checked ~ label.star:before {
       color: #FE7;
       text-shadow: 0 0 20px #952;
     }
     input.star-4:checked ~ label.star:before {
       color: #FE7;
       text-shadow: 0 0 20px #952;
     }
     input.star-3:checked ~ label.star:before {
       color: #FE7;
       text-shadow: 0 0 20px #952;
     }
     input.star-2:checked ~ label.star:before {
       color: #FE7;
       text-shadow: 0 0 20px #952;
     }
     input.star-1:checked ~ label.star:before { color: #F62; } 
     label.star:hover { transform: rotate(-15deg) scale(1.3); }
     label.star:before {
       content: '\f006';
       font-family: FontAwesome;
     }
     .border_rate{
    border-radius:10px;
       border: 4px solid red;
       float:left;
     }
   </style>
   <div class="border_rate">
       <h2 style="float:left;width:200px">${this.title}</h2>
       <div class="stars">
           <input class="fa fa-star star star-5" id="star-5" type="radio" name="star"/>
           <label class="fa fa-star star star-5" for="star-5"></label>
           <input class="fa fa-star star star-4" id="star-4" type="radio" name="star"/>
           <label class="fa fa-star star star-4" for="star-4"> </label>
           <input class="fa fa-star star star-3" id="star-3" type="radio" name="star"/>
           <label class="fa fa-star star star-3" for="star-3"></label>
           <input class="fa fa-star star star-2" id="star-2" type="radio" name="star"/>
           <label class="fa fa-star star star-2" for="star-2"></label>
           <input class="fa fa-star star star-1" id="star-1" type="radio" name="star"/>
           <label class="fa fa-star star star-1" for="star-1"></label>
       </div>
   </div>

 `;
    // this.render();
    this.attachShadow({
      mode: 'open'
    }).innerHTML=temlate;
 
    this.title=this.getAttribute('title')||'';
    this.name=this.getAttribute('name')||'';
    this.click_rate();
      // this.render();
    }
    connectedCallback() {
     
    }
    click_rate(){

      this.setAttribute("value","");
      for (let i = 0; i < this.shadowRoot.querySelectorAll('label').length; i++) {
          this.shadowRoot.querySelectorAll('label')[i].addEventListener('click', ()=>{
           this.setAttribute("value",this.shadowRoot.querySelectorAll('label')[i].classList[3].slice(5,6));
          })
        
      }
    //  console.log(this.shadowRoot.querySelectorAll('label')[2].classList[3].slice(5,6));
    }
  
  }
class button_slide extends HTMLElement {
  constructor() {
  super();
  this.attachShadow({mode: 'open'});
  this.render();
  }
  connectedCallback() {
  }
  render()
  {
    this.shadowRoot.innerHTML = `
    <style>
    
    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 2px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
    }
    .dot:hover {
      background-color: #717171;
    } 
    </style>
    <span class="dot dot_${this.getAttribute('index')}"></span>
    `;
  }
  }

customElements.define('button-slide', button_slide); 
customElements.define('stars-rate', stars_rate); 
customElements.define('button-send', button_send); 
customElements.define('button-open', button_open); 
customElements.define('button-exit-table', exit_table); 
customElements.define('button-tables', button_table);