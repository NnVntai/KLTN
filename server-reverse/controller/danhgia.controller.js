const url = require('url')
const needle = require('needle');
const requestIP = require('request-ip');
const apicache = require('apicache')
require('dotenv').config()
const IP = require('ip');
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE
const danhgia_controller={
    getgiaodienDanhGiaiChucNang:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/getgiaodienDanhGiaiChucNang',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    deleteDanhGia:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/deletedanhgia',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});

            }
    },
    getInforDanhGia:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/deletedanhgia',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    capNhatDanhGia:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/deletedanhgia',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    getdanhgiachucnangnguoidung:async(req,res)=>
    {
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/getchucnangdanhgianguoidungs',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },getthongtinnguoidanhgia:async(req,res)=>
    {

        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/getnguoidanhgia',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },insertnguoidanhgia:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/insertnguoidanhgia',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    insertdanhgianguoidung:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/insertdanhgianguoidung',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    getgiaodiendanhgiakhongconguoidung:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/getgiaodiendanhgiakhongconguoidung',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    capnhatdanhgianguoidung:async(req,res)=>
    {
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/capnhatdanhgianguoidung',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },getdanhgiadmin:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/getdanhgiadmin',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
       
    }
}
module.exports={danhgia_controller};