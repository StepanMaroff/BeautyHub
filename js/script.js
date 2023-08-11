let hamburger = document.querySelector(".hamburger");
let navContacts = document.querySelector(".nav__contacts")
let navLinks = document.querySelector("div.nav__links");
let navLinkAll = document.querySelectorAll("nav a");
console.log(navLinkAll);



hamburger.onclick = function() {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
    navContacts.classList.toggle("nav__contacts_active");
}



for (let number = 0;number<9;number++) {
    console.log(number);
    navLinkAll[number].onclick = function() {
        hamburger.classList.remove("hamburger_active")
        navLinks.classList.remove("nav__links_active");
        navContacts.classList.remove("nav__contacts_active"); 
    }
    

}