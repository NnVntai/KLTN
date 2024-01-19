class buttonchucnang extends HTMLElement {
    datasets={};
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
        let sum=0;
        let  index=0;
        const data=this.datasets;
        if(data.DanhGia[0])
        {
        for (let i = 0; i < data.DanhGia[0].chiTietDanhGia.length; i++) {
                if(data.DanhGia[0].chiTietDanhGia[i].idKieuDanhGia==2)
                {
                    index++;
                    sum+=Number(data.DanhGia[0].chiTietDanhGia[i].ketQuaDanhGia);
                }
           }
        }
        if(data.stt%2)
        {   
            this.text=[];
            this.text[(sum/index).toFixed()]="checked";
             this.trangThaiDanhGiachua='<div>(chưa đánh giá)</div>';
             this.trangThaiDanhGia=` <div>
            <div class="button">
                <input type="radio" ${this.text[5]||""} id="star5" name="rate" value="5"  /> 
                <label  for="star5" > <i class="material-icons">star</i> </label>
                <input type="radio" ${ this.text[4]||""} id="star4" name="rate" value="4" /> 
                <label  for="star4" > <i class="material-icons">star</i> </label>
                <input type="radio" ${ this.text[3]||""} id="star3" name="rate" value="3" /> 
                <label  for="star3" > <i class="material-icons">star</i> </label>
                <input type="radio" ${this.text[2]||""} id="star2" name="rate" value="2" /> 
                <label  for="star2" > <i class="material-icons">star</i> </label>
                <input type="radio" ${ this.text[1]||""} id="star1" name="rate" value="1" /> 
                <label  for="star1" > <i class="material-icons">star</i></label>
            </div></div>`;
            this.showdanhgia1=` <div > ${data.mucDich||""}</div>`;
            if(data.DanhGia.length>0)
            {
                this.showdanhgia1= this.showdanhgia1+this.trangThaiDanhGia;
        
            }else {
                this.showdanhgia1= this.showdanhgia1+this.trangThaiDanhGiachua+this.trangThaiDanhGia;
            }
            this.showdanhgia2=""
        }else{
            this.text=[];
            this.text[(sum/index).toFixed()]="checked";
             this.trangThaiDanhGiachua='   <div>(chưa đánh giá)</div>';
             this.trangThaiDanhGia=` <div>
            <div class="button">
                <input type="radio" ${this.text[5]||""} id="star5" name="rate" value="5"  /> 
                <label  for="star5" > <i class="material-icons">star</i> </label>
                <input type="radio" ${ this.text[4]||""} id="star4" name="rate" value="4" /> 
                <label  for="star4" > <i class="material-icons">star</i> </label>
                <input type="radio" ${ this.text[3]||""} id="star3" name="rate" value="3" /> 
                <label  for="star3" > <i class="material-icons">star</i> </label>
                <input type="radio" ${this.text[2]||""} id="star2" name="rate" value="2" /> 
                <label  for="star2" > <i class="material-icons">star</i> </label>
                <input type="radio" ${ this.text[1]||""} id="star1" name="rate" value="1" /> 
                <label  for="star1" > <i class="material-icons">star</i></label>
            </div></div>`;
           this.showdanhgia2=` <div >  ${ data.mucDich||""}</div>`;
           if(data.DanhGia.length>0)
           {
               this.showdanhgia2= this.showdanhgia2+this.trangThaiDanhGia;
           }else {
            this.showdanhgia2= this.showdanhgia2+this.trangThaiDanhGiachua+this.trangThaiDanhGia;
           }
           this.showdanhgia1=""
        }

        this.shadowRoot.innerHTML = `
        <style>
        .buttonchucnang {
            width: 100%;
            height: 100%;
            text-align: center;
        }
        .buttonchucnang button{
            width: 90%;
            height: 20%;
            font-size: 30px;
            border-radius: 3px;
            border: 1px solid rgb(26, 27, 26);
            transition: 1000ms;
            overflow: hidden;
        }
        .buttonchucnang:hover button{
            background-color: rgb(135, 138, 98) ;
        }
        .buttonchucnang .mucdich {
            overflow: hidden;
            font-size: 20px;
            width: 100%;
            height: 40%;
        }
        
        /*  */
        .button{
        
            vertical-align: middle;
            width: 80%;
            height: 100%;
        
        }
        .button i{
            font-size: 30px;
            margin-left: 5px;
            margin-right: 5px;
            width: 30px;
            height: 30px;
        }
         .button i:hover{
            background: yellow;
            transition: 1000ms;
        }
        
        .button:not(:checked) > input {
            position:absolute;
            top:-9999px;
        }
        .button:not(:checked) >label {
            float:right;
            overflow:hidden;
            white-space:nowrap;
            cursor:pointer;
            font-size:10-0px;
            color:#ccc;
        }
        .button > input:checked ~ label {
            color: #ffc700; 
            font-size:40px;
        }
        .button:not(:checked) > label:hover,
        .button:not(:checked) > label:hover ~ label {
            color: #deb217;  
            font-size:40px;
        }
        .button > input:checked + label:hover,
        .button > input:checked + label:hover ~ label,
        .button > input:checked ~label:hover,
        .button > input:checked ~ label:hover ~ label,
        .button > label:hover ~ input:checked ~ label {
            color: #c59b08;
            font-size: 30px; 
        }
        </style>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <div class="buttonchucnang">

           <div  class="mucdich">
           `+this.showdanhgia1+
       `
        </div>
            <button id="modanhgiachitiet">${data.tenChucNang}</button>
            <div class="mucdich">
            `+this.showdanhgia2+`
        </div>
        </div>
    `;
    this.shadowRoot.getElementById('modanhgiachitiet').onclick =e=>{
        const danhgia=document.createElement('table-child');
        danhgia.datasets=data;
        document.querySelector('table-parent').shadowRoot.getElementById('showthongtinchitiet').appendChild(danhgia);
    };

    }
   }
   customElements.define('button-chucnang',buttonchucnang);