const nodemailer = require ("nodemailer");

const msg ={
    from :"azizridane@gmail.com",
    to :"",
    subject:"nodemailer testing",
    text:"testing out first sender",

};
nodemailer.createTransport({
  service:"gmail",
  auth: {
    user:"azizridane@gmail.com",
    pass:"ccilhgbnnkhftzxn ",
  },
port: 465,
host:"smtp.gmail.com"

})
.sendMail(msg,(err)=>{
if (err) {
     return console.log('Error occurs',err);
}else{
    return console.log('email sent');
}

})