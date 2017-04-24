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

};


