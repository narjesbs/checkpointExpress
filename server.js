const express = require('express');
const app = express();
const port = 5000;
const date = new Date();
const day = date.getDay();
const hours = date.getHours();

const midlleweare = (req, res, next) => {
	if (day >= 1 && day <= 5 && hours >= 9 && hours < 18) {
		next();
	} else {
		res.send('<h1>Server is closed for now!</h1>');
	}
};
app.use(midlleweare);

/*app.get('/', (req, res) => {
	res.sendFile(__dirname + '/Public/Home.html');
});
app.get('/css/Home.css', (req, res) => {
	res.sendFile(__dirname + '/Public/css/Home.css');
});
app.get('/service', (req, res) => {
	res.sendFile(__dirname + '/Public/OurService.html');
});
app.get('/css/OurService.css', (req, res) => {
	res.sendFile(__dirname + '/Public/css/OurService.css');
});
app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/Public/Contacts.html');
});
app.get('/css/Contact.css', (req, res) => {
	res.sendFile(__dirname + '/Public/css/Contact.css');
});*/
app.use(express.static('Public'));
app.use((req, res) => {
	res.status(404).render('404');
});
app.listen(port, () => console.log(`server is running on port ${port}`));
