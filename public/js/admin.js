document.getElementById('teacher').addEventListener('click',functionTeacher)

function functionTeacher() {
    document.querySelector('.middleTeacher').classList.add('Tmiddle')
    document.querySelector('.form').classList.add('Tform')
    document.querySelector('.middleStudent').classList.remove('Smiddle')
    document.querySelector('.formStudent').classList.remove('Sform')
    document.querySelector('.middleGroup').classList.remove('Gmiddle')
    document.querySelector('.formGroup').classList.remove('Gform')
    document.querySelector('.formCourse').classList.remove('Cform')
    document.querySelector('.middleCourse').classList.remove('Cmiddle')
}

document.getElementById('Student').addEventListener('click',functionStudent)

function functionStudent() {
    document.querySelector('.middleStudent').classList.add('Smiddle')
document.querySelector('.formStudent').classList.add('Sform')
document.querySelector('.middleTeacher').classList.remove('Tmiddle')
document.querySelector('.form').classList.remove('Tform')
document.querySelector('.middleGroup').classList.remove('Gmiddle')
document.querySelector('.formGroup').classList.remove('Gform')
document.querySelector('.formCourse').classList.remove('Cform')
document.querySelector('.middleCourse').classList.remove('Cmiddle')
}

document.getElementById('group').addEventListener('click',functionGroup)
function functionGroup() {
    document.querySelector('.middleGroup').classList.add('Gmiddle')
    document.querySelector('.formGroup').classList.add('Gform')
    document.querySelector('.middleStudent').classList.remove('Smiddle')
document.querySelector('.formStudent').classList.remove('Sform')
document.querySelector('.middleTeacher').classList.remove('Tmiddle')
document.querySelector('.form').classList.remove('Tform')
document.querySelector('.formCourse').classList.remove('Cform')
document.querySelector('.middleCourse').classList.remove('Cmiddle')
}

document.getElementById('course').addEventListener('click',functionCourse)
function functionCourse() {
    document.querySelector('.formCourse').classList.add('Cform')
    document.querySelector('.middleCourse').classList.add('Cmiddle')
    document.querySelector('.middleGroup').classList.remove('Gmiddle')
    document.querySelector('.formGroup').classList.remove('Gform')
    document.querySelector('.middleStudent').classList.remove('Smiddle')
document.querySelector('.formStudent').classList.remove('Sform')
document.querySelector('.middleTeacher').classList.remove('Tmiddle')
document.querySelector('.form').classList.remove('Tform')
}

