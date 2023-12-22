const nodemailer = require('nodemailer');
const send_mail=(email,otp)=>{

  //The transporter is configured to use a Gmail service and is provided with user & pass 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tester31190@gmail.com', 
    
      pass: 'ehjo azwp qojm uiuc', 
    },
  });

  //Specifies details about email
  const mailOptions = {
    from: 'tester31190@gmail.com', 
    to: email,
    subject: 'OTP Verification',
    text: `Your OTP is: ${otp}`,
  };

  //Accepts a callback function that handles any error
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {     
      return res.status(500).send("error occur");;
    }
    
  });

}
module.exports={send_mail};