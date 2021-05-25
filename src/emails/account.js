
const mailgun = require("mailgun-js");

const DOMAIN = 'sandbox50fea0dd6795431ea90b7991f7981c29.mailgun.org';
const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});

const sendWelcomeEmail = (email,name) =>{
    const data = {
        from: 'raaz@gmail.com',
        to: email,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}.Let me know how you get along with the app`,

    }
    mg.messages().send(data,  (error, body) =>{
        console.log(body);
    })
}


const sendCancelationEmail = (email,name) =>{
    const data = {
        from: 'raaz@gmail.com',
        to: email,
        subject: 'Sorry for see you go!',
        text: `Goodbye ${name}.Hope you to see again`,
        
    }
    mg.messages().send(data,  (error, body) =>{
        console.log(body);
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}