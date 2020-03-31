const nodemailer = require('nodemailer');
const { freshToken } = require('./jwtUtils')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD
    }
});

const sendMail = (to, subject, type) => {

    let mailMock = "";

    switch (type) {
        case 'verify':
            mailMock = verificationMailMock(to)
            break;
        case 'forget':
            mailMock = forgetMailMock(to)
            break;
        case 'auth':
            mailMock = twoWayAuthMailMock(to)
            break;
        default:
            mailMock = verificationMailMock(to)
            break;
    }

    transporter.sendMail({
        from: process.env.GMAIL_ADDRESS,
        to: to.email,
        subject: subject,
        html: mailMock
    }, function (err, info) {
        if (err)
            return (err)
        else
            return (info);
    });

}

const verificationMailMock = (user) => {
    return (
        `<div style="background-color: rgba(13, 138, 138, 0.281); font-size: 9px; padding:10px; text-align: center;">
        <p>
        <h3>Welcome to LakheMern</h3>
            Dear ${user.email} ,<br />We are proud to welcome you to our group of individuals. With your innovative help we can change this world, & WE WILL!
            <hr style="border: 0.15em solid rgba(0,0,0,.1) ;" />
            Please follow this <a href="${process.env.NODE_ENV === 'development' ? `http://localhost:3000/#` : `https://lakhe-mern.herokuapp.com/#`}/auth/verify/${freshToken({ user }, '1 hr')}"><strong>LINK</strong></a> to
            complete your verification!<br /><br />
            Yours regards,<br />
            Rikesh Lal Shrestha
        </p>
        </div>`
    )
}

const forgetMailMock = (user) => {
    return (
        `<div style="background-color: rgba(13, 138, 138, 0.281); font-size: 9px; padding:10px; text-align: center;">
        <p>
        <h3>Welcome to LakheMern</h3>
            Dear ${user.email}  ,<br />We are proud to welcome you to our group of individuals. With your innovative help we can change this world, & WE WILL!
            <hr style="border: 0.15em solid rgba(0,0,0,.1) ;" />
            Please follow this <a href="${process.env.NODE_ENV === 'development' ? `http://localhost:3000/#` : `https://lakhe-mern.herokuapp.com/#`}/auth/verify/${freshToken({ user }, '1 hr')}"><strong>LINK</strong></a> to
            change your password!<br /><br />
            Yours regards,<br />
            Rikesh Lal Shrestha
        </p>
        </div>`
    )
}

const twoWayAuthMailMock = (user) => {
    return (
        `<div style="background-color: rgba(13, 138, 138, 0.281); font-size: 9px; padding:10px; text-align: center;">
        <p>
        <h3>Welcome to LakheMern</h3>
            Dear ${user.email}  ,<br />You are going to access the Administrator account. (Be advised your changes will effect the system!). With your innovative help we can change this world, & WE WILL!
            <hr style="border: 0.15em solid rgba(0,0,0,.1) ;" />
            Please follow this <a href="${process.env.NODE_ENV === 'development' ? `http://localhost:3000/#` : `https://lakhe-mern.herokuapp.com/#`}/auth/twoAuth/${freshToken({ user }, '1 hr')}"><strong>LINK</strong></a> to access system!<br /><br />
            Yours regards,<br />
            Rikesh Lal Shrestha
        </p>
        </div>`
    )
}


module.exports = { sendMail }