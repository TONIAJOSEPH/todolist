// function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
             var response = JSON.parse(this.responseText);
             var output="";
            //  var res="";
             for (var i=0;i<response.length;i++){
                output +='<li id="liitem" class="liitems">' + '<input type="checkbox" id="completed" name="box" onclick="check()">' + response[i].title + '<i class="far fa-trash-alt" id="delete" name="delbox" onclick="this.parentNode.remove()"></i>' + '</li>';
            
             }
             document.getElementById("list").innerHTML = output; 
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
// display date
var date = document.getElementById("date");
const options = {
weekday:'long',
month:'long',
day:'numeric'
}
const today=new Date();
date.innerHTML=today.toDateString("en-us",options);
// display date

// refresh
function refreshing(){
    location.reload();   
    }
// refresh

// message
function check(){ 
    var b=document.getElementsByName("box");
    for (let i=0;i<b.length;i++){
    if(b[i].checked){
        tasksno();
        return true;  
    }   
    }
}

function tasksno(){
    var checkedtasks=document.querySelectorAll('input[type="checkbox"]:checked').length;
    console.log(checkedtasks);
    if (checkedtasks==5) {
       alert("completed 5 tasks");
       return true;
    }else{
        return false;
    }
}
//message
