var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'myemailaddress@gmail.com',
        pass: 'myPassword'
    }
});
var mailOptions = {
    from: 'myemailaddress@gmail.com',
    to: 'test1@gmail.com, test2@gmail.com',
    subject: 'Sendiong Email in Node.js',
    //Text: 'Here is an email sent from Node.JS'
    html: '<h1>HELLO WORLD!</h1><p>This email was sent from Node.JS</p>'
};
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Email sent: ' + info.response);
    }
});