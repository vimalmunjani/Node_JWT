
let UserService = require('../services/user.service')

exports.createUser = async function(req, res, next) {

    let User = {
        
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
 
    try{

        var token = await UserService.createUser(User);
        res.status(201).json({
            status: 201,
            data: token,
            message: `succesfully created user`
        });

    }catch(ex){
        
        res.status(400).json({
            status: 400,
            data: null,
            message: `user creation unsuccessful`
        });

    }

}

exports.loginUser =async (req, res, next) => {

  let user = {
      email: req.body.email,
      password: req.body.password
  }
 try{

    let token = await UserService.loginUser(user);
    res.status(200).json({
        status: 200,
        data: token,
        message: `login successful`
    })
 }catch(ex){

    res.status(400).json({
        status: 400,
        data: null,
        message: `Invalid Username/Password`
    })

 }

}

exports.getUser = async (req, res, next) => {

    let userID = res.locals.userID;

    try{

        let userDetails = await UserService.getUser(userID);

        res.status(200).json({
            status: 200,
            message: `getting user successful`,
            data: userDetails
        });

    }
    catch(ex){
        res.status(200).json({
            status: 200,
            message: `Error getting User`,
            data: `NA`
        });
    }

}

exports.removeUser = (req, res, next) => {
    
}

