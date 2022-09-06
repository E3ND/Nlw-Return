import nodemailer from 'nodemailer';

import { MailAdapter, sendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e6c10210631956",
      pass: "51c2ea13565a8c"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: sendMailData) {
        await transport.sendMail({
        from: 'Equipe Feedget <kkkk@gmail.com>',
        to: 'Bruno Pimentel <brunopimentelcityhotmail.com@gmail.com>',
        subject,
        html: body
    });
    
    }
}