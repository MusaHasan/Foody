let menu = document.querySelector('#manu-bars'); // For manue bar on (max-width: 768px) start
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active'); // For manue bar on (max-width: 768px) end
} 

document.querySelector('#search-icon').onclick = () =>{         // For Search system start
    document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove ('active') // For Search system end
}