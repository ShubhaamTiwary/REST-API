const express=require('express');
const bodyparser=require('body-parser');

const app=express();
const PORT=8000;

app.use(bodyparser.json());