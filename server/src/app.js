let express = require('express')
let bodyParser =require('body-parser')
const app =express()
let port = 8081

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/status',function(req,res){
    res.send('Hello Nodejs server')
})

app.post('/hello/:person',function(req,res){
    console.log('hello - '+ req.params.person)
    res.send('Say Hello with ' + req.params.person)
})

//get by ID
app.get('/user/:userId',function(req,res){
    res.send('ดูข้อมูลผู้ใช้งาน :'+req.params.userId)
})


//get all users
app.get('/users',function(req,res){
    res.send('เรียกข้อมูล ผู้ใช้งานทั้งหมด')
})



//create user
app.post('/create-user',function(req,res){
    res.send('ทำการสร้างผู้ใช้งาน'+' : '+JSON.stringify(req.body))
})

//edit user
app.put('/edit-user/:userId',function(req,res){
    res.send('ทำการแก้ไขผู้ใช้งาน '+req.params.userId+' : '+JSON.stringify(req.body))
})



//delete user
app.delete('/delete-user/:userId',function(req,res){
    res.send('ทำการลบผู้ใช้งาน'+req.params.userId+' : '+JSON.stringify(req.body))
})

app.listen(port, function(){
    console.log('Server running on '+port)
})


//test git