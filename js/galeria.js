var num=1;

function adelante(){
	num++;
	if(num > 3)
		num = 1;
	var foto = document.getElementById("foto");
	foto.src = "img/foto"+num+".jpg";

	
}

function atras(){
	num--;
	if(num < 1)
		num = 3;
	var foto = document.getElementById("foto");
	foto.src = "img/foto"+num+".jpg";

	
}