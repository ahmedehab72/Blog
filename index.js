window.onscroll = function() {
    const button = document.getElementById("scrollUp");
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById("scrollUp").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};



const navbarToggle = document.querySelector('.toggle');
const navbarNav = document.querySelector('.nav-links');

navbarToggle.addEventListener('click', () => {
  navbarNav.classList.toggle('show');
});