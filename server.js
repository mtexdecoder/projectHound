var express=require('express'),
app=express();

app.use(express.static('.'));
app.use(express.static('app/'))
    .get('*',function(req,res){
      res.sendfile('app/index.html');
    }).listen(3333);
