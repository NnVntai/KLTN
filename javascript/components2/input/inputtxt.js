class label_table extends HTMLElement {
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
        .lable_table2{
            margin-left:auto;
          margin-right:auto;
          width:500px;
        }
        .lable_table{
           text-align:center;
            margin-left:auto;
            margin-right:auto;
           width:500px;
        }
        .lable_table:hover {
            color:green;
            border:none;
        }
        </style>
        <div class="lable_table2">
                <h2 class="lable_table">${this.getAttribute('title')} chao cac ban</h2>
                </div>
    `;
    }
   }
   customElements.define('lable-table',label_table);