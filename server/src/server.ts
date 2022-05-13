import express from 'express';

const app = express();

app.use(express.json())

app.post('/feedbacks', (req, res) => {
    const {type, comment} = req.body;
    console.log(type);
    console.log(comment);

    return res.send("It worked!");
});

app.listen(3333, () => {
    console.log('HTTP server running now');
});