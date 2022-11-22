const nodeMailer = require('nodemailer');
const sender = require('./config/senderInfo.json');

const send = async (data) => {
    const transporter = nodeMailer.createTransport({
        server: 'naver',
        host: 'smtp.naver.com',
        port: 587,
        auth: {
            user : sender.user,
            pass : sender.pass
        }
    })

    const option={
        from: 'pica23000@naver.com',
        to: data.email,
        subject: "인증번호 입니다",
        text: data.message
    }

    const info = await transporter.sendMail(option);

    return info;
}

const validation = (data) => {
    return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email)) && data.title != undefined && data.message != undefined
}

module.exports = {
    send,
    validation
}
