const express = require('express');
const cors = require('cors');

const data = require('./data.json');

// create server
const server = express();
const port = 4000;


const whitelist = ['https://hooks-ts-quiz-ink1kt0jq.now.sh','https://hooks-ts-quiz.mconnor.now.sh/','http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// GET question endpoint
server.get("/api/questions", cors(corsOptions),(req, res) => {
    res.json(data);
});

// starting server
server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});