module.exports ={
    //get all user
    index(req,res){
        res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด')
    },

    //create user
    create(req,res){
        res.send('ทำการสร้างผู้ใช้งาน'+JSON.stringify(req.body))
    },

    //edit use , suspend active
    put(req,res){
        res.send('ทำการแก้ไขข้อมูล'+ res.params.userId + ' : '+JSON.stringify(req.body))
    },

    //delete user
    remove(req,res){
        res.send('ทำการลบผู้ใช้งาน'+req.params.userId+':'+JSON.stringify(req.body))
    }
}