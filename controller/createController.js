const fs = require('fs')
const path = require('path')
const FS = require('../lib/fsDeal')

const users = new FS('../model/users.json')
const group = new FS('../model/group.json')
const course = new FS('../model/course.json')

module.exports = {
    teacherInfo:(req,res) => {
       const {teacherName,teacherPhone,group,course} = req.body
           allUsers = JSON.parse(users.read())
           let id = allUsers.length + 1
           let role = 'teacher'
           allUsers.push({id,name:teacherName,password:teacherPhone,role,phone:teacherPhone,group,course})
           users.write(allUsers)
           res.redirect('admin')
    },

    studentInfo:(req,res) => {
        const {studentName,studentPhone,course,group} = req.body
            allUsers = JSON.parse(users.read())
            let id = allUsers.length + 1
            let role = 'student'
            allUsers.push({id,name:studentName,password:studentPhone,role:role,phone:studentPhone,course,group})
            users.write(allUsers)
            res.redirect('admin')
     },

     groupInfo:(req,res) => {
        const {groupName,course,teacher} = req.body
            allGroup = JSON.parse(group.read())
            let id = allGroup.length + 1
            allGroup.push({id,groupName,course,teacher})
            group.write(allGroup)
            res.redirect('admin')
     },

     courseInfo:(req,res) => {
        const {courseName,info,price} = req.body
            allCourse = JSON.parse(course.read())
            let id = allCourse.length + 1
            allCourse.push({id,courseName,info,price})
            course.write(allCourse)
            res.redirect('admin')
     }
}
