var audio_e = [];
  var canvas = [];
  var ctx = [];
  var source = [];
  var context =[];
  var analyser = [];
  var fbc_array = [];
  var bar_x;
  var bar_width;
  var bar_height;
  var bars;
  
var srcs = ["https://atadsp.github.io/assets/audio/The_Adventures_of_Andrew_Alexander_Abraham_and_Fiona_1.mp3", "https://atadsp.github.io/assets/audio/Star_trek_IV.mp3"];

var n = 2;


for(var j = 0; j<n; j++){
audio_e.push(new Audio());
audio_e[j].src = srcs[j];
audio_e[j].controls = true;
audio_e[j].loop = true;
audio_e[j].autoplay = false;
audio_e[j].crossOrigin = "anonymous";
}

// initilize the MP3 player after the pages loads all of the HTML into the window
window.addEventListener("load", initMp3Player, false);

function initMp3Player(){
  for(var j = 0; j < n; j++){
    document.getElementById('audio_box_id' + (j + 1)).appendChild(audio_e[j]);
    context.push(new AudioContext());
    analyser.push(context[j].createAnalyser());
    canvas.push(document.getElementById('analyser_render' + (j + 1)));
    ctx.push(canvas[j].getContext('2d'));
    source.push(context[j].createMediaElementSource(audio_e[j]));
    source[j].connect(analyser[j]);
    analyser[j].connect(context[j].destination);
  }
  frameLooper();
}

//frameLooper animates nay style of graphics at 60fps based on browser
function frameLooper(){
  window.requestAnimationFrame(frameLooper);
 for(var j = 0; j < n; j++){
  fbc_array.push(new Uint8Array(analyser[j].frequencyBinCount));
  analyser[j].getByteFrequencyData(fbc_array[j]);
  ctx[j].clearRect(0, 0, canvas[j].width, canvas[j].height);
  ctx[j].fillStyle = "#00CCFF";
  bars = 100;
    for (var i = 0; i < bars; i++){
      bar_x = i * 3;
      bar_width = 2;
      bar_height = -(fbc_array[j][i] / 2);
      ctx[j].fillRect (bar_x, canvas[j].height, bar_width, bar_height);
    }
  }
}