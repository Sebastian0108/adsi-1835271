var	ans = document.getElementById("answer");
var qns = prompt("Cual es su nombre ?");

if(qns=="Sebastian "){
	ans.innerHTML = "Bienvenido Administrador: "+qns;

} else {
	ans.innerHTML = "Bienvenido Visitante: "+qns;
}