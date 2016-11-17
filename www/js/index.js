<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
    $('#random').on("click",function(){
//        alert("CLICKED");
       results();
    });
});
    
    function results(){
        var result = random();
        
        var text = $('textinput').val();
        alert(result);
        if (random == 1){
            result = "ture";
            navigator.notification.beep(1);
        } else {
            result = "false";
            navigator.notification.beep(2);
        }
            
        
        
    }
    

    function random() {
	return !Math.round(Math.random());
    }
    
    
  
