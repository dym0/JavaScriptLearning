function hideCookieBlock(idtohide)
{ 
	var data2 = new Date();
 		data2 = data2.getFullYear() + 1;
	document.cookie = "visited=yes; expires=Fri, 16 Oct " + data2 + " 17:29:52 UTC";
	document.getElementById(idtohide).style.visibility = "hidden";

	
	
    //alert(data);
	//cument.getElementById("test").textContent = document.cookie;
	
}

function findLargets(first, second, third, fourth, fifth, sixth) {
    var x = 0;

    for (i = 0; i < arguments.length; i++) {
        if (x < arguments[i]) {
            x = arguments[i];
        }

    }


    // document.getElementById('test').textContent = x;
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
 		/*TEST* document.getElementById('test2').textContent = "document.cookie != 0, " + document.cookie + " " + cookStr;*/
 		document.getElementById('cookieBox').style.visibility = "hidden";
 	}
 	else
 	{
 		/*TESTdocument.getElementById('test2').textContent = "document.cookie = 0, " + document.cookie; */
 	}
 	
 	
 }

var mapa = {
    texturA: "black",
    texturB: "gray",
    width: "100px",
    height: 5,
    viewFinder: "_|_",
    margin: 100,
    draw: function () {





        for (i = 0; i < 5; i++) {

            var blackDiv = document.createElement("div");
            var whiteDiv = document.createElement("div");
            document.getElementsByTagName('body')[0].appendChild(blackDiv);
            document.getElementsByTagName('body')[0].appendChild(whiteDiv);

            blackDiv.className = "classblack";
            blackDiv.style.cssFloat = "left";
            blackDiv.style.backgroundColor = "black";



            whiteDiv.className = "classwhite";
            whiteDiv.style.cssFloat = "left";
            whiteDiv.style.backgroundColor = "gray";

        }




    }
};


function findName(myName)  // find your name in text and copy it to table.
{
    
    var text2 = "stibidibidin dongdong Damian, wrc 8 monia";

    var hick=[];
    
   
    for(i = 0; i < text2.length; i++)
    {
        if(text2[i] === myName[0])
        { 
           for(j=i; j < myName.length + i; j++)
            {
                hick.push(text2[j]);
            }

        }
    }

    if(hick.length == 0)
    {

        alert(myName +", your name dont exist in text.");
    }

    if(hick.length != 0)
    {
        alert(myName + ", your name exist in text");
        alert(hick.length);
    }

 
}

    /* for (i = 0; i < this.height; i++) {


         for (j = 0; i < this.width; i++) {
             document.getElementById
         }

     }*/

 
/* Phone book */

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}
function search(lastName) {
    var contactLength = contacts.length;
    for (i = 0; i < contactLength; i++) {
        if (lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        }
    }
}

function add(firstName, lastName, email, phoneNumber) {

    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
    };
}

add("Zbychu", "Kubina", "zbychu.kubina@gmail.com", "0000202020202");

list();


/* PHone Book end */ 