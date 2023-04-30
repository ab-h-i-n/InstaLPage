window.onload = function (){
    const loadingPage = document.querySelector(".loading-page");
    setTimeout(()=>{
      let footer = document.querySelector(".footer");
        loadingPage.style.display = "none";
        footer.style.transform = "scale(.7)";
        footer.style.bottom = "10px";
    },1000)
}

const emailfields = document.querySelector(".email");
const passfield = document.querySelector(".password");
const passShowbtn = document.querySelector(".show");
const loginbtn = document.querySelector(".login");

//password field scripts.............

passfield.addEventListener("focus",()=>{
        passShowbtn.style.display = "block";
        passShowbtn.style.filter = "opacity(1)";
})

passfield.addEventListener("blur",()=>{
  if(passfield.value.length === 0){
    passShowbtn.style.display = "none";
    loginbtn.style.background = "#00b3ff"
  }
  else{
    passShowbtn.style.filter = "opacity(0.5)";
    if(emailfields.value.length !== 0){
      loginbtn.style.background = "#007bef"
    }
    else{
      loginbtn.style.background = "#00b3ff"
    }
  }
})

    function show() {
        passfield.type = "text"
        passShowbtn.innerText = "Hide"
      }
      
      function hide() {
        passfield.type = "password"
        passShowbtn.innerText = "Show"
      }
         
      var pwShown = 0;
      passShowbtn.addEventListener("click",()=>{
        if (pwShown == 0) {
            pwShown = 1;
            show();
          } else {
            pwShown = 0;
            hide();
          }
        }, false);
    
loginbtn.addEventListener("click",()=>{
  loginbtn.innerHTML = '<img class="spinner" src="./images/spinner.gif">';
  setTimeout(()=>{
    loginbtn.innerHTML = "Log in";
    let errormsg = document.querySelector(".error");
    let container = document.querySelector(".container");
    errormsg.style.display = "block";
    container.style.width = "70%";
  },2000)
})