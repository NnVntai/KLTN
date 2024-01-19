"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DanhGiaService = void 0;
var core_1 = require("@angular/core");
// this will update the process.env with environment variables in .env file
var DanhGiaService = /** @class */ (function () {
    function DanhGiaService(http) {
        this.http = http;
        // private url2=process.env["URL_DATA"];
        this.url = "http://127.0.0.1:8000";
        // console.log(this.url2);
        // this.url2=process.env["URL_DATA"]||"";
    }
    DanhGiaService.prototype.getinforsys = function (userQT) {
        var body = JSON.stringify(userQT);
        var headers = { 'content-type': 'application/json' };
        return this.http.post(this.url + "/api/checkmahethongdanhgia", body, { 'headers': headers });
    };
    DanhGiaService.prototype.getchucnang = function (chucnang, idNguoiDanhGias) {
        chucnang.idNguoiDanhGia = idNguoiDanhGias;
        var body = JSON.stringify(chucnang);
        var headers = { 'content-type': 'application/json' };
        return this.http.post(this.url + "/api/getchucnangdanhgianguoidungs", body, { 'headers': headers });
    };
    DanhGiaService.prototype.getdanhgia = function (chucnang, idNguoiDanhGias) {
        var body = JSON.stringify(chucnang);
        var headers = { 'content-type': 'application/json' };
        return this.http.post(this.url + "/api/getgiaodienDanhGiaiChucNang", body, { 'headers': headers });
    };
    DanhGiaService.prototype.getthongtinnguoidanhgia = function (NguoiDanhGia) {
        var body = JSON.stringify(NguoiDanhGia);
        var headers = { 'content-type': 'application/json' };
        return this.http.post(this.url + "/api/getnguoidanhgia", body, { 'headers': headers });
    };
    DanhGiaService.prototype.insertnguoidanhgia = function (NguoiDanhGia) {
        var body = JSON.stringify(NguoiDanhGia);
        var headers = { 'content-type': 'application/json' };
        return this.http.post(this.url + "/api/insertnguoidanhgia", body, { 'headers': headers });
    };
    DanhGiaService.prototype.insertdanhgianguoidung = function (danhgia) {
        var body = JSON.stringify(danhgia);
        var headers = { 'content-type': 'application/json' };
        return this.http.post(this.url + "/api/insertdanhgianguoidung", body, { 'headers': headers });
    };
    DanhGiaService.prototype.getgiaodiendanhgia = function (danhgia) {
        var body = JSON.stringify(danhgia);
        var headers = { 'content-type': 'application/json' };
        return this.http.post(this.url + "/api/insertdanhgianguoidung", body, { 'headers': headers });
    };
    DanhGiaService.prototype.getgiaodiendanhgiakhongconguoidung = function (danhgia) {
        var body = JSON.stringify(danhgia);
        var headers = { 'content-type': 'application/json' };
        return this.http.post(this.url + "/api/getgiaodiendanhgiakhongconguoidung", body, { 'headers': headers });
    };
    DanhGiaService.prototype.capnhatdanhgianguoidung = function (danhgia) {
        var body = JSON.stringify(danhgia);
        var headers = { 'content-type': 'application/json' };
        return this.http.post(this.url + "/api/capnhatdanhgianguoidung", body, { 'headers': headers });
    };
    DanhGiaService.prototype.getgiaodiendanhgianoidung = function (danhgia) {
        var body = JSON.stringify(danhgia);
        var headers = { 'content-type': 'application/json' };
        return this.http.post(this.url + "/api/getgiaodiendanhgianoidung", body, { 'headers': headers });
    };
    DanhGiaService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], DanhGiaService);
    return DanhGiaService;
}());
exports.DanhGiaService = DanhGiaService;
