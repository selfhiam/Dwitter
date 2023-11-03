/*
    회원가입
    router.post('/signup', ...)

    로그인
    router.post('/login', ...)

    JWT 확인
    router.get('/me', ...)

    우리는 회원가입, 로그인을 한번 만들어서, 깃에 버전업을 해서 올릴것.

*/
import express from 'express';
// import * as userinformation from '../data/auth.js'
import * as authController from "../controller/tweet.js";
const router = express.Router();

// 회원가입
// router.post('/regist', userinformation.regist);
router.post('/regist', authController.regist1);
router.post('/login', authController.check1);




export default router;