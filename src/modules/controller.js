import UI from './UI.js';
import Grid from './Grid.js';
import words from './data/words.txt'

export default class controller{

    static initLoad(){
        let grid = new Grid();
        UI.displayGrid(grid.getGridData(), grid.colourData);
        this.addKeyboardListener(grid);
    }

    static addKeyboardListener(grid){
        document.addEventListener('keydown', (event) => {
            if(this.isLetter(event.key)){
                this.addLetter(grid, event.key);
            }
            else if(event.key == 'Backspace'){
                grid.removeLetter();
                this.refreshGrid(grid)
            }
            else if (event.key == 'Enter'){
                if(grid.cell==5){
                    if(this.isWord(grid.getCurrentWord())){
                        let rowColours = grid.submitWord();
                        grid.colourData[grid.row-1] = rowColours;
                        this.refreshGrid(grid)
                    }
                    else{
                        alert('Invalid word...')
                    }
                }
                else{
                    // animation
                }
            }
        })
    }

    static addLetter(grid, letter){
        grid.addLetter(letter.toUpperCase());
        this.refreshGrid(grid)
    }

    static refreshGrid(grid){
        UI.resetGrid();
        UI.displayGrid(grid.getGridData(), grid.colourData);
    }

    static isLetter(c){
        return c.length === 1 && c.match(/[a-z]/i);
    }

    static isWord(word){
        let wordsList = words.split('\n')
        for(let i = 0; i < wordsList.length; i++){
            if(word==wordsList[i]){
                return true
            }
        }
        return false
    }
}