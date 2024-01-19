class label_table extends HTMLElement {
    datasets;
    constructor() {    super();

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
                <h2 class="lable_table">${this.getAttribute('title')|this.datasets.data} chao cac ban</h2>
                </div>
    `;
    }
   }
   customElements.define('lable-table',label_table);