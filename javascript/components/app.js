

const customApi='http://127.0.0.1:8000';
// function send(data)
// {
//     // console.log(data);
//     var options={
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: new Headers({
//             'Content-Type': 'application/json'
//           }),
//     };
//     fetch(customApi,options).then(function(response){
//         alert('gửi thành công');
//         response.json();
//     })
// }
async function postData(typesend='',url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(customApi+url, {
      method: typesend, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const  ServiceDanhGia={

 
  
    getdanhgia:async(chucnang,idNguoiDanhGias)=> {   
       
        const body=JSON.stringify(chucnang);
        postData('POST','/api/getgiaodienDanhGiaiChucNang',body)
        .then((data) => {
            return data;
        }); 
    } ,
  

    insertdanhgianguoidung:async(danhgia)=>{
        const body=JSON.stringify(danhgia);
        postData('POST','/api/insertdanhgianguoidung',body)  
        .then((data) => {
            return data;
        });  
    },
    getgiaodiendanhgia:async(danhgia)=>
    {
        const body=JSON.stringify(danhgia);
        postData('POST','/api/insertdanhgianguoidung',body)
        .then((data) => {
            return data;
        });  
    },
    getgiaodiendanhgiakhongconguoidung:async(danhgia)=>
    {
        const body=JSON.stringify(danhgia);
        postData('POST','/api/getgiaodiendanhgiakhongconguoidung',body)
        .then((data) => {
            return data;
        });    
       
    },
    capnhatdanhgianguoidung:async(danhgia)=>
    {
        const body=JSON.stringify(danhgia);
        postData('POST','/api/capnhatdanhgianguoidung',body)
        .then((data) => {
            return data;
        });    
    },
    getgiaodiendanhgianoidung:async(danhgia)=>
    {
        const body=JSON.stringify(danhgia);
        postData('POST','/api/getgiaodiendanhgianoidung',body)
        .then((data) => {
            return data;
        });  
    }
  }



   


