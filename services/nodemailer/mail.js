const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

module.exports = {
  sendEmail(email, subject) {
    return nodemailer
      .createTransport(
        sendgridTransport({
          auth: {
            api_key:
              "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",
          },
        })
      )
      .sendMail({
        to: email,
        from: "development.mail.ph@gmail.com",
        subject: subject,
        text: "Your registration to NODEJS-BOILERPLATE is successfull!",
        html: `<body style='margin: 0px; padding: 0px;'> <div style='background: #79b4b7; padding: 20px; color: white;'> <h3 style='font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-weight: 300;'> NodeJS | Automated mail </h3> </div><div style='padding: 20px'> <p style=' color: #9d9d9d; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-weight: 300; '> Thanks for becoming a member ${email}! You will be notified once or twice a week maximum when a new update to this boilerplate is deployed. </p></div><div style='padding: 20px'> <p style=' color: #9d9d9d; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-weight: 300; '> Best, <br/> Kolya </p></div></body>`,
      })
      .then((value) => {
        console.log(value);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
