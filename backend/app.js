const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect("mongodb+srv://fredys:sROdOCniRjTRP68z@cluster0-awmj0.mongodb.net/node-angular")
	.then(() => {
		console.log('Connected to database');
	})
	.catch(() => {
		console.log('Connected failed');
	});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
	next();
})

app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);

module.exports = app;




