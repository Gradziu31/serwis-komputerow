/*
var zmienna = "Piotr"
	nazwisko = 10;
	

/*if(nazwisko <= 10){
	console.log("nazwisko jest równe lub mniejsze od 10");
}else if(nazwisko === 10){
	console.log("nazwisko jest równa 10 i jest typowym numerem nie string'iem");
} else {
	console.log("liczba nie spełnia wymagań");
}*/





/*
var liczba1 = 1;
var liczba2 = 20;

while(liczba1 < 20) {
	console.log(liczba1);
	liczba1++;
}
*/

/*
var liczbatajna = 10;

while(prompt("podaj liczbę") != liczbatajna){
	alert("nie!");
}
alert("tak");
*/




/*
do while
if 

for? for ( inicjalizacja; test_logiczny; inkrementacja )
*/	

/*--------------------------
while - do puki 

przykład 1:
var numer = 10;

		numer > 0
while(tutaj warunek który musi być spełniony (true) aby kod niżej się wykonał) {
	console.log(numer);
	numer--;
}

przykład 2:
var numer = 10;

while(prompt("podaj liczbę") != numer) {
	alert("nie trafiłeś");
}
alert("brawo");

!=   - oznacza że nie jest takie samo jak zmienna numer
--------------------------*/


/*
function odswiedzanie() {
	var data = new Date();

	var dzien = data.getDate();
	var miesiac = data.getMonth()+1;
	var rok = data.getFullYear();

	var godzina = data.getHours();
	if(godzina < 10) {
	godzina = "0" + godzina;
	}
	
	var minuta = data.getMinutes();
	if(minuta < 10) {
		minuta = "0" + minuta;
	}
	
	var sekunda = data.getSeconds();
	if(sekunda < 10) {
		sekunda = "0" + sekunda;
	}
	
	
	document.getElementById("demo").innerHTML = dzien + "/" + miesiac + "/" + rok + "/" + " </br> " + godzina + ":" + minuta + ":" + sekunda; 
	
	setTimeout("odswiedzanie()",1000);
}
*/

/*
function ktoryklawisz(e)
{
        nr = e.which;
		
		if (nr == nr)
                document.getElementById('napis').innerHTML=nr;	
		
        if (nr == 87)
                document.getElementById('napis').innerHTML=("W");
		if (nr == 65)
                document.getElementById('napis').innerHTML=("A");	
		if (nr == 83)
                document.getElementById('napis').innerHTML=("S");	
		if (nr == 68)
                document.getElementById('napis').innerHTML=("D");	
		if (nr == 38)
                document.getElementById('napis').innerHTML=("Góra");	
        if (nr == 37)
                document.getElementById('napis').innerHTML=("Lewo");
        if (nr == 40)
                document.getElementById('napis').innerHTML=("Dól");
        if (nr == 39 )
                document.getElementById('napis').innerHTML=("Prawo");
}

document.getElementById("demo").innerHTML = nr;

*/


/*
var data = new Date();
var dzien = data.getDay();

if(dzien==1){
	document.getElementById("demo").innerHTML = "OMG dziś poniedziałek";
} else if(dzien==2){
	document.getElementById("demo").innerHTML = "OMG dziś wtorek";
} else if(dzien==3){
	document.getElementById("demo").innerHTML = "dziś środa";
} else if(dzien==4){
	document.getElementById("demo").innerHTML = "dziś czwartek";
} else if(dzien==5){
	document.getElementById("demo").innerHTML = "Piątek weekendu początek :D";
} else if(dzien==6){
	document.getElementById("demo").innerHTML = "yeah bitch! sobota <3";
} else {
	document.getElementById("demo").innerHTML = "Niedziela już prawie koniec weekendu:(";
}
*/


/*
var data = new Date();
var dzien = data.getDay();

switch (dzien) {
	case 1:
	document.getElementById("demo").innerHTML = "poniedziałek";
	break;
	case 2:
	document.getElementById("demo").innerHTML = "wtorek";
	break;
	case 3:
	document.getElementById("demo").innerHTML = "środa";
	break;
	case 4:
	document.getElementById("demo").innerHTML = "czwartek";
	break;
	case 2:
	document.getElementById("demo").innerHTML = "piątek";
	break;
	case 3:
	document.getElementById("demo").innerHTML = "sobota";
	break;
	case 4:
	document.getElementById("demo").innerHTML = "niedziela";
	break;
}



function sprawdzajta(){
	var zmienna = document.getElementById("pole").value;

	if(zmienna > 0){
		document.getElementById("napis").innerHTML=("wartość dodatnia");
	} else if(zmienna < 0) {
		document.getElementById("napis").innerHTML=("wartość ujemna");
	} else if (zmienna == 0){
		document.getElementById("napis").innerHTML=("wartość równa 0");
	} else {
		document.getElementById("napis").innerHTML=("to nie jest liczba");
	}
}




function witamy(){
	
	var imie = document.getElementById("wpiszimie").value;	
	
	if (imie == ""){
		document.getElementById("divdotextu").innerHTML=("<h1>Podaj imie</h1>");
	} else{
	document.getElementById("divdotextu").innerHTML=("<h1>Witaj</h1>" + "<h1>" +wpiszimie.value +"</h1>");
	}
}









function funkcjarozpoczynajaca(){
	
	var zmienna1 = document.getElementById("pole1234").value;
	var zmienna2 = document.getElementById("pole2234").value;
	var napis = "";
	
	for(i=zmienna1;i<=zmienna2; i++){
		napis = napis + i + " ";
			document.getElementById("demo123").innerHTML=("<h1>" + napis + "</h1>");
	}
	
	
	
	
	
	for(i=zmienna2;i<=zmienna1; i++){
		napis = napis + i + " ";
			document.getElementById("demo123").innerHTML=("<h1>" + napis + "</h1>");
	}
	
	
	if(zmienna1 == zmienna2){
		document.getElementById("demo123").innerHTML=("zmienne są równe");
	}	
} 
	

	
/*


function funkcja(){
	var liczbaznakow = document.getElementById("text").value;

	if(liczbaznakow.length > 10){
		document.getElementById("tekst").style.color = "red";
	} else {
		console.log("wartość znaków za mała")
	}

}


*/





function mojafunkcja(){
	var napis = "tutaj wyświetli się co wpisałeś: ";
	var zmienna = document.getElementById("input").value;
	document.getElementById("napis").innerHTML=napis + zmienna;
}

