if(typeof(module) !== 'undefined'){
  module.exports = hello;
}

function hello(string){
 return "hello " + string;
}


function groundUpdate(ground, game_data){
  if(ground.x_coord < -ground.img.width) {
    ground.x_coord = 0;
  } else {
    ground.x_coord = ground.x_coord - game_data.ground_speed;
  }
};

function dinoUpdate(dino, game_data){
  // if()
};


function clearCanvas(context) {
  context.clearRect(0, 0, 1000, 1000);
}

function drawGround(context, ground){
  context.drawImage(ground.img, ground.x_coord, ground.y_coord);
  context.drawImage(ground.img, (ground.img.width + ground.x_coord), ground.y_coord);
}

function drawDino(context, dino){
  context.drawImage(dino.img, dino.x_coord, dino.y_coord);
}

document.addEventListener('DOMContentLoaded', function(){
  canvas = document.getElementById('world');
  context = canvas.getContext('2d');

  dino_img = new Image();
  dino_img.src = 'dino.png';
  ground_img = new Image();
  ground_img.src = 'ground.png';

  context.drawImage(dino_img, 0, 140);
  context.drawImage(ground_img, 0, 310);

  game_data = {
    ground_speed: 5,
    ended: false
  }

  dino = {
    img: dino_img,
    x_coord: 0,
    y_coord: 240,
    y_velocity: 0,
    y_neutral: 240,
    jump_power: 5
  };

  ground = {
    img: ground_img,
    x_coord: 0,
    y_coord: 310
  };


  function gameLoop(lastDraw){
    requestAnimationFrame(function(timestamp){
      shouldDraw = (timestamp - lastDraw) >=16
      if(shouldDraw){
        lastDraw = timestamp;
        clearCanvas(context)
        groundUpdate(ground, game_data)
        drawGround(context, ground)
        drawDino(context, dino)
      }

      gameLoop(lastDraw);
    })
  }
  gameLoop(0);
});
