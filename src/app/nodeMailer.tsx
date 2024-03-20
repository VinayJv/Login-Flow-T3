import { env } from "../env";

import nodemailer from "nodemailer";

export async function sendMail({toEmail, subject, otpText}:{subject: any, toEmail: any, otpText: any}){
    var mailOptions = {
        from: 'datonater0001@gmail.com',
        to: `${toEmail}`,
        subject: `${subject}`,
        text: `${otpText}`
      };
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: env.USERNAME,
            pass: env.PASSWORD
        },
    });
    try{
        const testResult = await transporter.verify();
        console.log(testResult)
    } catch(error){
        console.log(error)
        return;
    }
    try{
        const sendResult = await transporter.sendMail(mailOptions);
        console.log(sendResult);
    } catch(error){
        console.log(error);
    }
}