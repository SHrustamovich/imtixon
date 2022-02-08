const { signUser} = require('../lib/jwt')
module.exports ={
    POST:(req,res) => {
        const {id,role} = req.body
        const userToken = signUser(id)
        if(role == 'admin'){
            res.cookie('token',userToken)
            res.redirect('/admin')
        } else if(role == 'teacher') {
            res.cookie('token',userToken)
            res.redirect('/teacher')
        } else if(role == 'student') {
            res.cookie('token',userToken)
            res.redirect('/students')
        } else{
            res.send('ok')
        }
    }
}