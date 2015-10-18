function hideCookieBlock(idtohide)
{ 
	var data2 = new Date();
 		data2 = data2.getFullYear + 1;
	
	document.getElementById(idtohide).style.visibility = "hidden";
	
	document.cookie = "visited=yes; expires= Fri, Oct 16 " + data2 + " 17:29:52 UTC ";
    //alert(data);
	document.getElementById("test").innerHTML = document.cookie;
	
}


function checkCookie(testString)
 {
 	if(document.cookie.length != 0)
 	{
 	
 		/*TEST* var cookStr="asd";
 		var cookTab;
 		cookTab = document.cookie.split("=");
 		for(i=0; i < cookTab.length; i++)
 		{
 			cookStr += "<b>pozycja " + i + ": " + cookTab[i]+ " </b>"; 

 		}	
 		/*TEST* document.getElementById('test2').innerHTML = "document.cookie != 0, " + document.cookie + " " + cookStr;*/
 		document.getElementById('cookieBox').style.visibility = "hidden";
 	}
 	else
 	{
 		/*TESTdocument.getElementById('test2').innerHTML = "document.cookie = 0, " + document.cookie; */
 	}
 	
 	
 }
