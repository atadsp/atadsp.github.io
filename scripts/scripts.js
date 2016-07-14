//create a new instance of an audio object and adjust some of its properties
var audio = new Audio();
audio.src = "https://atadsp.github.io/assets/audio/The_Adventures_of_Andrew_Alexander_Abraham_and_Fiona_1.mp3";
audio.controls = true;
audio.loop = true;
audio.autoplay = false;
audio.crossOrigin = "anonymous";

// establish all the variables that the analyser will use
var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;

// initilize the MP3 player after the pages loads all of the HTML into the window
window.addEventListener("load", initMp3Player, false);

function initMp3Player(){
  document.getElementById('audio_box').appendChild(audio);
  context = new AudioContext();
  analyser = context.createAnalyser();
  canvas = document.getElementById('analyser_render');
  ctx = canvas.getContext('2d');
  source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);
  frameLooper();
}

//frameLooper animates nay style of graphics at 60fps based on browser
function frameLooper(){
  window.requestAnimationFrame(frameLooper);
  fbc_array = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(fbc_array);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00CCFF";
  bars=100;
  for (var i = 0; i < bars; i++){
    bar_x = i * 3;
    bar_width = 2;
    bar_height = -(fbc_array[i] / 2);
    ctx.fillRect (bar_x, canvas.height, bar_width, bar_height);
  }
}


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
