

require('dotenv').config();
var cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const router = express.Router();


const app = express();

const {PORT, MONGO_URI} = process.env;

// app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('connected to mongodb'))
    .catch(e => console.error(e));

app.listen(PORT, console.log(`server listenint on port ${PORT}`));



// app.use(express.static(path.join(__dirname, 'react_front/build')));
//
// app.get('/', function (요청, 응답) {
//     응답.sendFile(path.join(__dirname, '/react_front/build/index.html'));
// });

// app.get('*', function (요청, 응답) {
//     응답.sendFile(path.join(__dirname, '/react_front/build/index.html'));
// });
/**
 * 여기까지 설정 express 서버는 8080이고, 여기까지는 건들거없슈
 */


/**
 * Todo 1. 예시
 * 버스 시간표 들어가면 가운데 값 바뀜
 */
const data = {name : '재완', age: 25};

app.get('/testapi', (req, res) => {
    res.json(data);
});




