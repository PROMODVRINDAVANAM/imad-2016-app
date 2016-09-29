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
   
   request.open('GET', "http://promodvrindavanam.imad.hasura.io/counter",true);
   request.send(null);
};
