const url = require('url')
const needle = require('needle');
const requestIP = require('request-ip');
const apicache = require('apicache')
require('dotenv').config()
const IP = require('ip');
// Env vars
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE

const hethong_controller={
    getHethong:async(req,res)=>{
        try {
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
        const apiRes = await needle('get', API_BASE_URL+'/getHeThong' ,{
            headers: headers
        });
            const data = apiRes.body;
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({error});
        }
    },
    insertsystem:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/insertHeThong',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
   deletesys:async(req,res)=>{
         try {
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
        const apiRes = await needle('post', API_BASE_URL+'/xoaHeThong',req.body ,{
            headers: headers
        });
            const data = apiRes.body;
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({error});
        }
    },
    changesys:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/capNhatHeThong',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
        },
    checksys:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/kiemTraHeThong',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    getinforsys:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/layThongTinChiTietHeThong',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },  getinforsysdanhgia:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/checkhethongdanhgia',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    getinforsysdanhgia2:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/checkmahethongdanhgia',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    }
};
module.exports={hethong_controller};