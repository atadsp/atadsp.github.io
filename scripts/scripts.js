/* GODZILLA CODE STARTS HERE */

function monsterCreate(){
	var name = $("#monsterName").val();
	var height = $("#monsterHeight").val();
	var weight = $("#monsterWeight").val();
	var age = $("#monsterAge").val();
	$('#monsterDisplay').append("<div class='row'> <h3> Monster Name: " + name + "</h3>" + "<h3> Monster Height: " + height + "</h3>" + "<h3> Monster Weight:" + weight + "</h3>" + "<h3> Monster Age: " + age + "</h3> </div>");
}

function clearMonster(){
    document.getElementById('monsterDisplay').innerHTML = "<br>";
}
