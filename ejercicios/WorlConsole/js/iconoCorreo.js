function cargaContextoCanvas(canva){
	var elemento = document.getElementById(canva);
	if(elemento && elemento.getContext){
		var contexto = elemento.getContext('2d');
		if(contexto){
			return contexto;
		}
	}
	return false;
}

window.onload = function (){
	//Recibimos el elemento canvas
	var ctx = cargaContextoCanvas('correo');
	ctx.beginPath();
	ctx.arc(25,25,25,0,Math.PI*2,false);
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(10,15,30,20);
	ctx.fill();

	ctx.moveTo(10,15);
	ctx.fillStyle = "#000000";
	ctx.lineTo(30,40);
	ctx.stroke();

	ctx.moveTo(40,15);
	ctx.fillStyle = "#000000";
	ctx.lineTo(25,35);
	ctx.stroke();
}
