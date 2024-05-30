// Get the home element
const Home = document.querySelector('.home');

// Array of background image URLs
const images = [
    'img/pexels-alem-sanchez-182647-1563045.jpg',
    'img/pexels-chanwalrus-941869.jpg',



];

let currentIndex = 0;

// Function to change background image with fade out effect
function changeBackground() {
    Home.classList.add('fade-out');
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        Home.style.backgroundImage = `url(${images[currentIndex]})`;
        Home.classList.remove('fade-out');
    }, 500); // Wait for 0.5 seconds (same duration as transition) before changing image
}

// Call the function to start changing background image (e.g., on page load)
changeBackground();

// Optionally, you can call the function repeatedly to create a slideshow effect
setInterval(changeBackground, 5000); // Change image every 5 seconds (5000 milliseconds)


const formOpenBtn = document.querySelector("#form-open"),
home=document.querySelector(".home"),
formContainer=document.querySelector(".form_container"),
formCloseBtn=document.querySelector(".form_close"),
signupBtn=document.querySelector("#signup"),
loginBtn=document.querySelector("#login"),
pwShowHide=document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click",() => home.classList.add("show"))
formCloseBtn.addEventListener("click",() => home.classList.remove("show"));

pwShowHide.forEach(icon =>{
    icon.addEventListener("click",()=>{
        let getPwInput = icon.parentElement.querySelector("input");
    if(getPwInput.type === "password") {
        getPwInput.type="text";
        icon.classList.replace("uil-eye-slash" ,"uil-eye" )
    }else{
        getPwInput.type="password";
        icon.classList.replace("uil-eye" ,"uil-eye-slash" )
        
    }
    })
})

signupBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.add("active")
})
loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formContainer.classList.remove("active")
})


