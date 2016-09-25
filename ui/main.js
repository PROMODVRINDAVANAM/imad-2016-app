console.log('Loaded!');
var element = document.getElementById("maintext");
element.innerHTML = "Promod";
// moving image
var element = document.getElementById("madi");
var marginleft=0;

function moveright(){
    marginleft=marginleft+5;
    img.style.marginleft=marginleft+'px';
    
    
}

img.onclick=function(){
    var interval=setinterval(moveright, 50);
};

