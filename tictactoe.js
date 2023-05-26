let x_o;
let winLine;
let player = "X";
document.querySelector('#x-is-the-winner').addEventListener('click', again);
const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');
const box4 = document.querySelector('#box4');
const box5 = document.querySelector('#box5');
const box6 = document.querySelector('#box6');
const box7 = document.querySelector('#box7');
const box8 = document.querySelector('#box8');
const box9 = document.querySelector('#box9');
const boxes = document.querySelectorAll('.eachbox');
const lines = document.querySelectorAll('.eachline');

console.log(lines);
boxes.forEach((box) => {
    box.addEventListener('click', handleClick);
});

function handleClick(e) {
    if (e.target.textContent === "") {
        e.target.textContent = player;
    switchPlayer();
    if (player === "X") {
        e.target.style.color = 'red';
    } else {
        e.target.style.color = 'blue';
    }
    // setTimeout(win, 200);
    // setTimeout(frontEnd, 1000);
    frontEnd(win())
    console.log(win());
    
    }
    
}

function switchPlayer() {
    if (player === "X") {
        player = "O";
        
    } else {
        player = "X";
        
    }
}
function win() {

    //THE HORIZONTAL WINS//

    if (box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X") {
        document.getElementById("thl").style.display = 'block';
        winLine = document.querySelector('#thl');
        return "X", winLine;
    }
    else if(box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X") {
        document.getElementById("mhl").style.display = 'block';
        winLine = document.querySelector('#mhl');
        return "X", winLine;
    }
    else if(box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X") {
        document.getElementById("bhl").style.display = 'block';
        winLine = document.querySelector('#bhl');
        return "X", winLine;
    }
    else if (box1.textContent === "O" && box2.textContent === "O" && box3.textContent === "O") {
        document.getElementById("thl").style.display = 'block';
        winLine = document.querySelector('#thl');
        return "O", winLine;
    }
    else if(box4.textContent === "O" && box5.textContent === "O" && box6.textContent === "O") {
        document.getElementById("mhl").style.display = 'block';
        winLine = document.querySelector('#mhl');
        return "O", winLine;
    }
    else if(box7.textContent === "O" && box8.textContent === "O" && box9.textContent === "O") {
        document.getElementById("bhl").style.display = 'block';
        winLine = document.querySelector('#bhl');
        return "O", winLine;
    }



    //THE VERTICAL WINS//

    else if (box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X") {
        document.getElementById("lvl").style.display = 'block';
        winLine = document.querySelector('#lvl');
        return "X", winLine;
    }
    else if(box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X") {
        document.getElementById("mvl").style.display = 'block';
        winLine = document.querySelector('#mvl');
        return "X", winLine;
    }
    else if(box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X") {
        document.getElementById("rvl").style.display = 'block';
        winLine = document.querySelector('#rvl');
        return "X", winLine;
    }
    else if (box1.textContent === "O" && box4.textContent === "O" && box7.textContent === "O") {
        document.getElementById("lvl").style.display = 'block';
        winLine = document.querySelector('#lvl');
        return "O", winLine;
    }
    else if(box2.textContent === "O" && box5.textContent === "O" && box8.textContent === "O") {
        document.getElementById("mvl").style.display = 'block';
        winLine = document.querySelector('#mvl');
        return "O", winLine;
    }
    else if(box3.textContent === "O" && box6.textContent === "O" && box9.textContent === "O") {
        document.getElementById("rvl").style.display = 'block';
        winLine = document.querySelector('#rvl');
        return "O", winLine;
    }



    //THE DIAGONAL WINS//

    else if (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X") {
        document.getElementById("ldl").style.display = 'block';
        winLine = document.querySelector('#ldl');
        return "X", winLine;
    }
    else if(box3.textContent === "X" && box5.textContent === "X" && box7.textContent === "X") {
        document.getElementById("rdl").style.display = 'block';
        winLine = document.querySelector('#rdl');
        return "X", winLine;
    }
    else if (box1.textContent === "O" && box5.textContent === "O" && box9.textContent === "O") {
        document.getElementById("ldl").style.display = 'block';
        winLine = document.querySelector('#ldl');
        return "O", winLine;
    }
    else if(box3.textContent === "O" && box5.textContent === "O" && box7.textContent === "O") {
        document.getElementById("rdl").style.display = 'block';
        winLine = document.querySelector('#rdl');
        return "O", winLine;
    }
    return;

}

function frontEnd(winner) {
    if (winner === "X") {
        document.querySelector('#x-is-the-winner').style.display = 'block';
        document.querySelector('#x-is-the-winner').textContent = winner + " is the winner";
    } else if(winner === "O") {
        document.querySelector('#x-is-the-winner').style.display = 'block';
        document.querySelector('#x-is-the-winner').textContent = winner + " is the winner";
    }
}

function again() {
    document.querySelector('#x-is-the-winner').style.display = 'none';
    x_o = document.querySelectorAll('.eachbox');
    for(let i = 0; i < x_o.length; i++) {
        x_o[i].textContent = "";
    }

    for (let j = 0; j < lines.length; j++) {
        console.log(lines[j]); 
    }
}


// let word = "javascript is awesome";
// let newword = "";

// for (let index = 0; index < word.length; index++) {
//     if(word[index] === "a") {
//         newword += "4";
//     }
//     else if(word[index] === "i") {
//         newword += "1";
//     }
//     else if(word[index] === "e") {
//         newword += "3";
//     }
//     else if(word[index] === "o") {
//         newword += "0";
//     }
//     else if(word[index] === "s") {
//         newword += "5";
//     }
//     else {
//         newword += word[index];
//     }
// }
// console.log(newword);
