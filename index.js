require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const router = express.Router();
const emailHandler = require('./email');
const User = require('./models/user');
const expressSession = require('express-session');
const session = require('express-session');
var FileStore = require('session-file-store')(session);
const moment = require('moment');

const {StudentBoard} = require("./models/studentcarfull");
const {TaxiBoard} = require("./models/taxicarfull");


const app = express();

const {PORT, MONGO_URI} = process.env;

// app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin: true,
    credentials : true,
    method: ['POST', 'GET'],
}));



mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('connected to mongodb'))
    .catch(e => console.error(e));

var sessionOptions = {
    store: new FileStore(fileStoreOptions),
    secure: false,
    secret: "a",
    resave: false,
    saveUnitialized: false,
    name: "login-OK",
    cookie: {
        maxAge: 86400,
        name: "wane"
    },
};
app.use(session(sessionOptions));

var fileStoreOptions = {
    retries: 0,
    reapInterval: 10,
    path: "./session", //세션 관리 서버파일을 서버 ./session 경로에 저장
    logFn: function () {},
}; // 세션 저장 관련 처리

app.listen(PORT, console.log(`server listening on port ${PORT}`));



app.use(express.static(path.join(__dirname, 'react_front/build')));



app.get('/testapi', (req, res) => {
    res.json(data);
});

var generateRandom = function (min,max){
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

app.post('/signup', async (req, res) =>{
    const signupData = req.body;

    // console.log(req.session);

    console.log(signupData);
    signupData.message = generateRandom(111111, 999999).toString();
    const verify = signupData.message;
    console.log(verify)
        try {
            const result = await emailHandler.send(signupData);
            console.log(verify);
            res.send(verify);
            // res.send({message: 'success to send a message', result});
        } catch (e) {
            res.send(verify);
        };


    app.post('/signupdata', async (req, res) => {
        const signupData = req.body;
        console.log(signupData);

        const user = User.create({
            userEmail: signupData.email,
            userPassword: signupData.pass,
            userName: signupData.name
        })
        console.log(user);
    });

    /**
     * login 인증, 세션
     */
    app.post('/api/login', (req, res) => {
        console.log('로그인 실행');

        const loginCert = req.body;
        // console.log(loginCert);


        const user = User.find({userEmail: loginCert.email, userPassword: loginCert.pass}).exec((err, result)=>{
            if (result.length==0){
                res.send(false);
                console.log("N");
            }else {
                console.log("Y");
                // console.log(result[0].userName);
                req.session.name = result[0].userName;
                req.session.valid = +new Date() + 86400;
                console.log(req.session.cookie.name);
                res.send([true, result[0].userName]);
            }
        });


    });

});

app.get("/api/on-login", async (req, res) => {
    console.log('세션 확인');

    if (!req.session.email){
        req.send(false);
    }else {
        req.send(true);
    }
});

app.get("/api/student/getAll", async (req, res) => {
    console.log("학생카풀 조회");
    StudentBoard.find()
        .exec((error, result) => {
            res.send(result);
            // console.log(result);
        });
});

app.post("/api/student/reserve", async (req, res) => {

    console.log("예약하기");

    const reserve = req.body;
    console.log(reserve);

    StudentBoard.update({
            idx: reserve.idx
        }, {
            $set: {
                member: reserve.member-1
            }
        }
    ).exec((err, result)=>{
        if (err) res.send(err);
        console.log(result);
        res.send(result);
    });

});

app.post("/api/student/:id", async (req,res)=>{

    console.log("상세 페이지");

    const detail = req.body;
    StudentBoard.findOne({idx: detail.idx}, (error, result) =>{
        console.log(result);
        res.send(result);
    });

})

app.post("/api/register/student", async (req, res) => {

    console.log("등록");

    const regis = req.body;
    console.log(regis);

    await StudentBoard.create({
        idx: regis.idx,
        start: regis.start,
        end: regis.end,
        member: regis.member,
        price: regis.price,
        date: regis.date,
    });

    console.log(moment(regis.date, "YYYY-MM-DDTHH:MM"));

    res.send("Y");


});

/**
 * taxi
 */

app.get("/api/taxi/getAll", async (req, res) => {
    console.log("택시카풀 조회");
    TaxiBoard.find()
        .exec((error, result) => {
            res.send(result);
            // console.log(result);
        });
});


app.post("/api/taxi/reserve", async (req, res) => {

    console.log(" 택시 예약하기");

    const reserve = req.body;
    console.log(reserve);

    TaxiBoard.update({
            idx: reserve.idx
        }, {
            $set: {
                member: reserve.member-1
            }
        }
    ).exec((err, result)=>{
        if (err) res.send(err);
        console.log(result);
        res.send(result);
    });

});

app.post("/api/taxi/:id", async (req,res)=>{

    console.log("상세 페이지");

    const detail = req.body;
    TaxiBoard.findOne({idx: detail.idx}, (error, result) =>{
        console.log(result);
        res.send(result);
    });

})

app.post("/api/register/taxi", async (req, res) => {

    console.log("등록");

    const regis = req.body;
    console.log(regis);

    TaxiBoard.create({
        idx: regis.idx,
        start: regis.start,
        end: regis.end,
        member: regis.member,
        price: regis.price
    });

    res.send("Y");


});



app.get('*', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/react_front/build/index.html'));
});

