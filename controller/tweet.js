import * as tweetRepository from '../data/tweet.js';
import * as authRepository from '../data/auth.js';

export async function getTweets(req, res){
    const username = req.query.username;
    const data = await(username
        ? tweetRepository.getAllByUsername(username)
        : tweetRepository.getAll());
    res.status(200).json(data)
}

// getTweet
export async function getTweet(req, res, next){
    const id = req.params.id;
    const tweet = await tweetRepository.getById(id);
    if(tweet){
        res.status(200).json(tweet);
    } else {
        res.status(404).json({message: `Tweet id(${id}) not found`})
    }
}

// createTweet
export async function createTweet(req, res, next){
    const { text, name, username } = req.body;
    const tweet = await tweetRepository.create(text, name, username);
    res.status(201).json(tweet);
}

// updateTweet
export async function updateTweet(req, res, next){
    const id = req.params.id;
    const text = req.body.text;
    const tweet = await tweetRepository.update(id, text);
    if(tweet){
        res.status(200).json(tweet);
    } else {
        res.status(404).json({message: `Tweet id(${id}) not found`})
    }
}

// deleteTweet
export async function deleteTweet(req, res, next){
    const id = req.params.id;
    await tweetRepository.remove(id);
    res.sendStatus(204);
}

// regist
export async function regist1(req, res, next) {
    const { id, username, password, name, email, url } = req.body;

    try {
        const updatedUsers = await authRepository.regist(id, username, password, name, email, url);
        res.status(201).json(updatedUsers);
    } catch (error) {
        res.status(500).json({ message: '회원가입 중 오류가 발생했습니다.' });
    }
}

export async function check1(req, res, next){
    const{id, password} = req.body;
    const userpw = await authRepository.checkpassword(id, password);
    if(userpw){
        res.status(200).json({message: `${id}님이 로그인 하셨습니다.`})
    } else {
        res.status(404).json({message: 'id 또는 비밀번호를 확인하세요'})
    }
}