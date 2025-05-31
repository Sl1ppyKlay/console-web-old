const express = require('express');
const path = require('path');
const nMailer = require('nodemailer');
const mailHandler = require('./router/mailHandler');

const PORT = process.env.PORT || 3110;
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.get(['/', '/index.html'], (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

app.use('/api/feedback', mailHandler);

app.listen(PORT, () => {
    console.log('Сервер был запущен!');
});
