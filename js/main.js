function verifyUsers(){
  var users = document.querySelector("#users").value;
  if(users == "Gustavo" || users == "Pedro"){
    window.location.href = "teste/portifolio.html";
    return;
  }
}