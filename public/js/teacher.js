document.getElementById('Student').addEventListener('click',functionSTUDENT)
function functionSTUDENT() {
    document.querySelector('.StudentForm').classList.add('SFORM')
    document.querySelector('.GroupForm').classList.remove('GFORM')
    document.querySelector('.fileForm').classList.remove('fileFormF')
}

document.getElementById('Group').addEventListener('click',functionGROUP)
function functionGROUP() {
    document.querySelector('.GroupForm').classList.add('GFORM')
    document.querySelector('.StudentForm').classList.remove('SFORM')
}

document.getElementById('uploadFile').addEventListener('click',fileUpload)
function fileUpload() {
    document.querySelector('.fileForm').classList.add('fileFormF')
}
