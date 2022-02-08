const {verifyUser} = require('../lib/jwt')

module.exports = {
    cookieCheck: (req,res,next) => {
        try{
          const {cookies :{token}} = req
          if(!token){
              return res.redirect('/')
          }
          const userStatus = verifyUser(token)
          if(token) {
              next()
          }else{
              res.redirect('/')
          }
        }catch(err){
            res.status(401).send({
                message:'bad request'
            })
        }
    }
}