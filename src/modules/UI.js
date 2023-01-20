export default class UI{

    static resetGrid(currentRow){
        const content = document.querySelector('.content');
        const grid = document.querySelector('.grid');
        content.removeChild(grid);
    }

    static displayGrid(data){
        const content = document.querySelector('.content');
        const grid = document.createElement('div');
        grid.classList.add('grid');
        let x = 0
        for(let i = 0; i < 5; i ++){
            const row = document.createElement('div');
            row.classList.add('row')
            for(let j = 0; j < 5; j ++){
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.textContent = data[i][j];
                row.appendChild(cell);
            }
            grid.appendChild(row);
        }
        content.appendChild(grid);
    }

    static addColour(colourData, rowID){
        const grid = document.querySelector('.grid');
        const rows = document.querySelectorAll('.row');
        const row = rows[rowID];
        const cells = row.querySelectorAll('.cell');
        for(let i = 0; i < 5; i++){
            const cell = cells[i];
            if(colourData[rowID][i]==2){
                cell.setAttribute('id', 'pos')
            }
            else if(colourData[rowID][i]==1){
                cell.setAttribute('id', 'letter')
            }  
        }
    }
}