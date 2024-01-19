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
const user_controller={
    
    insertuser:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/insertuser',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    changeuser:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/changeuser',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    changepassword:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/changepassword',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    getUser:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('get', API_BASE_URL+'/getUser' ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    checkusername:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/checkusername',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    }
    ,getinforuser:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/getinforuser',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },deleteuser:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/deleteuser',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    checkpassword:async(req,res)=>
    {
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/checkpass',req.body ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },getUserVaiTro:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('get', API_BASE_URL+'/getUserVaiTro' ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    }
}
module.exports={user_controller};