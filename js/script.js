let togglemenu = document.getElementById('togglemenu');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 = document.getElementById('line3');
let togglemenudiv = document.getElementById('togglemenudiv');
togglemenu.addEventListener('click',()=>{
    togglemenudiv.classList.toggle('active');
    line1.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');
})