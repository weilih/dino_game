if(typeof(module) !== 'undefined'){
  module.exports = hello;
}

function hello(string){
 return "hello " + string;
}

document.addEventListener('DOMContentLoaded', function(){
  canvas = document.getElementById('world');
  context = canvas.getContext('2d');

  dino = new Image();
  dino.src = 'dino.png';
  ground = new Image();
  ground.src = 'ground.png';

  context.drawImage(dino, 0, 240);
  context.drawImage(ground, 0, 595);
});
