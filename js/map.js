function addScript(url) // Función que permite añadir <script src=https://maps.googleapis.com/maps/api/js?key=AIzaSyCJc4_1Am85ybGwB3T9Fk5PQR_05TPxCIE&amp;callback=initMap type="text/javascript"></script> dinámicamente, el cuerpo de la página.
{
	var s = document.createElement("script");
	s.src = url;
	s.type = "text/javascript";
	document.body.appendChild(s);
}

function addScript2(id) // Función que permite añadir <script src=https://maps.googleapis.com/maps/api/js?key=AIzaSyCJc4_1Am85ybGwB3T9Fk5PQR_05TPxCIE&amp;callback=initMap type="text/javascript"></script> dinámicamente, el cuerpo de la página.
{
	var s = document.createElement("div");
	s.id = id;
	s.name = "nombreContenedor";
	document.body.appendChild(s);
}




window.onload = function () 
{
	var chart ="";
	chart += "<ul>";
	chart += "<li>Item1</li>";
	chart += "<li>Item2</li>";
	chart += "</ul>";

	document.getElementById("ltchart").innerHTML = chart;
	//document.getElementById("demo").innerHTML = "Paragraph changed!";
	//addScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCJc4_1Am85ybGwB3T9Fk5PQR_05TPxCIE&callback=initMap"); // Se invoca a la función «addScript», cuando la página se ha cargado.
	//addScript2("contenedor"); // Se invoca a la función «addScript», cuando la página se ha cargado.
	
};





function getId(id) // Función que «retorna» el contexto de un elemento HTML, dado un id.
{
	return document.getElementById(id);
}




