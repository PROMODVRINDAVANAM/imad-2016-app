//counter code
var button=document.getElementById('count') ;
var count=0;
button.onclick=function(){
    counter=count+1;
    var span=document.getElementById('count');
    span.innerHTML=count.toString();
};
