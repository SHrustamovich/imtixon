const {verifyUser} = require('../lib/jwt')
const FS = require('../lib/fsDeal')
const users = new FS('../model/users.json')
const group = new FS('../model/group.json')
module.exports = {
    getTeacher:(req,res) => {
        try{
            //
            const{cookies:{token}} = req
            if(!token) {
                return res.redirect('/')
            }

            const userStatus = verifyUser(token)
            if(userStatus){
              const allUsers = JSON.parse(users.read())
              const foundUser =allUsers.find(e =>e.id == userStatus) 
              console.log(foundUser);
              const allStudent = allUsers.filter(e => e.role =='student')
              const findStudent = allStudent.filter(e => e.group == foundUser.group)
              console.log(findStudent);
              res.render('teacher',{foundUser,findStudent})
            }
        }catch(err){
            res.status(401).send({
                message:'aaaa'
            })
        }
    }
}