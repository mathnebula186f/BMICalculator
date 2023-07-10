const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
res.sendFile(__dirname+"/bmiCalculator.html")
})

app.post("/bmi",function(req,res){
    // console.log(req.body.Num1);
    var h=Number(req.body.h);
    var w=Number(req.body.w);
    var sq_h=h*h;
    var result=w/sq_h;
    res.send("Your BMI is  ="+result);
})

app.listen(3000,function(){
    console.log("Server started for Calculator...");
})