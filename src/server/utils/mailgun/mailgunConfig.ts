import * as mailgunLoader from "mailgun-js";

let mailgun = mailgunLoader({
    apiKey: process.env.MAILGUN_KEY,
    domain: process.env.MAILGUN_DOM
});
const receiveMail = (to: string, from: string, subject: string, content: string) => {
    console.log(from)
    let data: any = {
        from,
        to,
        subject,
        text: content
    };
    return mailgun.messages().send(data);
};

export { receiveMail };

