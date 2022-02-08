const FS = require('../lib/fsDeal')
// const { signUser } = require('../lib/jwt')
const users = new FS('../model/users.json')
module.exports = (req,res,next) => {
    const {name,password} =req.body

    const allUsers = JSON.parse(users.read())
     
    const foundUser = allUsers.find(e =>e.name == name && e.password == password)

    if(!foundUser) {
        return res.status(401).send('User topilmadi')
    }
     
    //
    req.body.role = foundUser.role
    req.body.id = foundUser.id
    next()
}