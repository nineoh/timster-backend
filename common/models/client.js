var bcrypt = require('bcrypt');

module.exports = function(Client) {
    const saltRounds = 5;

    const hashPassword = (password) => bcrypt.hash(password , saltRounds);

    Client.prototype.updateSkills = function(skills, cb){
        console.log('updateSkills', skills);
        cb(null , skills);
    }

    Client.remoteMethod('updateSkills', {
        description: 'Update skills for client',
        accepts: {arg: 'skills', type: 'array'},
        returns: {arg: 'skills', type: 'array'}
    });

    Client.login = (username, password, cb) => {
        return  Client.find({
           where: {username: username }
        }, (err, resp) => {
                console.log('Client.found resolve test err' , err);

                if(err) {
                    cb(null,{});
                    return;
                }

                bcrypt.compare(password, resp[0].password ).then( res => {
                    if( !res ){
                        cb(null,{});
                    }else{
                        cb(null , resp);
                    }
                });
        });
    };

    Client.observe('before save', (ctx, next) => {
         hashPassword(ctx.instance.password).then( (hash) => {
            ctx.instance.password = hash;
            next();
        });
    });

    Client.remoteMethod('login', {
        description: 'Login the client',
        accepts: [
            {arg: 'username', type: 'string'}, 
            {arg: 'password', type: 'string'}
            ],
        returns: {type: 'object' , root: true}
    });

};


