// import send_f from "./app";

class table_view extends HTMLElement {
    constructor() {
    super();
    // this.attachShadow({mode: 'closed'}); 
    this.render();
    this.open_table();
    this.opentable=false;
    }
    connectedCallback() {
        
    }
    render()
    {
        this.innerHTML = `
        <style>
        .buttons{
            background: red;
            width:100%;
            float:left;
            height:50px;
        }
        .over_table_view{
            display:none;
            position: fixed;
            z-index: 1;
            padding-top: 100px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0,0,0);
            background-color: rgba(0,0,0,0.4);
        }
        .table_view {
            background: #F0F8FF;
            width: 1000px;
            height: 600px;
            margin: auto;
        }
        </style>
    
        <div class="over_table_view" >
            <div class="table_view" >
            `+this.innerHTML+`
            </div>
        </div>
        `;
    }
    open_table()
    { 
        document.querySelector('button-open').addEventListener('click',()=>{
          if(this.opentable)
          {
            this.opentable=!this.opentable;
            const length_table=document.querySelectorAll('table-view')[0].querySelector('.over_table_view');
            length_table.style.display="none";
          }else{
            this.opentable=!this.opentable;
            const length_table=document.querySelectorAll('table-view')[0].querySelector('.over_table_view');
            length_table.style.display="block";
          }
        });
        document.querySelector('button-exit-table').addEventListener('click',()=>{
            if(this.opentable)
            {
              this.opentable=!this.opentable;
              const length_table=document.querySelectorAll('table-view')[0].querySelector('.over_table_view');
              length_table.style.display="none";
            }else{
              this.opentable=!this.opentable;
              const length_table=document.querySelectorAll('table-view')[0].querySelector('.over_table_view');
        
              length_table.style.display="block";
            }
          });
        //   console.log( document.querySelector('table-view').querySelectorAll('button-tables'));
        // var i=0;
        // document.querySelectorAll('button-tables').forEach(item2 => {
        //   // console.log(item2.querySelector('.button_table'));
        //   item2.addEventListener('click', event => {
        //       console.log(item2.querySelectorAll('table-view-2')[i].shadowRoot.querySelector('.over_table_view2'));
        //       console.log('he');
        //       item2.querySelectorAll('table-view-2')[i].shadowRoot.querySelector('.over_table_view2').style.display='block';
        //       i++;
             
        //   })
        // })
        //     const arr= document.querySelectorAll('button-tables');
 
        //   console.log(arr[0].querySelector('.button_tables'));
          
        //   for (let i2 = 0;i2 < arr.length; i2++) {
        //         arr[i2].addEventListener('click', ()=>{
        //             // document.querySelectorAll('table-view-2')[i2].shadowRoot.querySelector('.over_table_view2').style.display='block';
        //         })
        //        // document.querySelector('table-view-2')[i2].shadowRoot.querySelector('.over_table_view2').style.display='block';
            
        //   }
    }
   }
class table_view_2 extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({mode: 'open'}); 
    this.render();
    this.open_table();
    // this.opentable=false;
    }
    connectedCallback() {
        
    }
    render()
    {
        this.shadowRoot.innerHTML = `
        <style>
        .buttons2{
            background: red;
            width:100%;
            float:left;
            height:50px;
        }
        .over_table_view2{
            display:none;
            position:absolute;
            z-index: 2;
            padding-top: 100px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0,0,0);
            background-color: rgba(0,0,0,0.4);
        }
        .table_view2 {
            background: #F0F8FF;
            width: 800px;
            height: 700px;
            margin: auto;
        }
        </style>
        <div class="over_table_view2" >
            <div class="table_view2" >
                <slot name="intable">

                </slot>
            </div>
        </div>
        `;
    }
    open_table()
    { 
        this.querySelector('button-exit-table').addEventListener('click',()=>{
            // console.log(this.shadowRoot.querySelector('.over_table_view2').style.display);
            if(this.shadowRoot.querySelector('.over_table_view2').style.display=="block")
            {
              const length_table=this.shadowRoot.querySelector('.over_table_view2');
              length_table.style.display="none";
            }else{
              const length_table=this.shadowRoot.querySelector('.over_table_view2');
              length_table.style.display="block";
            }
          });
          var rate_value=[];
          var rate_value_name=[];
        var rate_text=[];
        var rate_text_name=[];
        // send(file_send);
          this.querySelector('button-send').addEventListener('click',()=>{
            const arr_rate=this.querySelectorAll('stars-rate');
            for (let i = 0; i < arr_rate.length; i++) {
                rate_value.push(arr_rate[i].getAttribute('value'));
                rate_value_name.push(arr_rate[i].getAttribute('name'));
                 // file_send["input_"+arr_rate[i].getAttribute('name')]=arr_rate[i].getAttribute('value'); 
            }
            const arr_input=this.querySelectorAll('input-table');
            for (let i = 0; i < arr_input.length; i++) {
                rate_text.push(arr_input[i].getAttribute('value'));
                rate_text_name.push(arr_input[i].getAttribute('name'));
                // file_send["input_"+arr_input[i].getAttribute('name')]=arr_input[i].getAttribute('value'); 
            }
            const arr_text=this.querySelectorAll('textarea-table');
            for (let i = 0; i < arr_text.length; i++) {
                rate_text.push(arr_text[i].shadowRoot.querySelector('.textarea_table').value);
                rate_text_name.push(arr_text[i].getAttribute('name'));
                // file_send["txt_"+arr_text[i].getAttribute('name')]=arr_text[i].shadowRoot.querySelector('.textarea_table').value; 
            }
            var file_send={
                "name_user":"nguyen van tai",
                "id_user":"12",
                "id_chucnang":this.getAttribute('name'),
                "name_chucnang":this.querySelector("lable-table").getAttribute('title'),
                "rate_value":rate_value,
                "rate_value_name":rate_value_name,
                "rate_text":rate_text,
                "rate_text_name":rate_text_name,
                    
        };
            console.log(file_send);
            send(file_send);
          });
    }
   }
 class list_button extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
         this.renderd();
         this.button_width(); 
         this.update_button_width(0);
         this.getwidthsile();
    }
    renderd()
    {
        this.shadowRoot.innerHTML = `
        <style>
        .sile_button_list
        {
            margin-left:auto;
            margin-right:auto;
            width: 850px;
            overflow: hidden;
        }
        .button_list{
            transition: 1s;
            margin-top:250px;
            margin-left: 0px;
            height:130px;
            float:left;
        }
        </style>
        <div class="sile_button_list">
            <div class="button_list" >
                 <slot  name="list-button"  ></slot>
            </div>
        </div>
        `;
    }
    button_width(){
        const chao=document.querySelector('list-button').querySelectorAll('button-tables').length;
        const hello2=document.querySelector('list-button').shadowRoot.querySelector('.button_list');
        // console.log(chao);
         hello2.style.width= ''+220*chao+'px' ;
        // console.log(hello2.style.width);
    }
    update_button_width(index){
        const hello3=document.querySelector('list-button').shadowRoot.querySelector('.button_list');
        hello3.style.marginLeft= '-'+index+'px' ;
    }
    getwidthsile()
    {
        return document.querySelector('list-button').shadowRoot.querySelector('.button_list');
    }
   } 
class sile_change extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.render();
    }
    connectedCallback() {
        this.set_button();
        this.change_line(0);
        this.change_siler();
    }
    set_button()
    {
        const list_butto2=new list_button();
        const width_button=list_butto2.getwidthsile();
        if(width_button!=null)
        {
            // console.log(width_button.style.width);
            const sile_2=this.shadowRoot.querySelector('.view_button_sile') ;
            let loat=Number(width_button.style.width.toString().slice(0,width_button.style.width.toString().search('px')))/(880);
            // console.log(width_button.style.width.toString().slice(0,width_button.style.width.toString().search('px')));
            if((loat%1)!=0)
            {
                loat=loat+1;
            }
            for (let i = 0; i < loat.toFixed(); i++) {
                sile_2.innerHTML+=`<button-slide index=`+i+`></button-slide>`;
            } 
       }
    }
     change_line(index)
    {  
        const list_butto=new list_button();
        list_butto.update_button_width(index);
    }
    change_siler()
    {
        // this.shadowRoot.querySelector('button-slide').addEventListener('click',(e)=>{
        //     this.change_line(-300);
        //     console.log(e);
        // });
        this.shadowRoot.querySelectorAll('button-slide').forEach(item => {
            item.addEventListener('click', event => {
                // console.log(item);
                this.change_line(((Number(item.shadowRoot.querySelector('.dot').className.toString().slice(8,9)))*850));
                // console.log((Number(item.shadowRoot.querySelector('.dot').className.toString().slice(8,9))+1));
                
                const list_butto2=new list_button();
                const width_button=list_butto2.getwidthsile();
                // console.log(width_button.style.marginLeft);
            })
          })
    }
    

    render()
    {
        this.shadowRoot.innerHTML=`
        <style>
        .view_button_sile{
            text-align:center;
        }
            .botton_sile{
                width: 800px;
                margin-right:auto;
                margin-left:auto;
                position: absolute;
                top: 60%;
                left: 50%;
                transform: translate(-50%, -50%);
             }
            
        </style>
        <div class="botton_sile">
            <div class="view_button_sile">
            </div>
        </div>
        `;
    }
   }
class list_rate extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
         this.renderd();
        //  this.button_width(); 
        //  this.update_button_width(0);
        //  this.getwidthsile();
    }
    renderd()
    {
        this.shadowRoot.innerHTML = `
        <style>
        .list_rate2
        {
            margin-left:auto;
            margin-right:auto;
            width:500px;
        }
        .list_rate{
            height:80px;
        }
        </style>
        <div class="list_rate2">
            <div class="list_rate" >
                 <slot  name="list_add"  ></slot>
            </div>
        </div>
        `;
    }
    // button_width(){
    //     const chao=document.querySelector('list-button').querySelectorAll('button-tables').length;
    //     const hello2=document.querySelector('list-button').shadowRoot.querySelector('.button_list');
    //     // console.log(chao);
    //      hello2.style.width= ''+220*chao+'px' ;
    //     // console.log(hello2.style.width);
    // }
    // update_button_width(index){
    //     const hello3=document.querySelector('list-button').shadowRoot.querySelector('.button_list');
    //     hello3.style.marginLeft= '-'+index+'px' ;
    // }
    // getwidthsile()
    // {
    //     return document.querySelector('list-button').shadowRoot.querySelector('.button_list');
    // }
   } 
   customElements.define('list-rate',list_rate);
   customElements.define('table-view-2',table_view_2);
   customElements.define('sile-change', sile_change); 
   customElements.define('list-button', list_button); 
   customElements.define('table-view', table_view); 
