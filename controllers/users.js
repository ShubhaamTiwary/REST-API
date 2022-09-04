const { v4: uuidv4 } = require('uuid');
let users=[];
module.exports.createUser=(req,res)=>{
    const user=req.body;
    const userWithId={id:uuidv4(),...user};

    users.push(userWithId);
    res.send(`User with the name ${user.firstName} and age ${user.age} is added to the DB(temporary)`);
};
module.exports.UserHome=(req,res)=>{res.send(users)};
module.exports.UserDetails=(req,res)=>{
    const id =req.params.id;
    const findUser=users.find((users) => users.id==id);
    res.send(findUser);
}
module.exports.Delete=(req,res) =>{
    const id =req.params.id;
    users=users.filter((users) => users.id != id);
    res.send(users);
};
module.exports.Patch=(req,res)=>{
    const id =req.params.id;
    const user=users.find((users) => users.id==id);
    const input=req.body;
    if(input.firstName){
        user.firstName=input.firstName;
    }
    if(input.lastName){
        user.lastName=input.lastName;
    }
    if(input.age){
        user.age=input.age;
    }
    res.send(users);
};