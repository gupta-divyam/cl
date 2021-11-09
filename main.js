var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 3;

width=screen.width
new_width=screen.width-70
new_heigth=screen.height-100
if(width < 992){
    document.getElementById("myCanvas").width=new_width
    document.getElementById("myCanvas").height=new_heigth
 document.body.style.overflow="hidden";
}

    canvas.addEventListener("touchstart", touch_start);
    function touch_start(e){
        console.log(e)
        last_position_of_x=e.changedTouches[0].clientX- canvas.offsetLeft;
        last_position_of_y=e.changedTouches[0].clientY- canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", touch_move)
    function touch_move(e){
        currentX=e.changedTouches[0].clientX- canvas.offsetLeft;
        currentY=e.changedTouches[0].clientY- canvas.offsetTop;
        ctx.beginPath()
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line
        ctx.moveTo(last_position_of_x, last_position_of_y)
        ctx.lineTo(currentX,currentY)
        ctx.stroke()
     last_position_of_x=currentX;
     last_position_of_y=currentY;
    }
    canvas.addEventListener("mousemove", mouse_move)
function mouse_move(e) {
currentX= e.clientX- canvas.offsetLeft;
currentY= e.clientY- canvas.offsetTop;

if(mouseposition == "mousedown"){
    ctx.beginPath()
    ctx.strokeStyle= "Black";
  ctx.lineWidth= 2;

  ctx.moveTo(last_position_of_x, last_position_of_y)

  ctx.lineTo(currentX, currentY)
  ctx.stroke()
}
last_position_of_x= currentX_position;
last_position_of_y= currentY_position;
}