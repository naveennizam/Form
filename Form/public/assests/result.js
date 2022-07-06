document.querySelector("#a").innerHTML=localStorage.getItem("name");
document.querySelector("#b").innerHTML=localStorage.getItem("email");
document.querySelector("#c").innerHTML=localStorage.getItem("City");
document.querySelector("#d").innerHTML=localStorage.getItem("City_Code");


let peel = `Your Form has been Submitted. </br>Thank you!`
document.querySelector('#info').innerHTML=peel;