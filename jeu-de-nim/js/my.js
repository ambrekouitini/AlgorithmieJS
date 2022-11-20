document.querySelector("#btnPlay").addEventListener("click", play);
document.querySelector("#btnRemove").addEventListener("click", remove_allumette);

var allumette_restante=16;
var player1="";
var player2="";
var tour=1
var nb_allumette_prise=0;
var namePlayer="";

function play(){
	player1=document.querySelector("#namePlayer1").value;
	player2=document.querySelector("#namePlayer2").value;
	namePlayer=player1;
	document.querySelector("#form_play").style.display="none";
	document.querySelector("#main").style.display="block";

	for(var i=0; i<allumette_restante; i++){
		var img = document.createElement("img");
		img.src = "images/allumette1.png";
		var div = document.querySelector("#board");
		div.appendChild(img);
		img.addEventListener("click", click_allumette);
	}
	document.querySelector("#getNamePlayer").innerHTML=namePlayer+  ", a toi de jouer !";
}

function click_allumette(){
	nb_allumette_prise=document.querySelectorAll("#board .check").length;

	if(this.getAttribute("class")=="check"){
		this.setAttribute("class","");
	}else{
		if(nb_allumette_prise<3){
			this.setAttribute("class","check");
		}
	}	
}

function remove_allumette(){
	var check_allumette=document.querySelectorAll("#board .check");
	nb_allumette_prise=check_allumette.length;
	for(var i=0;i<check_allumette.length;i++){
		check_allumette[i].remove();
	}
	allumette_restante=allumette_restante-nb_allumette_prise; 
	if(tour==1){
		namePlayer=player2;
		tour=2;
	}else{
		namePlayer=player1;
		tour=1;
	}
	if(allumette_restante<=0){
		document.querySelector("#getNamePlayer").innerHTML=namePlayer+" est le vainqueur !";
		document.querySelector("#btnRemove").style.visibility="hidden";
	}else{
		document.querySelector("#getNamePlayer").innerHTML= namePlayer+  ", a toi de jouer !";
	}	
}