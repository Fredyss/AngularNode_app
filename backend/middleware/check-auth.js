const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	try{
		const token = req.header.authorization.split(" ")[1];
		const decodedToken =  jwt.verify(token, 'secret_this_should_be_longer');
		req.userData ={email: decodedToken.email, usserId: decodedToken.userId };
		next();
	}
	catch (error) {
		res.status(401).json({
			messege: "You are not authenticated"
		});
	}
};