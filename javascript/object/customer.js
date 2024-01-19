"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoiDungDanhGia = exports.NguoiDanhGia = exports.KieuDanhGia = exports.ChiTietDanhGia = exports.Danhgia = exports.ChucNang = exports.Login = exports.HeThong = exports.VaiTro = exports.NguoiQuanTri = void 0;
var NguoiQuanTri = /** @class */ (function () {
    function NguoiQuanTri(id, hoTen, username, password, ngaySinh, chucDanh, tenCongTy, idVaiTro, idHeThong, checked) {
        this.VaiTro = [];
        this.HeThong = [];
        this.id = id;
        this.hoTen = hoTen;
        this.chucDanh = chucDanh;
        this.username = username;
        this.password = password;
        this.ngaySinh = ngaySinh;
        this.tenCongTy = tenCongTy;
        this.idVaiTro = idVaiTro;
        this.idHeThong = idHeThong;
        this.checked = checked;
    }
    return NguoiQuanTri;
}());
exports.NguoiQuanTri = NguoiQuanTri;
;
var VaiTro = /** @class */ (function () {
    function VaiTro(id, tenVaiTro, checked) {
        this.id = id;
        this.tenVaiTro = tenVaiTro;
        this.checked = checked;
    }
    return VaiTro;
}());
exports.VaiTro = VaiTro;
var HeThong = /** @class */ (function () {
    function HeThong(id, tenHeThong, checked, maKetNoi) {
        this.id = id;
        this.tenHeThong = tenHeThong;
        this.maKetNoi = maKetNoi;
        this.checked = checked;
    }
    return HeThong;
}());
exports.HeThong = HeThong;
var Login = /** @class */ (function () {
    function Login(username, password) {
        this.username = username;
        this.password = password;
    }
    return Login;
}());
exports.Login = Login;
var ChucNang = /** @class */ (function () {
    function ChucNang(id, tenChucNang, mucDich, idHeThong, checked, arr) {
        this.DanhGia = [];
        this.arr = [];
        this.id = id;
        this.mucDich = mucDich;
        this.tenChucNang = tenChucNang;
        this.idHeThong = idHeThong;
        this.checked = checked;
        this.arr = arr;
    }
    return ChucNang;
}());
exports.ChucNang = ChucNang;
var Danhgia = /** @class */ (function () {
    function Danhgia(id, ngayDangGia, idNguoiDanhGia, idChucNang, ChiTietDanhGia, checked) {
        this.id = id;
        this.ngayDanhGia = ngayDangGia;
        this.idNguoiDanhGia = idNguoiDanhGia;
        this.idChucNang = idChucNang;
        this.chiTietDanhGia = ChiTietDanhGia;
        this.checked = checked;
    }
    return Danhgia;
}());
exports.Danhgia = Danhgia;
var ChiTietDanhGia = /** @class */ (function () {
    function ChiTietDanhGia(id, tenDanhGia, ketQuaDanhGia, idKieuDanhGia) {
        this.id = id;
        this.tenDanhGia = tenDanhGia;
        this.ketQuaDanhGia = ketQuaDanhGia;
        this.idKieuDanhGia = idKieuDanhGia;
    }
    return ChiTietDanhGia;
}());
exports.ChiTietDanhGia = ChiTietDanhGia;
var KieuDanhGia = /** @class */ (function () {
    function KieuDanhGia(id, tenKieuDanhGia, checked) {
        this.id = id;
        this.tenKieuDanhGia = tenKieuDanhGia;
        this.checked = checked;
    }
    return KieuDanhGia;
}());
exports.KieuDanhGia = KieuDanhGia;
var NguoiDanhGia = /** @class */ (function () {
    function NguoiDanhGia(id, hoTen, maUser, idHeThong, checked) {
        this.id = id;
        this.maUser = maUser;
        this.hoTen = hoTen;
        this.idHeThong = idHeThong;
        this.checked = checked;
    }
    return NguoiDanhGia;
}());
exports.NguoiDanhGia = NguoiDanhGia;
var NoiDungDanhGia = /** @class */ (function () {
    function NoiDungDanhGia(id, mucDoUuTien, idHeThong, idKieuDanhGia, tenDanhGia, checked) {
        this.id = id;
        this.idHeThong = idHeThong;
        this.idKieuDanhGia = idKieuDanhGia;
        this.mucDoUuTien = mucDoUuTien;
        this.tenDanhGia = tenDanhGia;
        this.checked = checked;
    }
    return NoiDungDanhGia;
}());
exports.NoiDungDanhGia = NoiDungDanhGia;
