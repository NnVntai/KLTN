const url = require('url')
const needle = require('needle');
const requestIP = require('request-ip');
const apicache = require('apicache')

const IP = require('ip');

// Env vars
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE

const vaitro_controller={
    insertvaitro:async(res,req)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/insertVaiTro' ,req.body,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    getvaitro:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('get', API_BASE_URL+'/getVaiTro' ,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    },
    getvaitroid:async(req,res)=>{
        try {
            const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
            const apiRes = await needle('post', API_BASE_URL+'/getVaiTroId' ,req.body,{
                headers: headers
            });
                const data = apiRes.body;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json({error});
            }
    }

}
module.exports={vaitro_controller};