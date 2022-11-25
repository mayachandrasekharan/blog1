const express = require('express');
const BloggerData = require('./src/Model/blogdb')
const cors = require('cors');
var app = new express();
var Port = 3002;
app.use(cors());
app.get('/Blogs',function(req,res){
    BloggerData.find()
               .then(function(blogger){
                    res.send(blogger);
               });
});
app.listen(Port,function(){
    console.log(`listening to port ${Port}`);
  });