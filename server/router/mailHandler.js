const express = require('express');
const nMailer = require('nodemailer');

const mailHandler = express.Router();

mailHandler.post('/', async (req, res) => {
    try {
        const transporter = nMailer.createTransport({
            host: 'smtp.mail.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'почта',
                pass: 'пароль',
            },
        });

        const { name, email } = req.body;

        await transporter.sendMail({
            from: 'почта',
            to: 'почта',
            subject: `[НАПИШИТЕ МНЕ] C-W: ${name}`,
            html: `<b>Напишите мне - ${email}</b>`,
        });

        return res.status(200).send({
            status: 200,
            message: 'Успешная отправка!',
        });
    } catch (e) {
        console.error(e);
        return res.status(500).send({
            status: 500,
            message: 'Ошибка при запросе',
        });
    }
});

module.exports = mailHandler;
