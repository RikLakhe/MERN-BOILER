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
            mailMock = verificationMailMock(to.userName)
            break;
        case 'forget':
            mailMock = forgetMailMock(to.userName)
            break;
        default:
            mailMock = verificationMailMock(to.userName)
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

const verificationMailMock = (userEmail) => {
    return (
        `<div style="background-color: rgba(13, 138, 138, 0.281); font-size: 9px;">
        <p>
        <h3>Welcome to LakheMern</h3>
            Dear ${userEmail} ,<br />We are proud to welcome you to our group of individuals. With your innovative help we can change this world, & WE WILL!
            <hr style="border: 0.15em solid rgba(0,0,0,.1) ;" />
            Please follow this <a href="${process.env.NODE_MODULE === 'production' ? `https://lakhe-mern.herokuapp.com/#` : `http://localhost:3000/#`}/auth/verify?TOKEN=${freshToken({
            name: userEmail,
        }, '1 hr')}"><strong>LINK</strong></a> to
            complete your verification!<br /><br />
            Yours regards,<br />
            Rikesh Lal Shrestha
        </p>
        </div>`
    )
}

const forgetMailMock = (userEmail) => {
    return (
        `<div style="background-color: rgba(13, 138, 138, 0.281); font-size: 9px;">
        <p>
        <h3>Welcome to LakheMern</h3>
            Dear ${userEmail} ,<br />We are proud to welcome you to our group of individuals. With your innovative help we can change this world, & WE WILL!
            <hr style="border: 0.15em solid rgba(0,0,0,.1) ;" />
            Please follow this <a href="${process.env.NODE_MODULE === 'production' ? `https://lakhe-mern.herokuapp.com/#` : `http://localhost:3000/#`}/auth/verify?TOKEN=${freshToken({
            name: userEmail,
        }, '1 hr')}"><strong>LINK</strong></a> to
            change your password!<br /><br />
            Yours regards,<br />
            Rikesh Lal Shrestha
        </p>
        </div>`
    )
}


module.exports = { sendMail }