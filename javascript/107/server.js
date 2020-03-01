const express = require('express');
const app = express();

const socketIo = require('socket.io');
const mongo = require('mongodb');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let posts;
let io;

app.use(require('cors')({
    origin: 'http://localhost:3000'
}));
/*app.use((req, res, next) => {
  //res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});*/

app.route('/posts').
    get(async (req, res, next) => {
        const skip = +req.query.skip;
        const limit = +req.query.limit;

        try {
            const thePosts = await posts.find()
                .skip(skip)
                .limit(limit)
                .toArray();

            res.send(thePosts);
        } catch (e) {
            return next(e);
        }
    })
    .post(async (req, res, next) => {
        const newPost = {
            title: req.body.title,
            content: req.body.content,
            author: req.user,
            date: new Date()
        };

        try {
            await posts.insertOne(newPost);
            res.status(201).send(newPost);
        } catch (e) {
            return next(e);
        }
    });

app.route('/posts/:id/comments')
    .get(async (req, res, next) => {
        try {
            const theComments = await comments.find()
            res.send(theComments);
        } catch (e) {
            return next(e);
        }
    })


    .post(async (req, res, next) => {
        const newComment = {
            content: req.body.content,
            author: req.user,
            date: new Date()
        };

        try {
            await posts.updateOne({ _id: mongo.ObjectId(req.params.id) },
                {
                    $push: {
                        comments: newComment
                    }
                });

            res.status(201).send(newComment);
        } catch (e) {
            return next(e);
        }
    });

app.use((req, res, next) => {
    const err = new Error('No such API method');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message || 'oops');
});

async function connectToMongo() {
    const client = new mongo.MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db('blog');
        posts = db.collection('posts');

        numPosts = await posts.countDocuments();
    } catch (err) {
        console.error(err);
    }
}

connectToMongo().catch(e => console.error(e));

io = socketIo.listen(app.listen(80));