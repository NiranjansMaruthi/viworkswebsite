//Loader Code for page
const load = document.getElementById('loader')
window.addEventListener("load",()=>{
   //show loader when page loads
    load.style.display="block";
    //when content loading
    setTimeout(()=>{
        load.style.display="none";
    },2400)  
});

  

//Show offline Message 
    const offlineMsg=document.getElementById('offline-msg');
    window.addEventListener("offline",()=>{
        offlineMsg.style.display='bloack';
    });
    window.addEventListener("Online",()=>{
        offlineMsg.style.display='none';
          setTimeout(()=>{
        load.style.display="none";
    },1000)
    });



/* Drop down code when clicked*/
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  })