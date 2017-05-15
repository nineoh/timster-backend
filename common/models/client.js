module.exports = function(Client) {

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

        return Client.find({
            where: {and: [{username: username } , {password: password}] }
        }, (err, resp) => {
                console.log('xClient.found resolve test err' , err);
                console.log('xClient.found resolve test' , resp);
                if(err) cb(null,{});

                cb(null , resp);
        });        
    };

    Client.remoteMethod('login', {
        description: 'Login the client',
        accepts: [
            {arg: 'username', type: 'string'}, 
            {arg: 'password', type: 'string'}
            ],
        returns: {type: 'object' , root: true}
    });

};


