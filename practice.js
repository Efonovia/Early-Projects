let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
// let width = canvas.width;
// let height = canvas.height;
// function circle(x, y, radius, fillCircle) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if (fillCircle) {
//         ctx.fill();
//     } else {
//         ctx.stroke();
//     }
// };
// // The Ball constructor
// function Ball() {
//     this.x = width / 2;
//     this.y = height / 2;
//     this.xSpeed = 5;
//     this.ySpeed = 0;
//     this.speed = 5;
// };
// // Update the ball's position based on its speed
// Ball.prototype.move = function () {
//     this.x += this.xSpeed;
//     this.y += this.ySpeed;
//     if (this.x < 0 || this.x > width) {
//         this.xSpeed = -this.xSpeed;
//     } else if (this.y < 0 || this.y > height) {
//         this.ySpeed = -this.ySpeed;
//     }
// };
// // Draw the ball at its current position
// Ball.prototype.draw = function () {
//     circle(this.x, this.y, 10, true);
// };

// // check for collision 


// // Set the ball's direction based on a string
// Ball.prototype.setDirection = function (direction) {
//     if (direction === "up") {
//         this.xSpeed = this.speed;
//         this.ySpeed = -this.speed;
//     } else if (direction === "down") {
//         this.xSpeed = this.speed;
//         this.ySpeed = this.speed;
//     } else if (direction === "left") {
//         this.xSpeed = -this.speed;
//         this.ySpeed = this.speed;
//     } else if (direction === "right") {
//         this.xSpeed = this.speed;
//         this.ySpeed = this.speed;
//     } else if (direction === "stop") {
//         this.xSpeed = 0;
//         this.ySpeed = 0;
//     }
    
//     };
// // Create the ball object
// let ball = new Ball();
// // An object to convert keycodes into action names
// let keyActions = {
//     32: "stop",
//     37: "left",
//     38: "up",
//     39: "right",
//     40: "down"
// };

// let speeds = {
//     49: 1,
//     50: 2,
//     51: 3,
//     52: 4,
//     53: 5,
//     54: 6,
//     55: 7,
//     56: 8,
//     57: 9,
// }
// // The keydown handler that will be called for every keypress
// document.querySelector("body").addEventListener('keydown' ,function (event) {
//     let direction = keyActions[event.keyCode];
//     console.log(speed[event.keyCode]);
//     ball.setDirection(direction);
    
// });
// // The animation function, called every 30 ms
// setInterval(function () {
//     ctx.clearRect(0, 0, width, height);
//     ball.draw();
//     ball.move();
    
//     ctx.strokeRect(0, 0, width, height);
// }, 30);



// // // BOUNCY BALL 
// // const bounceSound = new Audio('sounds/Recording.m4a');
// // let ballArray = [];
// // let colors = ["Red", "Orange", "Yellow", "Green", "Blue",
// // "Purple"];

// // for (let i = 0; i < 10; i++) {
// //     ballArray[i] = new Ball();
// //     ctx.fillStyle = colors[Math.floor(Math.random() * 4)];
// // }
// // console.log(ballArray);
// // setInterval(function() {
// //     ctx.clearRect(0, 0, 500, 500);

// //     for (let i = 0; i < ballArray.length; i++) {
// //         ballArray[i].move();
// //         ballArray[i].draw();
// //         ballArray[i].checkCollision();
// //     }
// //     ctx.strokeRect(0, 0, 500, 500)
// // } , 10);

// // function Ball() {
// //     this.x = Math.floor(Math.random() * 480);
// //     this.y = Math.floor(Math.random() * 480);
// //     this.xspeed = Math.floor(Math.random() * 10 - 5);
// //     this.yspeed = Math.floor(Math.random() * 10 - 5);
// // }

// // function circle(x, y, radius, fillCircle) {
// //     ctx.beginPath();
// //     ctx.arc(x, y, radius, Math.PI * 2, false)
// //     if (fillCircle) {
// //         ctx.fill();
        
// //     } else {
// //         ctx.stroke();                                                                                                   
// //     }
// // };

// // Ball.prototype.draw = function() {
// //     circle(this.x, this.y, 10, true)
// // };

// // Ball.prototype.move = function() {
// //     this.x += this.xspeed;
// //     this.y += this.yspeed;
// // };

// // Ball.prototype.checkCollision = function() {
// //     if(this.x < 0 || this.x > 500) {
// //         this.xspeed = -this.xspeed;
// //         new Audio();
// //         bounceSound.play();
// //     }

// //     if (this.y < 0 || this.y > 500) {
// //         this.yspeed = -this.yspeed;
// //         bounceSound.play();
// //     }   
// // }





// let size = 0;
// setInterval( function() {
//     ctx.clearRect(0 , 0, 500, 500);
//     ctx.fillRect(0, 0, size, size);

//     size++;
//     if (size > 500) {
//         size = 0;
//     }
// }, 3000);


// // // BEEEEEEEEE
// // let x = 250;
// // let y = 250;
// // setInterval(function() {
// //     ctx.clearRect(0, 0, 500, 500);
// //     drawBee(x, y);
// //     x = update(x);
// //     y = update(y);
// //     ctx.strokeRect(0, 0, 500, 500);
// // }, 1);

// // function circle(x, y, radius, fillCircle) {
// //     ctx.beginPath();
// //     ctx.arc(x, y, radius, Math.PI * 2, false);
    
// //     if (fillCircle) {
// //         ctx.fill();
// //     } else {
// //         ctx.stroke();
// //     }
// // }

// // function drawBee(x, y) {
// //     ctx.fillStyle = "gold";
// //     ctx.strokeStyle = "black";
// //     ctx.lineWidth = 2;
// //     circle(x, y, 8, true);
// //     circle(x, y, 8, false);
// //     circle(x - 5, y - 11, 5, false);
// //     circle(x + 5, y - 11, 5, false);
// //     circle(x - 2, y - 1, 2, false);
// //     circle(x + 2, y - 1, 2, false);
// // }

// // function update(coordinate) {
// //     let offset = Math.random() * 4 - 2;
// //     coordinate += offset;
// //     if (coordinate > 500) {
// //         coordinate = 500;
// //     } 
// //     if(coordinate < 0) {
// //         coordinate = 0;
// //     }
// //     return coordinate;
// // }


// PAINT
ctx.strokeStyle = 'blue';
    document.querySelector('canvas').addEventListener('mousemove', function (event) {
        ctx.beginPath();
        ctx.arc(event.pageX, event.pageY, 3, 0, Math.PI * 2, true);
        ctx.fill();
        painting = true;
    });
    


// let head = ctx.strokeRect(150, 20, 50, 50);
// let neck = ctx.strokeRect(170, 70, 10, 25);
// let arms = ctx.strokeRect(105, 95, 140, 10);
// let torso = ctx.strokeRect(135, 105, 80, 80);
// let leftLeg = ctx.strokeRect(135, 185, 10, 60);
// let rightLeg = ctx.strokeRect(205, 185, 10, 60);


// ctx.moveTo(10, 10);
// ctx.lineTo(60, 60);
// ctx.moveTo(60, 10);
// ctx.lineTo(10, 60);


// function drawShape(lines) {
//         ctx.beginPath();
//         ctx.moveTo(lines[0][0], lines[0][1]);
//         for (let i = 0; i < 5; i++) {
//             ctx.lineTo(lines[i][0], lines[i][1]);
//         }
//         ctx.stroke();
// }

// // drawShape([[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]]);
// drawShape([[50, 50], [50, 100], [25, 120], [100, 50], [70, 90], [100, 90], [70, 120]]);

