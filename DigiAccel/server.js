const express= require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
var cors = require('cors')
const router = express.Router();


var app = express();
app.use(bodyParser.json())
app.use(cors())



var mysqlconnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'arsh',
    database :'digiaccel',
    multipleStatements:true

})

mysqlconnection.connect((err)=>{

    if(!err)
            console.log('Connected')
    else
            console.log('Connection Failed')

});

app.get('/quiz',(req,res)=>{

    mysqlconnection.query('show tables',(err,rows,fields)=>{
            if(!err){

                res.send(rows)
            }

            else
            console.log(err)
    })
})



app.get('/createQuiz/:name',(req,res)=>{


    let queryCreateQuiz=`create table ${req.params.name} (id int PRIMARY KEY AUTO_INCREMENT ,
                     ques varchar(300),diff int unique ,opt_1 varchar(300) ,
                     opt_2 varchar(300) , opt_3 varchar(300) , opt_4 varchar(300),
                    correctOpt int)`;



    mysqlconnection.query(queryCreateQuiz,(err,rows,fields)=>{

            if(!err){
                console.log('table created')
                res.send(rows)
            }
            else
            console.log(err)

    })
})

app.post('/createQuiz/:name',(req,res)=>{

    let addQuesQuery= `insert into ${req.params.name} (ques,diff,opt_1,opt_2,opt_3,opt_4,correctOpt)
                        values ('${req.body.ques}',${req.body.diff},'${req.body.opt_1}','${req.body.opt_2}','${req.body.opt_3}','${req.body.opt_4}',${req.body.correctOpt})`


                mysqlconnection.query(addQuesQuery,(err,rows,fields)=>{
                    if(!err){

                        res.send(rows);
                           }
                           else{
                            console.log(err)
                           }
                })

})

app.get('/getQues/:name',(req,res)=>{
    let getQuesQuery= `select * from ${req.params.name}`
    mysqlconnection.query(getQuesQuery,(err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.send(rows);
        }
        else
        console.log(err);
    })
})






app.listen(8080);

