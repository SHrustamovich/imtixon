const {verifyUser} = require('../lib/jwt')
const FS = require('../lib/fsDeal')
const users = new FS('../model/users.json')
const group = new FS('../model/group.json')

module.exports = {
    studentGet:(req,res) => {
  try{
      const {cookies:{token}} = req

      if(!token) {
          return res.redirect('/')
      }
      const userStatus = verifyUser(token)
      if(userStatus){
          const allUser = JSON.parse(users.read())
          const foundUser = allUser.find(e => e.id ==userStatus)
          const allGroup = JSON.parse(group.read())
          const foundTeacher = allGroup.filter(e =>e.course == foundUser.course)
          res.render('students',{foundUser,foundTeacher})
      }else{
          res.redirect('/')
      }
  }catch(err) {
      res.status(401).send({
          message:'bad request'
      })
  }
    }
}