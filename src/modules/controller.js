import UI from './UI.js';
import Grid from './Grid.js';

export default class controller{

    static initLoad(){
        let grid = new Grid();
        UI.displayGrid(grid.getGridData());
        this.addKeyboardListener(grid);
    }

    static addKeyboardListener(grid){
        document.addEventListener('keydown', (event) => {
            if(this.isLetter(event.key)){
                this.addLetter(grid, event.key);
            }
            else if(event.key == 'Backspace'){
                grid.removeLetter();
                UI.resetGrid(grid.row);
                UI.displayGrid(grid.getGridData());
            }
            else if (event.key == 'Enter'){
                if(grid.cell==5){
                    let rowColours = grid.submitWord();
                    grid.colourData[grid.row-1] = rowColours;
                    UI.resetGrid(grid.row);
                    UI.displayGrid(grid.getGridData());
                    UI.addColour(grid.colourData, grid.row - 1);
                }
                else{
                }
            }
        })
    }

    static addLetter(grid, letter){
        grid.addLetter(letter.toUpperCase());
        UI.resetGrid();
        UI.displayGrid(grid.getGridData());
    }

    static isLetter(c){
        return c.length === 1 && c.match(/[a-z]/i);
    }
}