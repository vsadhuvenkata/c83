var last_position_x, last_position_y;


canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


color = "Pink";
width_of_line = 5;


var width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;
if (width<992){
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
console.log("mytouchstart");
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;


last_position_x = e.touches[0].clientX-canvas.offsetLeft;
last_position_y = e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
    console.log("mytouhmove");
    current_postion_of_touch_x = e.touches[0].clientX-canvas.offsetLeft;
    current_postion_of_touch_y = e.touches[0].clientY-canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;


    console.log("last_position_of_x_and_y_coordinates = ");
    console.log("x = "+ last_position_x +"y = "+ last_position_y);
    ctx.moveTo(last_position_x,last_position_y);


    console.log("current_positon_of_x_and_y_coordinates = ");
    console.log("x = "+ current_postion_of_touch_x + "y = " + current_postion_of_touch_y);
    ctx.lineTo(current_postion_of_touch_x,current_postion_of_touch_y);
    ctx.stroke();
    
    last_position_x = current_postion_of_touch_x;
    last_position_y = current_postion_of_touch_y;
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}