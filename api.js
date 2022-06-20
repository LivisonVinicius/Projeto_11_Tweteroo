import express from "express";
import cors from 'cors';

const api=express();
api.use(express.json);
api.use(cors());

const userData = []
const tweets = []

api.post("/sign-up", (req, res) => {
    const login = { ...req.body }
    userData.push(login)
    res.status(201).send("Tudo Certo")
})

api.post("/tweets", (req, res) => { 
    const tweet = req.body
    for(let i = 0; userData.length > i; i++){
        if (tweet.username  === userData[i].username) {
            tweet["avatar"] = userData[i].avatar
        }
    }
    tweets.unshift(tweet)
    res.status(201).send("Tudo Certo")
})

api.get("/tweets", (req, res) => {   
    res.send(tweets.filter((_,index)=> index <= 9))
})

api.listen(5000)