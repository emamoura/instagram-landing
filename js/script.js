const button = document.querySelector('button');


button.addEventListener('click', () => {
    const body = document.querySelector('body'); 
    const group = document.querySelectorAll('.group');
    const logo = document.querySelector('.instagram-logo');
    body.classList.toggle('active');
    group[0].classList.toggle('active');
    group[1].classList.toggle('active');
     
    if(body.classList.contains("active")){
        button.textContent = "Light Mode";
        logo.src = "./img/instagram-logo-white.png"  
    } else {
        button.textContent = "Dark Mode";
        logo.src = "./img/instagram-logo.png"
    }

});