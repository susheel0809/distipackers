const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  //create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    // host: 'live.smtp.mailtrap.io',
    // port: 465,
    // secure: true,
    // auth: {
    //   user: 'api',
    //   pass: 'd05abdcb5f6290ffeec076d9378c713d',
    // },
  });
  console.log('created');
  //define email options

  const mailOptions = {
    from: 'Gateway Distipackers <info@gatewaydis.cloud>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  //actully send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
