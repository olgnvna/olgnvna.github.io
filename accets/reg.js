const wrapper = document.querySelector ('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    document.querySelector('.wrapper__outer').style.backgroundColor = " rgba(0, 0, 0, 0.42)";
    document.body.classList.add("_lock");
    window.scrollTo(0,0);
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    document.querySelector('.wrapper__outer').style.backgroundColor = " rgba(0, 0, 0, 0)";
    document.body.classList.remove("_lock");
    wrapper.classList.remove('active-popup');
});