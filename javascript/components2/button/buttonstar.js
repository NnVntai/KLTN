class button_star extends HTMLElement {
    noidungchiietdanhgia;
    text;
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
      // console.log(this.noidungchiietdanhgia);
      this.noidungchiietdanhgia.idKieuDanhGia=2;
      this.text=[];

      this.text[ Number(this.noidungchiietdanhgia.ketQuaDanhGia) ]="checked";
        this.shadowRoot.innerHTML = `
        <style>
        .star-button{
          margin: 10px;
          width: 100%;
          height: 60px;
          display: inline-block;
      }
      .star-button .over-star {
          width: 70%;
          margin: auto;
          height: 100%;
          border: 3px solid gray;
      }
      .star-button .over-star label.text {
          background: rgb(243, 214, 177);
          float: left;
          padding: 10px;
          font-size: 30px;
          width: 40%;
          overflow: hidden;
          vertical-align: middle;
          
      }
      .star-button .over-star .button{
          padding: 10px;
          vertical-align: middle;
          float: left;
          width: 40%;
          height: 100%;
      }
      .star-button .over-star .button i{
          font-size: 40px;
          margin-left: 5px;
          margin-right: 5px;
          width: 40px;
          height: 40px;
      }
      .star-button .over-star .button i:hover{
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

<div class="star-button">
    <div class="over-star">
        <label class="text">${this.noidungchiietdanhgia.tenDanhGia}</label>
        <form >
        <div class="button">
            <input   type="radio"${this.text[5]||''} id="star5" name="rate" value="5"  /> 
            <label  for="star5" >  <i class="material-icons">star</i></label>
           
            <input  ${this.text[4]||''} type="radio"  id="star4" name="rate" value="4" /> 
            <label  for="star4" > <i class="material-icons">star</i></label>
       
            <input type="radio" ${this.text[3]||''} id="star3" name="rate" value="3" /> 
            <label  for="star3" ><i class="material-icons">star</i></label>
           
            <input type="radio" ${this.text[2]||''} id="star2" name="rate" value="2" /> 
            <label  for="star2" ><i class="material-icons">star</i></label>

            <input type="radio" ${this.text[1]||''} id="star1" name="rate" value="1" /> 
            <label  for="star1"  ><i class="material-icons">star</i></label>
        </div>
        </form>
        
    </div>
</div>

    `;
    const danhgia=this.shadowRoot.querySelector('form');
    danhgia.addEventListener("change",()=>{
        const form = this.shadowRoot.querySelector('input[name=rate]:checked');
        this.noidungchiietdanhgia.ketQuaDanhGia=String(form.value);
    });
    }
   }
   customElements.define('button-star',button_star);