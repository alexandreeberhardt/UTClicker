var ECTS = 0;
var NbEtu = 0;
var NbTD=0;
const AutoIncrement = document.getElementById("ECTS")
var MultEtu=1;
var ClickValue=1;
var Prod=0;
var UpgradeClickPrice=1000
var PrixEtu=100
var EtudiantValue=1
var PrixTD=500
var TDValue = 5
var Elements=[]
var Etudiant={
	id : "AcheterEtu",
	prix : PrixEtu,
	prixID : "PrixEtu",
	nombre : NbEtu,
	nombreID: "NbEtu",
	valeur : EtudiantValue,
	//boutonID : "AcheterEtu",
	//fontionID : AcheterEtudiant,
	requiredID : "etu",
	required : function() { return true; }}
Elements.push(Etudiant)
var Click={
	id : "UpgradeClick",
	prix : UpgradeClickPrice,
	valeur : ClickValue,
	//boutonID : "UpgradeClick",
	//fontionID : UpgradeClick,
	requiredID : "click",
	required : function() { return true; }}
Elements.push(Click)	
	
var TD={
	id : "AcheterTD",
	prix : PrixTD,
	prixID : "PrixTD",
	nombre : NbTD,
	nombreID: "NbTD",
	valeur : TDValue,
	//boutonID : "AcheterTD",
	//fontionID : AcheterTD,
	requiredID : "TD",
	required : function() { return Etudiant.nombre > 2; }}
Elements.push(TD)

	
 
AutoIncrement.innerText = ECTS

function verifierVariable() {
	for (let i=0;i<Elements.length;i++){
		if (ECTS >= Elements[i].prix) {
        document.getElementById(Elements[i].id).style.display = "block";
    	} else {
        document.getElementById(Elements[i].id).style.display = "none";
    	}
    	if (Elements[i].required()===true){
    	document.getElementById(Elements[i].requiredID).style.display = "block";
    	}
    	else {
    	document.getElementById(Elements[i].requiredID).style.display = "none";
    	}
	}
}

function comptage() {
console.log("clic")
  ECTS+=Click.valeur;
  verifierVariable();
  document.getElementById("ECTS").textContent = ECTS;
}

document.getElementById("BoutonClic").addEventListener("click", comptage);
document.getElementById("UpgradeClick").addEventListener("click", UpgradeClick);
document.getElementById("AcheterEtu").addEventListener("click", AcheterEtudiant);
document.getElementById("AcheterTD").addEventListener("click", AcheterTD);

function UpgradeClick(){
  ECTS-=Click.prix
  Click.prix+=1000
  Click.valeur++
  clickValue.innerText = Click.valeur
  ClickUpgrade.innerText=Click.prix
  }

function AugmenterECTS_1sec_1ECTS() {
  ECTS++
  AutoIncrement.innerText = ECTS
  verifierVariable()
}
function AugmenterECTS_2sec_10ECTS() {
  ECTS+=10
  AutoIncrement.innerText = ECTS
  verifierVariable()
}
function AcheterEtudiant(){
	ECTS-=Etudiant.prix
	Etudiant.prix+=50
	document.getElementById(Etudiant.prixID).textContent = Etudiant.prix;
	Etudiant.nombre++
	Prod+=Etudiant.valeur
	document.getElementById(Etudiant.nombreID).textContent = Etudiant.nombre;
	document.getElementById("Prod").textContent = Prod;
	verifierVariable()
	setInterval(AugmenterECTS_1sec_1ECTS, 1000)
}
function AcheterTD(){
	ECTS-=TD.prix
	TD.prix+=400
	document.getElementById(TD.prixID).textContent = TD.prix;
	TD.nombre++
	Prod+=TD.valeur
	document.getElementById(TD.nombreID).textContent = TD.nombre;
	document.getElementById("Prod").textContent = Prod;
	verifierVariable()
	setInterval(AugmenterECTS_2sec_10ECTS, 2000)
}

