let Menu=document.querySelector('#menu-bars');

Menu.onclick=()=>{
    Menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    Menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}