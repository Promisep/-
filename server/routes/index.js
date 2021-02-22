import express from 'express'
const router = express.Router({})

import conn from './../db/db'
import config from '../src/config'
import sms_util from './../util/sms_util'

import svgCaptcha from 'svg-captcha'
import md5 from 'blueimp-md5'
import formidable from 'formidable'
import {basename} from 'path'

const S_KEY = '@WaLQ1314?.LqFtK.Com.#'; // 盐
const users = {}; // 用户信息
let tmp_captcha = '';

/* GET home page. */
router.get('/', (req, res, next) => {
    console.log(md5(md5("admin") + S_KEY))
    res.render('index');
});
