import words from './data/words.txt'

export default class Grid{

    constructor(){
        this.gridData = [[],[],[],[],[]]
        this.colourData = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        this.incorrectLetters = [];
        this.posLetters = [];
        this.correctLetters = [];
        this.row = 0;
        this.cell = 0;
        this.activeGame = true;
        this.word = this.setWord();
    }

    setWord(){
        let wordsList = words.split('\n')
        const word = wordsList[Math.floor(Math.random() * wordsList.length)];
        console.log(word)
        return word.toUpperCase();
    }

    getGridData(){
        return this.gridData;
    }

    getRow(){
        return this.row;
    }

    getCell(){
        return this.cell;
    }

    getCurrentWord(){
        return this.gridData[this.row].join('').toLowerCase()
    }

    nextRow(){
        this.row ++;
    }

    nextCell(){
        this.cell ++;
    }

    addLetter(letter){
        if(this.cell<5){
            this.gridData[this.row][this.cell] = letter;
            this.nextCell();
        }
    }

    removeLetter(){
        this.gridData[this.row][this.cell -1] = "";
        if(this.cell>0){
            this.cell --;
        }
    }

    submitWord(){
        let colourData = []
        for(let i = 0; i < 5; i++){
            const letter = this.gridData[this.row][i];
            if(this.checkLetter(letter) && this.checkPosition(i)){
                if(!this.correctLetters.includes(letter)){
                    this.correctLetters.push(letter);
                };
                colourData.push(2);
            }
            else if (this.checkLetter(this.gridData[this.row][i])){
                if(!this.posLetters.includes(letter)){
                    this.posLetters.push(letter);
                };
                colourData.push(1);
            }
            else{
                if(!this.incorrectLetters.includes(letter)){
                    this.incorrectLetters.push(letter);
                };
                colourData.push(0);
            }

        }
        console.log(this.correctLetters);
        console.log(this.posLetters);
        console.log(this.incorrectLetters);
        this.nextRow();
        this.cell = 0;
        return colourData;
    }

    checkLetter(letter){
        return this.word.indexOf(letter) > -1;
    }

    checkPosition(pos){
        return (this.word[pos]==this.gridData[this.row][pos])
    }

}