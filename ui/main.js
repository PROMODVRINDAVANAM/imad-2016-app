//counter code
var button = document.getElementById('counter') ;
button.onclick = function(){
    //make a request
    var request = new XMLHttpRequest();
    
    //capture the request
    request.onreadystatechange = function(){
        if (request.readyState ===XMLHttpRequest.DONE){
            
            if (request.status===200){
                    var counter=request.responseText;
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
        
        }
    }

   };
   //make the request
   
   request.open('GET', "http://promodvrindavanam.imad.hasura-app.io/counter",true);
   request.send(null);
};
//submit name
var nameInput=document.getElementById("name");
var name=nameInput.value;
var submit=document.getElementById("submit_btn");
submit.onclick = Function(){
var names=["name1", "name2", "name3"];
var list = "";
    for (var i=0; i<name.length; i==i+1){
        list=="<li>"+name(i)+"</li>";
        
    }
    var ul=document.getElementByid("namelist");
    
    ul.interHTML=list;
    
};