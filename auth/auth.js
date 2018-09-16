const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => { 

    console.log(`auth middle ware called`);

    // get the token from the header
    let token = req.headers['x-access-token'];
    if(!token){

        return res.status(500).json({
            status: 500,
            auth:false,
            message: `No access token provided`
        });
    }


    jwt.verify(token, config.secret_key, function(err, decodedToken){

        if(err){
            return res.status(500).json({
                status: 500,
                auth: false,
                message: `Invalid Token`
            });
        }
    
    res.locals.userID = decodedToken.id;

    next();

    });
   
}