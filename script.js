window.onload = function (){
    const loadingPage = document.querySelector(".loading-page");
    const mainfooter = document.querySelector(".main .footer");
    mainfooter.style.display = "none"
    setTimeout(()=>{
        loadingPage.style.display = "none";
        mainfooter.style.display = "block"
    },1000)
}

const inputfields = document.querySelector(".inputfields");
const passfield = document.querySelector(".password");
const passShowbtn = document.querySelector(".show");
const loginbtn = document.querySelector(".login");

passfield.addEventListener("focus",()=>{
        passShowbtn.style.display = "block"
})
inputfields.addEventListener("blur",()=>{
    passShowbtn.style.display = "none"
    console.log("blur");
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
    