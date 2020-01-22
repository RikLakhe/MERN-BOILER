import nodemailer from 'nodemailer';

import config from "../config/serverConfig";


let transport = nodemailer.createTransport({
    host: config.mailHost,
    port: config.mailPort,
    auth: {
        user: config.mailAuth.user,
        pass: config.mailAuth.pass,
    }
});

const messageSend = (to,sub,mess) =>{
    const message = {
        from:'mern.stack@dev.com',
        to:to,
        subject:sub,
        html:`<p>Dear sir/ madam,<br/><br/>We welcome you to our MERN development group.<br/><br/><h5>${mess}</h5><br/>Thank you.</p>`,
    }

    transport.sendMail(message, (err,info)=>{
        if(err){
            console.error('error in sending mail',err);
        }else{
            console.log('Message send')
        }
    })
};

export default messageSend;