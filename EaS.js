const body = document.querySelector('body');

const main = document.createElement('div');
main.setAttribute('id', 'main');

function getRGB() {
    return "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
}

let baseGrid = (dimension) => {
    for (let i = 0; i < dimension * dimension; i++) {
        const gridSquare = document.createElement('div');
        main.appendChild(gridSquare);
        gridSquare.setAttribute('id', 'gridsquare');
        // gridSquare.textContent = ".....";
        gridSquare.addEventListener('mouseover', () => {
            console.log('hover');
            gridSquare.classList.toggle('toggler');
            gridSquare.style.backgroundColor = getRGB();
        });
    }
}

let killGrid = () => {
    let deleteGrid = document.getElementById('main');
    while (deleteGrid.firstChild) {
        deleteGrid.removeChild(deleteGrid.firstChild);
    }
    console.log('deleted');
}

const controls = document.createElement('div');
controls.setAttribute('id', 'controls');
const resetbtn = document.createElement('button');
resetbtn.textContent = 'Reset Grid';
resetbtn.addEventListener('click', () => {
    var pass = false;
    while (!pass) {
        let reset = prompt('Dimensions of Grid? (Max: 100x100)');
        if (reset > 100) {
            alert('Dimensions cannot go over 100x100');
        }
        else {
            console.log(reset);
            killGrid();
            baseGrid(reset);
            main.style.gridTemplateColumns = 'repeat(' + reset + ', 1fr)';
            if (reset <= 6) {
                main.style.paddingLeft = '45%';
                main.style.paddingRight = '45%';
            }
            else if (reset >= 30) {
                main.style.paddingLeft = '20%';
                main.style.paddingRight = '20%';
            }
            else if (reset >= 70) {
                main.style.paddingLeft = '5%';
                main.style.paddingRight = '5%';
            }
            pass = true;
        }
    }


})




baseGrid(16);
controls.appendChild(resetbtn);
body.appendChild(controls);
body.appendChild(main);