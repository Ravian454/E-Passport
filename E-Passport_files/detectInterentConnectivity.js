/*
 * 
 * Function Description: 
 * Function will check the availability of internet connection on client side.
 * 
 * @Author M. Ifzaal Majeed
 * Date 24/07/2015 
 * 
 */
var isDisconnected = false;

function doesConnectionExist() {
	if (bowser.msie) {
        	checkByUsingNavigator();
      } else if (bowser.firefox){
    	  checkByUsingAjaxCall();
      } else if (bowser.chrome || bowser.opera){
	      checkByUsingNavigator();
      }              
}

function checkByUsingNavigator(){
	var sleepTime = 5000; /// 5 Seconds
	var errorMessage = "Connection lost. Auto saving has been disabled until you are reconnected.";
	window.setInterval(function(){ 
		if (navigator.onLine) {
		  if(isDisconnected==true){
          	isDisconnected = false;
          	document.getElementById("connectionLostDiv").style.display="none";
          	window.location.href="connectionReset.xhtml";
          }
		} else {
		  isDisconnected = true;
		  document.getElementById("connectionLostDiv").style.display="block";
          document.getElementById("connectionLostMessage").focus();
		}
	},sleepTime);
}

function checkByUsingAjaxCall(){
	var sleepTime = 5000; /// 5 Seconds
	var errorMessage = "Connection lost. Auto saving has been disabled until you are reconnected.";
	window.setInterval(function(){ 
		var xhr = new XMLHttpRequest();
		var file = "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
	    var randomNum = Math.round(Math.random() * 10000);
	    xhr.open('HEAD', file + "?rand=" + randomNum, false);
	    try {
	        xhr.send();
	        if (xhr.status >= 200 && (xhr.status < 300 || xhr.status == 304)) {
	            if(isDisconnected==true){
	            	isDisconnected = false;
	            	document.getElementById("connectionLostDiv").style.display="none";
	            	window.location.href="connectionReset.xhtml";
	            }
	        } else {
	            //alert(errorMessage);
	            isDisconnected = true;
	            document.getElementById("connectionLostDiv").style.display="block";
	            document.getElementById("connectionLostMessage").focus();
	        }
	    } catch (e) {
	    	//alert(errorMessage);
	    	isDisconnected = true;
	    	document.getElementById("connectionLostDiv").style.display="block";
	    }
   },sleepTime);
}