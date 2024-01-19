class input_table extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
      this.render();
    }
    connectedCallback() {
   
    }
    render()
    {
      this.shadowRoot.innerHTML = `
      <style>
      .input_table{
          font-size: 30px;
          height: 50px;

          border-radius: 5px;
          background: white;
          color:black;
      }
      .input_table:hover {
          background: white;
          color:green;
      }
      </style>
      <input type="text" class="input_table" placeholder="${this.getAttribute('placeholder')||""}" style="width:${this.getAttribute("width")||""};"/>
      `;
    }
    
   }
   class textarea_table extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
      this.render();
    }
    connectedCallback() {
   
    }
    render()
    {
      this.shadowRoot.innerHTML = `
      <style>
      .textarea_table2{
        margin-left:auto;
        margin-right:auto;
        width:90%;
        text-align:center;
      }
      .textarea_table{
            font-size: 30px;
            width:600px;
            border-radius: 5px;
            background: white;
            color:black;
      }
      .textarea_table:hover {
            background: white;
            color:green;
      }
      </style>
      <div class="textarea_table2">
      <textarea name="" id="" class="textarea_table" cols="30" rows="10" placeholder="${this.getAttribute('placeholder')||""}"></textarea>
      </div>
      `;
    }
    
   }
   customElements.define('textarea-table',textarea_table);
   customElements.define('input-table',input_table);