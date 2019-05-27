const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

//set line width and Color
ctx.lineWidth = 2;
ctx.strokeStyle = '#fff';


//draw orange square and white borderes ****LEFT******
ctx.fillStyle = '#de944d'
ctx.strokeRect(-1, 146, 150, 86);
ctx.fillRect(0, 147, 150, 84);
ctx.strokeRect(0, 136, 150, 106);

// draw half solid circle ****LEFT******
ctx.beginPath();
ctx.arc(150, 189, 43, Math.PI/2, 3*Math.PI/2, true);
ctx.stroke();
ctx.closePath();

//draw half dash circle ****LEFT******
ctx.beginPath();
ctx.setLineDash([5,2]);
ctx.arc(150, 189, 43, Math.PI/2, 3*Math.PI/2);
ctx.stroke();
ctx.setLineDash([]);

//draw top and bottom short lines ****LEFT******
ctx.beginPath();
ctx.moveTo(0, 30);
ctx.lineTo(50, 30);
ctx.moveTo(0, 348);
ctx.lineTo(50, 348);
ctx.stroke();
ctx.closePath();

// draw big circle ****LEFT******
ctx.beginPath();
ctx.arc(50, 189, 159, Math.PI/2, 3*Math.PI/2, true);
ctx.stroke();
ctx.closePath();

// set line width for lines inside orange box ****LEFT******
ctx.lineWidth = 3;
//Draw the lines ****LEFT******
ctx.beginPath();
ctx.moveTo(30, 172);
ctx.lineTo(30, 208);
ctx.moveTo(30, 190);
ctx.lineTo(35, 190);
ctx.stroke();
ctx.closePath();

//set white color for circle inside orange square ****LEFT******
ctx.fillStyle = '#fff'
//draw the circle ****LEFT******
ctx.beginPath();
ctx.arc(40, 190, 5, 0, Math.PI*2);
ctx.fill();
ctx.closePath();

//set line width and Color ****MIDDLE******
ctx.lineWidth = 2;
//middle circle stroke ****MIDDLE******
ctx.beginPath();
ctx.arc(359, 190, 45, 0, 2*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.fillStyle = '#de944d'
//middle circle fill ****MIDDLE******
ctx.beginPath();
ctx.arc(359, 190, 44, 0, 2*Math.PI);
ctx.fill();
ctx.closePath();

//middle line ****MIDDLE******
ctx.beginPath();
ctx.moveTo(358, 0);
ctx.lineTo(358, 380);
ctx.stroke();
ctx.closePath();



///////////////////OTHER HALF///////////////////////////


//draw orange square and white borderes ****RIGHT******
ctx.fillStyle = '#de944d'
ctx.strokeRect(570, 146, 150, 86);
ctx.fillRect(570, 147, 150, 84);
ctx.strokeRect(570, 136, 150, 106);

// draw half solid circle ****RIGHT******
ctx.beginPath();
ctx.arc(570, 189, 43, Math.PI/2, 3*Math.PI/2);
ctx.stroke();
ctx.closePath();

//draw half dash circle ****RIGHT******
ctx.beginPath();
ctx.setLineDash([5,2]);
ctx.arc(570, 189, 43, Math.PI/2, 3*Math.PI/2, true);
ctx.stroke();
ctx.setLineDash([]);

//draw top and bottom short lines ****RIGHT******
ctx.beginPath();
ctx.moveTo(720, 30);
ctx.lineTo(670, 30);
ctx.moveTo(720, 348);
ctx.lineTo(670, 348);
ctx.stroke();
ctx.closePath();

// draw big circle ****RIGHT******
ctx.beginPath();
ctx.arc(670, 189, 159, Math.PI/2, 3*Math.PI/2);
ctx.stroke();
ctx.closePath();

// set line width for lines inside orange box ****RIGHT******
ctx.lineWidth = 3;
//Draw the lines ****RIGHT******
ctx.beginPath();
ctx.moveTo(690, 172);
ctx.lineTo(690, 208);
ctx.moveTo(690, 190);
ctx.lineTo(685, 190);
ctx.stroke();
ctx.closePath();

//set white color for circle inside orange square ****RIGHT******
ctx.fillStyle = '#fff'
//draw the circle
ctx.beginPath();
ctx.arc(680, 190, 5, 0, Math.PI*2);
ctx.fill();
ctx.closePath();