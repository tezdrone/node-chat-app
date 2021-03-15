const express = require('express');
const app = express();

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let messages = [
	{ name: 'Tim', message: 'hi' },
	{ name: 'Jamie', message: 'hello' },
];

app.get('/messages', (req, res) => {
	res.send(messages);
});

app.post('/messages', (req, res) => {
	console.log(req.body);
	messages.push(req.body);
	res.sendStatus(200);
});

const server = app.listen('3000', (err) => {
	console.log(`Server runnning on port ${server.address().port}`);
});
