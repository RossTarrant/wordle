export default class Grid{

    constructor(){
        this.gridData = [[],[],[],[],[]]
        this.row = 0;
        this.cell = 0;
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

    nextRow(){
        this.row ++;
    }

    nextCell(){
        this.cell ++;
    }

    addLetter(letter){
        this.gridData[this.row][this.cell] = letter;
        if(this.cell<4){
            this.nextCell();
        }
    }

    removeLetter(){
        this.gridData[this.row][this.cell] = "";
        if(this.cell>0){
            this.cell --;
        }
    }

    submitWord(){
        this.nextRow();
        this.cell = 0;
    }

}