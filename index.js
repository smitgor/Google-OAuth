const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

//middleware
app.set('view engine','ejs');
app.use(express.json());

app.get('/',(req,res) => {
    res.render('index');
})

app.get('/login',(req,res) => {
    res.render('login');
})

app.listen(port, ()=>{
    console.log(`Sever is running ${port}`);
})