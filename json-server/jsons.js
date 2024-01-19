var HeThong=[   //Collection mỗi một hệ thống 
{
    maHT: 1,    //mã hệ thống 
    tenHT:'HT1',    //tên hệ thống
}]
var DanhGia=[{  // Collection mỗi lần gửi một đánh giá 
    maCN: 1,    //mã chức năng 
    TenCN:'Chuc Nang 1',    //tên chức năng đánh giá
    page: 1,    // số page 
    count: 1,   // số lượng trong một page có bao nhiêu đánh giá 
    MucDich:'mô tả chức năng một làm gì',
    Danhgia:[
        {
            MaDG: 1,    //mã đánh giá
            date:'25/10/2022',  // thời gian lưu đánh giá
            nguoiDG:[   //lưu thông tin người dùng 
                {
                    maNGDG:1,   //mã người dùng đánh giá 
                    TenNGDG:'NguyenVanA',   // tên người dùng
                    id_user:123     //mã user ở hệ thống X dùng để kiểm tra người dùng có đánh giá chức năng đó chưa
                }
            ],
            CTDGI:[{    // chi tiết đánh giá nội dung chọn điểm số 
                maDGI:1,    //mã đánh giá chọn vào diểm số
                tenDGI:'Tiện Dụng',     // tên đánh giá nhập vào điểm số
                KQDGI:5     //kết qua của đánh gía nhập diểm số
            }],
            CTDGC:[{    // chi tiết đánh giá nội dung nhập text
                maDGI:1,    //mã đánh nội dung nhập text
                tenDGI:'Ý Kiến khác',   //tên đánh giá nhập vào nội dung text
                KQDGI:'thêm chức năng A'    //kết quả nhập text
            }]
        }
    ]
}]