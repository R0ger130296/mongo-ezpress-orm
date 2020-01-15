const express = require('express');
const mongoose=require('mongoose');

const db =mongoose.connect('mongoDB://localhost/bookAPI');
const app= express();
const bookRouter = express.Router();
const port = process.env.port||3000;
const Book=require('./models/bookModel');


bookRouter.route('/books')
.get((req,res)=>{
    Book.find((err,books)=>{
        if(err){
            return res.send(err)
        }
        return res.json(books)
    });
});

app.use('/api',bookRouter);

app.listen(port,()=>{
    console.log(`Corre en el puerto ${port}`)
})