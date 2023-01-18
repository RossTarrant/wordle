export default class UI{

    static initLoad(){
        this.createGrid();
    }

    static createGrid(){
        const content = document.querySelector('.content');
        const grid = document.createElement('div');
        grid.classList.add('grid');
        for(let i = 0; i < 6; i ++){
            const row = document.createElement('div');
            row.classList.add('row')
            for(let j = 0; i < 5; i ++){
                const cell = document.createElement('div');
                cell.classList.add('cell');
                row.appendChild(cell);
            }
            grid.appendChild(row);
        }
        content.appendChild(grid);
    }
}