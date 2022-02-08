const express = require('express')
const router = express.Router()
const multer = require('multer')

const verifyUsers = require('./verifyUsers')
const verifyUserController = require('./verifyUserController')
const {cookieCheck} = require('./cookieParser')
const {studentGet} = require('./studentController')
const {teacherInfo,studentInfo,groupInfo,courseInfo} = require('./createController')
const {getTeacher} = require('./teacherController')
const {getAdmin} = require('./adminController')
const {getHomeWork} = require('./homeWorkController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

router

.post('/login',verifyUsers,verifyUserController.POST)
.post('/addTeacher',teacherInfo)
.post('/addStudent',studentInfo)
.post('/addGroup',groupInfo)
.post('/addCourse',courseInfo)
.post('/upload',upload.array('document'),getHomeWork)
.get('/',(req,res) => {
    res.render('login')
})
.get('/students',studentGet)

.get('/admin', cookieCheck,getAdmin)
.get('/teacher',getTeacher)
module.exports = router