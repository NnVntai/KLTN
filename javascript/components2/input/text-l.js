class text_l extends HTMLElement {
   noidungchiietdanhgia;
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
     this.noidungchiietdanhgia.idKieuDanhGia=1;
     this.noidungchiietdanhgia.tenDanhGia;
        this.shadowRoot.innerHTML = `
        <style>
        .txtarea {
          margin: 10px;
          width: 100%;
          height: 300px;
          display: inline-block;
      }
      .txtarea .over {
          width: 70%;
          height: 100%;
          margin: auto;
      }
      .txtarea textarea{
          font-size: 30px;
          border: 4px solid rgb(72, 72, 248);
          width: 100%;
          height: 100%;
      }
        </style>
        <div class="txtarea">
        <div class="over"> 
            <textarea id="textarea" placeholder=" Vui lòng Nhập Đánh giá ">${this.noidungchiietdanhgia.ketQuaDanhGia||''}</textarea>
        </div>
    </div>
    `;
    const danhgia2=this.shadowRoot.getElementById('textarea');
    danhgia2.addEventListener('change',()=>{
      this.noidungchiietdanhgia.ketQuaDanhGia=danhgia2.value;
    })
    // this.noidungchiietdanhgia.ketQuaDanhGia=danhgia;

    }
   }
   customElements.define('text-l',text_l);