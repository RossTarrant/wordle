export default class UI{

    static resetGrid(){
        const content = document.querySelector('.content');
        const grid = document.querySelector('.grid');
        content.removeChild(grid);
    }

    static displayGrid(data, colourData){
        const content = document.querySelector('.content');
        const grid = document.createElement('div');
        grid.classList.add('grid');
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
        this.addColour(colourData)
    }

    static addColour(colourData){
        const cells = document.querySelectorAll('.cell');
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                const cell = cells[(i*5)+j];
                if(colourData[i][j]==2){
                    cell.setAttribute('id', 'pos')
                }
                else if(colourData[i][j]==1){
                    cell.setAttribute('id', 'letter')
                }
            }
        }
    }
}