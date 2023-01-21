import words from './data/words.txt'

export default class Grid{

    constructor(){
        this.gridData = [[],[],[],[],[]]
        this.colourData = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        this.row = 0;
        this.cell = 0;
        this.word = this.setWord();
    }

    setWord(){
        let wordsList = words.split('\n')
        const word = wordsList[Math.floor(Math.random() * wordsList.length)];
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
            if(this.checkLetter(this.gridData[this.row][i]) && this.checkPosition(i)){
                colourData.push(2);
            }
            else if (this.checkLetter(this.gridData[this.row][i])){
                colourData.push(1);
            }
            else{
                colourData.push(0);
            }

        }
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