import UI from './UI.js';
import Grid from './Grid.js';
import words from './data/words.txt'

export default class controller{

    static initLoad(){
        let grid = new Grid();
        UI.displayGrid(grid.getGridData(), grid.colourData);
        UI.displayKeyboard(grid);
        this.addKeyboardListener(grid);
        this.addButtonListeners(grid);
    }

    static addKeyboardListener(grid){
        document.addEventListener('keydown', (event) => {
            if(grid.activeGame==true){
                if(this.isLetter(event.key)){
                    this.addLetter(grid, event.key);
                }
                else if(event.key == 'Backspace'){
                    this.removeLetter(grid);
                }
                else if (event.key == 'Enter'){
                    this.enterWord(grid);
                }
            }
        })
    }

    static addButtonListeners(grid){
        const keyboard = UI.getKeyboard();

        const backspace = keyboard.querySelector('.backspace')
        backspace.addEventListener('click', () => {
            this.removeLetter(grid);
        });

        const enter = keyboard.querySelector('.enter')
        enter.addEventListener('click', () => {
            this.enterWord(grid);
        });

        const keys = keyboard.querySelectorAll('.key-letter');
        keys.forEach(key => {
            key.addEventListener('click', () => {
                this.addLetter(grid, key.textContent);
            })
        })
    }

    static addLetter(grid, letter){
        grid.addLetter(letter.toUpperCase());
        this.refreshGrid(grid)
    }

    static removeLetter(grid){
        grid.removeLetter();
        this.refreshGrid(grid)
    }

    static enterWord(grid){
        if(grid.cell==5){
            if(this.isWord(grid.getCurrentWord())){
                if(this.validateWord(grid.getCurrentWord(), grid.word))
                {
                    let rowColours = grid.submitWord();
                    grid.colourData[grid.row-1] = rowColours;
                    this.refreshGrid(grid);
                    this.win(grid)
                }
                else{
                    let rowColours = grid.submitWord();
                    grid.colourData[grid.row-1] = rowColours;
                    this.refreshGrid(grid)
                }
            }
            else{
                alert('Invalid word...')
            }
        }
        else{
            // invalid word animation
        }
        if(grid.row == 5){
            grid.activeGame = false
            this.lose(grid);
        }
    }

    static refreshGrid(grid){
        UI.resetGrid();
        UI.refreshKeyboard();
        UI.displayGrid(grid.getGridData(), grid.colourData);
        UI.displayKeyboard(grid);
        this.addButtonListeners(grid);
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

    static validateWord(currentWord, word){
        return currentWord.toUpperCase()==word;
    }

    static win(grid){
        grid.activeGame = false
        alert('You win!')
    }

    static lose(grid){
        alert(`You lose! The word was ${grid.word}`)
    }
}