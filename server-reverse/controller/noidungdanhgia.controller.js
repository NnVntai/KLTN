const url = require('url')
const needle = require('needle');
const requestIP = require('request-ip');
const apicache = require('apicache')
require('dotenv').config()
const IP = require('ip');
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE

const noidungdanhgia_controller={
    insertnoidungdanhgia:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/insertnoidungdanhgia',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    getnoidungdanhgia:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/getnoidungdanhgia',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                console.log(error);
                res.status(500).json({error});
            }
    },
    getinfornoidungdanhgia:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/getinfornoidungdanhgia',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    deletenoidungdanhgia:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/deletenoidungdanhgia',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    updatenoidungdanhgia:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/deletenoidungdanhgia',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    getgiaodiendanhgianoidung:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/getgiaodiendanhgianoidung',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
   
}
module.exports={noidungdanhgia_controller};