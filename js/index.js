(function(){

  var bg=document.querySelector(".bg");
 
 bg.style.height=window.innerHeight+"px"
bg.style.width=window.innerWidth+"px"
   var li=document.querySelector(".body-left").getElementsByTagName("li");
    var right_box=document.querySelector(".right-box")
   for(var i=0;i<li.length;i++){
   	li[i].onclick=function(e){
   	    right_box.removeClass("right-box")
   	}
   }
  



})()