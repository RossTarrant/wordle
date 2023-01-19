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
            console.log(event.key)
            if(this.isLetter(event.key)){
                this.addLetter(grid, event.key);
            }
            else if(event.key == 'Backspace'){
                grid.removeLetter();
                UI.resetGrid();
                UI.displayGrid(grid.getGridData());
            }
            else if (event.key == 'Enter'){
                if(grid.cell==4){
                    grid.submitWord();
                    UI.resetGrid();
                    UI.displayGrid(grid.getGridData());
                }
                else{
                    alert("You can't submit yet!")
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