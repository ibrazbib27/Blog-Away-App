import * as nodemailerLoader from "nodemailer";



const mailGenerator =  () =>{

    return nodemailerLoader.createTransport({
        service: process.env.NODEMAILER_SERV,
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS,
        },
    });
}
const sendMail = async (mailer: any, from: string, to: string, subject: string, content: string) =>{
    let data: any = {
        from,
        to,
        subject,
        text: content
    };
    let results = await mailer.sendMail(data);
    return results;
}

export { mailGenerator, sendMail };