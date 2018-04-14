
    const grid = document.querySelector('.grid');
    const sizeButton = document.querySelector('#set-grid');
    const container = document.querySelector('.container');
    const sketchPad = document.querySelector('.sketch-pad');

    function generateGrid(gridNum){ 

      for(let i = 0; i < gridNum; i++){ 
        let row = document.createElement("div"); 
        row.className = "row"; 
        
        for(let x = 1; x <= gridNum; x++){ 
            let cell = document.createElement("div"); 
            cell.className = "gridsquare"; 
            row.appendChild(cell);
            let gridSize = (100 / gridNum) + '%';
            console.log(gridSize);
            cell.setAttribute('class', 'grid');
            cell.setAttribute('style', 'width: ' + gridSize + '; ' + 'height: ' + gridSize + '; ');
        } 
        sketchPad.appendChild(row); 
      } 
     // document.getElementById("code").innerText = container.innerHTML;

    }

      generateGrid(16)

//      grid.addEventListener('mouseover', () => {
//        key.classList.add('grid-hover');
//   }); 

    sizeButton.addEventListener('click', (e) => {
        sketchPad.innerHTML = " ";
        let newSize = prompt('Please choose a grid size.');
        generateGrid(newSize);
   }); 