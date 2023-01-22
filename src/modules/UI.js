import controller from "./controller";

export default class UI{

    static resetGrid(){
        const content = document.querySelector('.content');
        const grid = document.querySelector('.grid');
        content.removeChild(grid);
    }

    static refreshKeyboard(){
        const content = document.querySelector('.content');
        const keyboard = document.querySelector('.keyboard');
        content.removeChild(keyboard);
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

    static displayKeyboard(grid){
        const content = document.querySelector('.content');
        const keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');

        const row1 = document.createElement('div');
        row1.classList.add('row1');
        let row1Keys = ['Q','W','E','R','T','Y','U','I','O','P']
        for(let i = 0; i < 10; i++){
            const key = document.createElement('div');
            key.classList.add('key-letter');
            key.textContent = row1Keys[i];
            row1.appendChild(key);
        }
        keyboard.append(row1);

        const row2 = document.createElement('div');
        row2.classList.add('row2');
        let row2Keys = ['A','S','D','F','G','H','J','K','L']
        for(let i = 0; i < 9; i++){
            const key = document.createElement('div');
            key.classList.add('key-letter');
            key.textContent = row2Keys[i];
            row2.appendChild(key);
        }
        keyboard.append(row2);

        const row3 = document.createElement('div');
        row3.classList.add('row3');
        let row3Keys = ['Z','X','C','V','B','N','M']
        const enter = document.createElement('div');
        enter.classList.add('enter');
        enter.textContent = 'ENTER';
        row3.appendChild(enter);
        for(let i = 0; i < 7; i++){
            const key = document.createElement('div');
            key.classList.add('key-letter');
            key.textContent = row3Keys[i];
            row3.appendChild(key);
        }
        const backspace = document.createElement('div');
        backspace.classList.add('backspace');
        backspace.textContent = 'BACKSPACE';
        row3.appendChild(backspace);
        keyboard.append(row3);

        let keys = keyboard.querySelectorAll('.key-letter');
        for(let i = 0; i < keys.length; i++){
            if(grid.incorrectLetters.includes(keys[i].textContent)){
                keys[i].setAttribute('id', 'incorrect')
            }
            else if(grid.correctLetters.includes(keys[i].textContent)){
                keys[i].setAttribute('id', 'pos')
            }
            else if(grid.posLetters.includes(keys[i].textContent)){
                keys[i].setAttribute('id', 'letter')
            }
        }

        content.appendChild(keyboard);
    }

    static getKeyboard(){
        const content = document.querySelector('.content');
        const keyboard = document.querySelector('.keyboard');
        return keyboard;
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