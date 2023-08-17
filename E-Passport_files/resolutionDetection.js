// Called from login, register and welcome pages 
// can be called from other plages if required
// @author : Osama Munir
function detectMinimumResolution(){
	//alert(screen.width);
	if (screen.width < 1280)
	{
//		window.location="minScreenResolution.xhtml";
	}
}

// Called from applicationOption.xhtml 
// Sets the resolution value to hidden feild which sets property of common controller
// Request Filter checks this property and set it in session to be used in newModification, renewal, nicop and reprint pages
// @author : Osama Munir
function detectResolutionAppOptions(){
	//alert(screen.width);
	if (screen.width < 1280)
	{
		//window.location="minScreenResolution.xhtml";
	}
	else if (screen.width >= 1920)
	{
		 document.getElementById('appOptionForm:hidden2').value = "high";
	}
	else if (screen.width < 1920  && screen.width >= 1280)
	{
		document.getElementById('appOptionForm:hidden2').value = "low";
	}
	
	$(document.getElementById('appOptionForm:hidden2')).change();
}



//Called from applicationInbox.xhtml 
//Sets the resolution value to hidden feild which sets property of common controller
//Request Filter checks this property and set it in session to be used in newModification, renewal, nicop and reprint pages
//@author : Osama Munir
function detectResolutionAppsInbox(){
	//alert(screen.width);
	if (screen.width < 1280)
	{
		//window.location="minScreenResolution.xhtml";
	}
	else if (screen.width >= 1920)
	{
		 document.getElementById('tabl:hidden2').value = "high";
	}
	else if (screen.width < 1920  && screen.width >= 1280)
	{
		document.getElementById('tabl:hidden2').value = "low";
	}
	
	$(document.getElementById('tabl:hidden2')).change();
}