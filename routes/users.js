const express=require('express');
const router=express.Router();

const users=[
    {
        firstname:"Shubhaam",
        lastname:"Tiwary",
        age: 20
    },
    {
        firstname:"Ram",
        lastname:"Gupta",
        age: 21 
    }
]
// All routes will be satrting with /users
router.get('/',(req,res)=>{
    console.log(users);
    res.send(users); 
});


// To make post request from the browser we have used Postman becoz browser can only send get request 
router.post('/',(req,res)=>{
    const user=req.body;
    users.push(user);
    res.send(`User with the name ${user.firstName} and age ${user.age} is added to the DB(temporary)`);
});

module.exports = router;