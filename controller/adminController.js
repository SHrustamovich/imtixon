const fs = require('fs')
const path = require('path')
const FS = require('../lib/fsDeal')
const verify = require('./verifyUsers')
const users = new FS('../model/users.json')
const group = new FS('../model/group.json')
const course = new FS('../model/course.json')
const {verifyUser} = require('../lib/jwt')

module.exports = {
    getAdmin:(req,res) => {
        try{
            //
            const{cookies:{token}} = req
            if(!token) {
                return res.redirect('/')
            }
            const adminStatus = verifyUser(token)
            if(adminStatus) {
                // let array =[]
                const allUsers = JSON.parse(users.read())
                const foundTeacher = allUsers.filter(e => e.role == 'teacher')
                // console.log(foundTeacher);
                // array.push(foundTeacher)
                // console.log(array);
                const foundStudent = allUsers.filter(e => e.role == 'student')
                const allGroup = JSON.parse(group.read())
                const allCourse = JSON.parse(course.read())
                res.render('admin',{foundTeacher,foundStudent,allGroup,allCourse}) 
            }
        }catch(err){
            res.status(401).send({
                message:'bad request'
            })
        }
    }
}