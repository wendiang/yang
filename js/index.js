(function(){

  var bg=document.querySelector(".bg");
 
 bg.style.height=window.innerHeight+"px"
bg.style.width=window.innerWidth+"px"
   var li=document.querySelector(".body-left").getElementsByTagName("li");
    var right_box=document.querySelector(".right-box")
   for(var i=0;i<li.length;i++){
   	li[i].onclick=function(){
   		 //var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

   		 var db =openDatabase("mydb","1.0",'ok',2*1024*1024);
   		 db.transaction(function (tx) {  
   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "菜鸟教程")');
   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.runoob.com")');

})
   	}
   }
  

  



})()