let User = require('../models/user.model');
let config = require('../config');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

exports.createUser = async function(user) {

    let hashedPassword = bcrypt.hashSync(user.password, 8);

    let newUser = new User({
        name: user.name,
        email: user.email,
        date: new Date(),
        password: hashedPassword
    })

    try{

        let savedUser = await newUser.save();
        let token = jwt.sign({id: savedUser._id},config.secret_key,{expiresIn: 86400});

        return token;

    }catch(ex){

        throw Error(`Error while creating User(S) - ${ex.message}`);

    }

}


exports.loginUser = async function(user){

    
    try{
        // finding the user in a DB
        let foundUser = await User.findOne({email: user.email});
        // when found, check weather password is correct
        let isPasswordValid = bcrypt.compareSync(user.password, foundUser.password);

        if(!isPasswordValid){
            throw Error('Invalid Username/Password');
        }
        let token = jwt.sign({id: foundUser._id}, config.secret_key, {expiresIn: 84600});

        return token;

    }catch(ex){
        throw Error(`Error while Login User(S) - ${ex.message}`);
    }

}

exports.getUser = async function(id){

    try{

        userDAO = await User.findById(id);
        return userDTO = {
            name: userDAO.name,
            email: userDAO.email
        };

    }catch(ex){

        throw Error('Error getting the user');

    }

}

exports.deleteUser = async function(id) {

    try{

        let deleted = await User.findByIdAndRemove(id);

        if(!deleted){
            throw Error('User cannot be deleted');
        }

        return deleted;

    }catch(ex){
        throw Error(`Error deleting the User(S) - ${ex.message}`);
    }

}

