let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left= value + 'px';
    moon.style.top= value *3 + 'px';
    mountains3.style.top= value*1.5  + 'px';
    mountains4.style.top= value*1.2  + 'px';
    river.style.top= value + 'px';
    boat.style.top= value  + 'px';
    boat.style.left= value*3  + 'px';
    nouvil.style.fontSize = value  + 'px';
    if(scrollY >=80){
        nouvil.style.fontSize = 80 + 'px' ;
        nouvil.style.position = 'fixed' ;
        if(scrollY >= 256)
            document.querySelector('.main').style.background = 'linear-gradient(#0f008c,#25003b )'
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#3b0016,#390047)'
    }
}