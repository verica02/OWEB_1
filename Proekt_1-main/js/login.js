
function goToLogin(){
    window.location.href="login.html";
  }
  function goToHome(){
    window.location.href="proekt1.html";
  }

  
  function openRegister(){
    document.getElementById("inner").style.transform= "rotateY(-180deg)";
  }
  function openLogin(){
    document.getElementById("inner").style.transform= "rotateY(0deg)";
  }

  function openHome(){
    var email=document.getElementById("email");
    var pass=document.getElementById("pass");

    if(email.value && pass.value){
      window.location.href="proekt1.html";
    }
  }


