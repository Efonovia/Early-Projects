function getRandomNumber(size) {
    return Math.floor(Math.random() * size)
}

let width = 400;
let height = 400;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height),
};
let clicks = 0
// let image = document.querySelector('#map');
// image.addEventListener('mouseover', changePic);
// image.addEventListener('mouseout', changePicAgain);
// function changePic() {
//     image.src = 'hd.jpg'
// };
// function changePicAgain() {
//     image.src = 'images/7.png'
// }
document.querySelector('#map').addEventListener('click', function (event) {
   clicks++;
   let distance = getDistance(event, target);
   let distanceHint = getDistanceHint(distance);
   document.querySelector('#distance').textContent = distanceHint;
   if (distance < 8) {
       alert("Congratulations! you found the spot and it took you " + clicks + " clicks to do it.") 
   }
    
});

function getDistance(event, target) {
    diffX = event.offsetX - target.x;
    diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

function getDistanceHint(distance) {
    if (distance < 10) {
    return "Boiling hot!";
    } else if (distance < 20) {
    return "Really hot";
    } else if (distance < 40) {
    return "Hot";
    } else if (distance < 80) {
    return "Warm";
    } else if (distance < 160) {
    return "Cold";
    } else if (distance < 320) {
    return "Really cold";
    } else {
    return "You\'re way off, infact you\'re Freezing!";
    }
    };
