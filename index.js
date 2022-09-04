const express=require('express');
const bodyparser=require('body-parser');
const usersRoutes=require('./routes/users');
const app=express();
const PORT=8000;
app.use(bodyparser.json());


app.use('/users',usersRoutes);
app.get('/',(req,res)=> {
    res.send('Hello from home page browser');
});

app.listen(PORT,()=> console.log(`Server is up and running on port ${PORT}`));