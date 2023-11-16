// mysql구문

// import mysql from 'mysql2';
// import { config } from '../config.js';

// const pool = mysql.createPool({
//     host: config.db.host,
//     user: config.db.user,
//     database: config.db.database,
//     password: config.db.password
// });

// export const db = pool.promise();

// mongodb 구문
import Mongodb from 'mongodb';
import { config } from '../config.js';

let db;
export async function connectDB(){
    return Mongodb.MongoClient.connect(config.db.host)
    .then((client) => db = client.db())}


export function getUsers() {
    return db.collection('users');
}
export function getTweets() {
    return db.collection('tweets');
}