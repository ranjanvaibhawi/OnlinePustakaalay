import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
   
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "onlinepustakaalay@gmail.com",
    pass: "asnsqxmxjasrxqca",
  },
});

// async..await is not allowed in global scope, must use a wrapper
export async function  sendMail(to,subject,text,html) {
  // send mail with defined transport object
  try{
  const info = await transporter.sendMail({
    from: '"OP 📓" <onlinepustakaalay@gmail.com>', // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html  // html body
  });
  }
  catch(err){
    console.log(err)
  }
}

 