var express=require('express'),
app=express();

app.use(express.static('/app'))
    .get('*',function(req,res){
      res.sendFile('app/404.html',{root:__dirname});
    }).listen(3333);
