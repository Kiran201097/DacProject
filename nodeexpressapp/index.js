var express=require("express");
var app=express();
var m=require("./primemodule");

function logger(req,resp,next){
    console.log(req.path);
    console.log(req.query);
    next();
}

function checkPrime(req,resp){
    resp.sendFile("prime.html",{root:__dirname});
}
function isPrime(req,resp){
    var x=m.myprime(req.query.num);
    console.log(x);
    if(x){
        resp.end(req.query.num+" is a prime number.");
    }else{
        resp.end(req.query.num+" is not a prime number.");
    }
}
app.use(logger);
app.get("/isprime",isPrime);
app.get("/",checkPrime);

app.listen(5000,()=>{
    console.log("server started on port 5000");
})