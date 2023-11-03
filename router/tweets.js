import express from "express";
import * as tweetController from '../controller/tweet.js';
import { body } from 'express-validator';
import { validate } from "../middleware/validator.js";

// 라우터 객체 생성
const router = express.Router();

/* 
    POST, PUT에 text부분에 빈문자열을 없애고, 최소 3자이상 입력해야 저장되도록 API에 적용
*/
const validateTweet = [
    body('text').trim().isLength({ min: 3}).withMessage('최소 3자 이상 입력해!'), validate
];


// GET / tweets 
// GET / tweets?username=:username

router.get('/', tweetController.getTweets);
// (req, res, next) => {
//     const username = req.query.username;
//     const data = username 
//         ? tweets.filter((tweet) => tweet.username === username)
//         : tweets;
//     res.status(200).json(data)
// }


// GET / tweets/:id
router.get('/:id', tweetController.getTweet);
// (req, res, next) => {
//     const id = req.params.id;
//     const tweet = tweets.find((tweet) => tweet.id === id);
//     if(tweet){
//         res.status(200).json(tweet);
//     } else {
//         res.status(404).json({message: `Tweet id(${id}) not found`})
//     }
//  }


// POST / tweets
router.post('/', validateTweet, tweetController.createTweet);
// (req, res, next) => {
//     const { text, name, username } = req.body;
//     const tweet = {
//         id: '10',
//         text,
//         createdAt: Date.now().toString(),
//         name,
//         username
//     };
//     tweets = [tweet, ...tweets];
//     res.status(201).json(tweet);
// }


// PUT / tweets/:id
router.put('/:id', validateTweet, tweetController.updateTweet);
// (req, res, next) => {
//     const id = req.params.id;
//     const text = req.body.text;
//     const tweet = tweets.find((tweet) => tweet.id === id);
//     if(tweet){
//         tweet.text = text;
//         res.status(200).json(tweet);
//     } else {
//         res.status(404).json({message: `Tweet id(${id}) not found`})
//     }
// }


// DELETE  / tweets/:id
router.delete('/:id', tweetController.deleteTweet);
// (req, res, next) => {
//     const id = req.params.id;
//     tweets = tweets.filter((tweet) => tweet.id !== id);
//     res.sendStatus(204);
// }


export default router;