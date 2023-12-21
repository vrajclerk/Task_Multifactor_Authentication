const nodemailer = require('nodemailer');
const send_mail=(email,otp)=>{

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tester31190@gmail.com', 
      pass: 'ehjo azwp qojm uiuc', 
    },
  });

  const mailOptions = {
    from: 'tester31190@gmail.com', 
    to: userEmail,
    subject: 'OTP Verification',
    text: `Your OTP is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      return res.status(500).send("error occur");
    }
    ob.otp = otp
    ob.email = userEmail
    ob.password = userPassword
    res.status(200).render('verify_otp',{otp1:"otp send successfully ",email:userEmail,redirect:"/signup/verify_otp"});
    
  });
}
  module.exports={send_mail};