const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 5000;

const app = express()

app.get('/', (req, res)=>{
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf-8", (err, data)=>{
        if(err){
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "Unberry");

        res.send(data);
    });
});

app.get('/blog', (req, res)=>{
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf-8", (err, data)=>{
        if(err){
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "Blogs | Unberry");

        res.send(data);
    });
});

app.get('/blog/:id', (req, res)=>{
    const filePath = path.resolve(__dirname, "./build", "index.html");
    let pathArr = req?.path?.split('/');
    let title = pathArr ? decodeURI(pathArr[pathArr?.length - 1]) : ''
    fs.readFile(filePath, "utf-8", (err, data)=>{
        if(err){
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, `${title || 'Blog'} | Unberry`);

        res.send(data);
    });
});

app.use(express.static(path.resolve(__dirname, "./build")));

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
})