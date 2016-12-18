
var tokenString = localStorage.getItem('token');
var token = JSON.parse(tokenString);
var student={};
var avatare=[];

function profilBildAendern(){
    document.body.style.backgroundColor = "white";
    $('#content').load('ChangeBody.html #profilBildAendern');
    $(document).ready(function() {
    $("#profilePicChange").attr("src",avatare[student.avatarId].avatarBigUrl);
    });
}

function passwortAendern(){
    document.body.style.backgroundColor = "white";
    $('#content').load('ChangeBody.html #passwortAendern');
}

function profilLöschen(){
    document.body.style.backgroundColor = "white";
    $('#content').load('ChangeBody.html #profilLöschen');
}

function chapter1(){
    document.body.style.backgroundColor = "#a1c153";
    $('#content').load('ChangeBody.html #chapter1');
}
function chapter2(){
    document.body.style.backgroundColor = "#dbe283";
    $('#content').load('ChangeBody.html #chapter2');
}
function chapter3(){
    document.body.style.backgroundColor = "#bad151";
    $('#content').load('ChangeBody.html #chapter3');
}
function chapter4(){
    document.body.style.backgroundColor = "#7cc3a3";
    $('#content').load('ChangeBody.html #chapter4');
}
function chapter5(){
    document.body.style.backgroundColor = "#ffea64";
    $('#content').load('ChangeBody.html #chapter5');
}
function chapter6(){
    document.body.style.backgroundColor = "#fff3d8";
    $('#content').load('ChangeBody.html #chapter6');
}
function chapter7(){
    document.body.style.backgroundColor = "#ffcf53";
    $('#content').load('ChangeBody.html #chapter7');
}
function chapter8(){
    document.body.style.backgroundColor = "#f5a04c";
    $('#content').load('ChangeBody.html #chapter8');
}
function chapter9(){
    document.body.style.backgroundColor = "#e35184";
    $('#content').load('ChangeBody.html #chapter9');
}
function chapter10(){
    document.body.style.backgroundColor = "#ee7ba9";
    $('#content').load('ChangeBody.html #chapter10');
}
function chapter11(){
    document.body.style.backgroundColor = "#f7bed2";
    $('#content').load('ChangeBody.html #chapter11');
}
function chapter12(){
    document.body.style.backgroundColor = "#c9427e";
    $('#content').load('ChangeBody.html #chapter12');
}
function chapter13(){
    document.body.style.backgroundColor = "#4fa8da";
    $('#content').load('ChangeBody.html #chapter13');
}
function chapter14(){
    document.body.style.backgroundColor = "#94d3e5";
    $('#content').load('ChangeBody.html #chapter14');
}
function chapter15(){
    document.body.style.backgroundColor = "#005daa";
    $('#content').load('ChangeBody.html #chapter15');
}
function chapter16(){
    document.body.style.backgroundColor = "#658bc8";
    $('#content').load('ChangeBody.html #chapter16');
}

function startBild(){
    document.body.style.backgroundColor = "white";
    $('#content').load('ChangeBody.html #startBild');
}

function login(){
    //JSON um den Student zu bekommen
    var studentJSON = {
        "async": false,
        "url": "http://46.101.204.215:1337/api/V1/student",
        "method": "GET",
        "headers": {
            "authorization":""}}

    //JSON Avatare
    var avatareJSON = {
        "async": false,
        "url": "http://46.101.204.215:1337/api/V1/avatar",
        "method": "GET",
        "headers": {
            "authorization":""}}

    //ändere den token in studentJSON und avatareJSON
    studentJSON.headers.authorization = token.token;
    avatareJSON.headers.authorization = token.token;

    //Befehl um student zu bekommen
    $.ajax(studentJSON).done(function (response) {
    student=response;
    });

    //Befehl um avatare zu bekommen
    $.ajax(avatareJSON).done(function (response) {
    avatare=response;
    });

}

function setInfos(){
  $('#name').html(student.forename+'<br>'+student.surname);
  $("#nameImg").attr("src",avatare[student.avatarId].avatarBigUrl);
  $("#profilePic").attr("src",avatare[student.avatarId].avatarInactiveUrl);
  $("#schoolPic").attr("src",student.school.imageUrlBig);
  $('#schoolName').html(student.school.name);

  var adresse = student.school.address;
  var resAdresse = adresse.split(",");
  $('#dropdownInfos').html(resAdresse[0]+"<br>"+resAdresse[1]+"<br>"+student.school.country);
  $('#dropdownInfosLast').html("<br>"+student.school.email+"<br>"+student.school.telefon);

  $("#klassePic").attr("src",student.studyGroups.imageUrlBig);
  $("#klassePicBig").attr("src",student.studyGroups.imageUrlInactive);
  $('#klasseName').html("Klasse<br>"+student.studyGroups.class);
  $('#dropdownInfosLastName').html(student.formteacher);

}

var picChange=avatare[student.avatarId];
function changePic(pic){
    picChange=pic;
    $("#profilePicChange").attr("src",avatare[pic].avatarBigUrl);
}

function changePicSave(){
    var changePicJSON = {
        "async": false,
        "url": "",
        "method": "PUT",
        "headers": {
            "authorization":""}}
    changePicJSON.headers.authorization = token.token;
    changePicJSON.url = "http://46.101.204.215:1337/api/V1/avatar/:"+picChange;
    $.ajax(changePicJSON).done(function (response) {
   alter("done");
    });

    startBild();
    login();
};

  login();

$(document).ready(function(){
    setInfos();
});

