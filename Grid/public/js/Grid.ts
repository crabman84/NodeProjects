
// const SquareClass = require("./SquareClass.ts");

class Grid{
    private _squareArray: Array<Array<Square>>;
    private _squareRowArray: Array<Square>;
    private _rows: number;
    private _cols: number;
    private _colLength: number;
    private _rowLength: number;
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    public constructor(noOfRows: number, noOfColumns: number){
        var lGridColRatio = 1/noOfColumns;
        var lGridRowRatio  = 1/noOfRows;
        this._rows = noOfRows;
        this._cols = noOfColumns;
        console.log('NUmber of rows of Grid: ' + noOfRows);

        this._canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this._context = this._canvas.getContext("2d");        //TODO: Make an array of squares        
        
        var lGridColRatio = 1 / noOfColumns;
        this._colLength = lGridColRatio * this._canvas.width; //columns
        this._rowLength = lGridRowRatio * this._canvas.height; //rows
        
        // this._squareArray = Square[];
        this._squareArray = new Array(noOfColumns);
        console.log("No of columns in Grid: " + this._squareArray.length);
        for (var i = 0; i < this._squareArray.length; i++) {
            this._squareArray[i] = new Array<Square>(noOfRows);
        }
        // this._squareRowArray = new Array<Square>(noOfRows);

        //set size of Square array here
        for (var i = 0; i < this._squareArray.length; i++ ) {
            for (var j = 0; j < this._squareArray[i].length; j++) {
                this._squareArray[i][j] = new Square(i * this._colLength, j * this._rowLength, this._colLength, this._rowLength,  this._context);
            }
        }
        // this._squareArray = Square[5];
    }
    // public RemoveSideRandom(side: string){

    // }

    public DrawMe(): string[]{
        //TODO: Draw array of squares to make grid form
        //foreach square in squareArray
        let args = ["test Grid Draw"];
        for (var i = 0; i < this._squareArray.length; i++) {
                for (var j = 0; j < this._squareArray[i].length; j++) {
                console.log('Square ' + '(' + i + ', '+ j + ')');
                // this._squareRowArray[i].DrawMe();
                this._squareArray[i][j].DrawMe();
            }
       }   
        return args;
    }
    // get sName(): string {
    //     return this._sName;
    // }
    // set sName(value: string) {
    //     this._sName = value;
    // }
}
// module.exports = Grid;