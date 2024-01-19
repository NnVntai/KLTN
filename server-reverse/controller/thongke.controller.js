const url = require('url')
const needle = require('needle');
const requestIP = require('request-ip');
const apicache = require('apicache')
require('dotenv').config()
const IP = require('ip');
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE
const thongke_controller={
    getsolieudanhgiachucnang:async(req,res)=>
    {
      try {
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
        const apiRes = await needle('post', API_BASE_URL+'/getsolieudanhgiachucnang',req.body ,{
            headers: headers
        });
            const data = apiRes.body;
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({error});
        }
    },
    getthongketheonamline:async(req,res)=>
    {
      try {
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
        const apiRes = await needle('post', API_BASE_URL+'/getthongketheonamline',req.body ,{
            headers: headers
        });
            const data = apiRes.body;
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({error});
        }
    },getthongkequantritheochucnang:async(req,res)=>{
      try {
        const headers={'content-type' : 'application/json','Accept':'application/json','authorization': req.headers.authorization||''}
        const apiRes = await needle('post', API_BASE_URL+'/getthongkequantritheochucnang',req.body ,{
            headers: headers
        });
            const data = apiRes.body;
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({error});
        }
    }
}
module.exports={thongke_controller};