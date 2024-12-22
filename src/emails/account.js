const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'justintbalbuena@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
        // html: ''
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'justintbalbuena@gmail.com',
        subject: 'Farewell',
        text: `Goodbye, ${name}. We hope to see you back sometime soon! If there was anything you found issue with please let us know!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}

// the email will show up in spam, eventually in the future you will have to have a real
// domain that you link with your account.
// If creating real application you would have to buy a domain
// and then link that with your sendgrid account so services like google yahoo, etc
// know that you actually have rights to send emails from address ending in {whatever the email is}

// sgMail.send({
//     to: 'justintbalbuena@gmail.com',
//     from: 'justintbalbuena@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually gets to you.'
// })