const nodemailer = require('nodemailer');
const { options } = require('../routes/tourRoute');

const sendEmail = async (options) => {
  //create a transporter
  const transporter = nodemailer.createTransport({
    HOST: process.env.EMAIL_HOST,
    PORT: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  //define the email option

  const mailOptions = {
    from: 'Sushel Kumar <susheel@gatedis.cloud>',
    to: options.email,
    sbject: options.subject,
    text: options.message,
  };
  //Actully send the email

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
