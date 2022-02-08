const fs = require('fs')
const path = require('path')

module.exports = {
    getHomeWork:(req,res) => {
        try{
            //
            const{cookies:{token}} = req
            if(!token) {
                return res.render('/')
            }
            
            res.redirect('teacher')
        }catch(err) {
            res.status(401).send({
                message:'aaxxaa'
            })
        }
    }
}