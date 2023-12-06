module.exports = function () {
  const expressConfig = require('../config')();
  const nodemailer = require('nodemailer');
  // require('dotenv').config()

  this.Mailer = function (emailTo, subject, mailBody)  {
    let outputResponse ={};
    return new Promise(function (resolve, reject) {
    var transporter = nodemailer.createTransport({
      host: expressConfig.smtp.host, 
      port: expressConfig.smtp.port,
      secure: expressConfig.smtp.secure,
      auth: {
        user: expressConfig.smtp.auth.user,
        pass: expressConfig.smtp.auth.pass
      }
    })

    var mailOptions = {
      from: expressConfig.smtp.auth.user,
      to: emailTo,
      subject: subject,
      text: mailBody
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        outputResponse.errorStatus = true;
          outputResponse.errorCode = error.code;
          outputResponse.errorMessage = error.message;
          outputResponse.data = {};
          resolve(outputResponse);
        console.log('Email Not sent: ' + error)
      } else {
        console.log('Email sent: ' + info.response)
        outputResponse.errorStatus = false;
          outputResponse.errorCode = 'MAIL_SENT';
          outputResponse.errorMessage = '';
          outputResponse.data = info;
          resolve(outputResponse);
      }
    })
   
    });
  }
  this.MailerAttachment = function (emailTo, subject, mailBody)  {
    let outputResponse ={};
    return new Promise(function (resolve, reject) {
    var transporter = nodemailer.createTransport({
      host: expressConfig.smtp.host, 
      port: expressConfig.smtp.port,
      secure: expressConfig.smtp.secure,
      auth: {
        user: expressConfig.smtp.auth.user,
        pass: expressConfig.smtp.auth.pass
      }
    })

    var mailOptions = {
      from: expressConfig.smtp.auth.user,
      to: emailTo,
      subject: subject,
      text: mailBody,
      // HTML body
      html: `<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>
      <p>Here's a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>`,

      // AMP4EMAIL
      amp: `<!doctype html>
      <html ⚡4email>
        <head>
          <meta charset="utf-8">
          <style amp4email-boilerplate>body{visibility:hidden}</style>
          <script async src="https://cdn.ampproject.org/v0.js"></script>
          <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
        </head>
        <body>
          <p><b>Hello</b> to myself <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
          <p>No embedded image attachments in AMP, so here's a linked nyan cat instead:<br/>
            <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
        </body>
      </html>`,

      // An array of attachments
      attachments: [
          // String attachment
          {
              filename: 'notes.txt',
              content: 'Some notes about this e-mail',
              contentType: 'text/plain' // optional, would be detected from the filename
          },

          // Binary Buffer attachment
          {
              filename: 'image.png',
              content: Buffer.from(
                  'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
                      '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
                      'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
                  'base64'
              ),

              cid: 'info@rexknar.com' // should be as unique as possible
          },

          // File Stream attachment
          {
              filename: 'nyan cat ✔.png',
              path: __dirname + '/assets/nyan.png',
              cid: 'sobin.jm@rexknar.com' // should be as unique as possible
          }
      ],

      list: {
          // List-Help: <mailto:admin@example.com?subject=help>
          help: 'info@rexknar.com?subject=help',

          // List-Unsubscribe: <http://example.com> (Comment)
          unsubscribe: [
              {
                  url: 'http://example.com/unsubscribe',
                  comment: 'A short note about this url'
              },
              'unsubscribe@example.com'
          ],

          // List-ID: "comment" <example.com>
          id: {
              url: 'info@rexknar.com',
              comment: 'This is my awesome list'
          }
      }
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        outputResponse.errorStatus = true;
          outputResponse.errorCode = error.code;
          outputResponse.errorMessage = error.message;
          outputResponse.data = {};
          transporter.close();
          resolve(outputResponse);
        console.log('Email Not sent: ' + error)
      } else {
        console.log('Email sent: ' + info.response)
        outputResponse.errorStatus = false;
          outputResponse.errorCode = 'MAIL_SENT';
          outputResponse.errorMessage = '';
          outputResponse.data = info;
          transporter.close();
          resolve(outputResponse);
      }
    })
   
    });
  }
 
}
