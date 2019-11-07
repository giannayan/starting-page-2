
// a reference to the enclosing scene element.
// We will append newly made spheres directly to this.
const SCENE = document.querySelector('a-scene')

// a few random starting positions we can use to make spheres.
const startPositions = [
  [-3, -2, -4],
  [-1, 5, 2],
  [4, -5, -1],
  [2, 3, 5]
]

const colors = [
  "red",
  "blue",
  "yellow",
  "pink"
]

// removes and returns a random element from an array
function sample(arr) {
  const randIdx = Math.floor(Math.random() * arr.length)
  const value = arr[randIdx]
  arr.splice(randIdx, 1)
  return value
}

function addEntityToScene(entity) {
  SCENE.appendChild(entity)
}

function createSphere() {
  const newSphere = document.createElement('a-sphere')
  const color = sample(colors)
  const coords = sample(startPositions).join(' ')
  newSphere.setAttribute("radius", Math.ceil(Math.random() * 3))
  newSphere.setAttribute("color", color)
  newSphere.setAttribute("position", coords)
  return newSphere
}

function createSpheres() {
  // TODO: implement me!
}


function function1(){
    document.getElementById("boxtop").setAttribute("color", '#FF00B2');
    console.log("Top Box was clicked!")
    
}
function function2(){
    document.getElementById("boxbtm").setAttribute("color", '#FF00B2');
    console.log("Bottom Box was clicked!")
    
}
function function3(){
    document.getElementById("boxlft").setAttribute("color", '#FF00B2');
    console.log("Left Box was clicked!")
    
}
function function4(){
    document.getElementById("boxrt").setAttribute("color", '#FF00B2');
    console.log("Right Box was clicked!")
    
}
// function play(){
//   document.getElementById("startBtn").setAttribute()
// }
  function play(){
        console.log("I was clicked")
       var audio = document.getElementById("song");
       //audio.setAttribute(sound, "volume", 10);
       audio.setAttribute("sound","volume", "10")
  }
       
function pause(){
  console.log("pausedddd")
var sound="src: url(dancingqueencropped.mp3)"
var entity = document.querySelector('[sound]');
entity.components.sound.pauseSound();
      }   
      
function pauseSong(){
  //melany's function: this pauses the sound
  //link to documentation: https://aframe.io/docs/0.8.0/components/sound.html#methods_pausesound
  console.log("Melany Pauseddd")
  var entity = document.querySelector('[sound]');
  entity.components.sound.stopSound();
}

function init(){
   var sceneEl = document.querySelector('a-scene'); 
        var scoreBoard = document.querySelector('#score');

        sceneEl.querySelector('scorebox').addEventListener('click', () => {
          this.data.score++;
          var newScore = 'Score: ' + this.data.score
          scoreBoard.setAttribute('text', 'value',  newScore)
        })
  
}

function updateScore(){
  console.log( document.querySelector('#score').getAttribute('points'))
  document.querySelector('#score').setAttribute('text', 'value', 'Score: ' + document.querySelector('#score').getAttribute('points'));
  document.querySelector('#score').setAttribute('points', parseInt(document.querySelector('#score').getAttribute('points')) + 1);
}

function playKarlie() {
      console.log("hi- i am playing karlie winningggg")
      var entity = document.getElementById('karlie')
      entity.components.sound.playSound()
      //document.getElementById('karlie').setAttribute("autoplay", "true")
    }