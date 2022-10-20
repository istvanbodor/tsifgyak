

interface Results {

    winner : string;
    date : Date;
    result() : string;

}


class Football implements Results{

    winner : string;
    #hazaigol : number;
    #vendeggol : number;
    date : Date;

    constructor (winner: string, hazaigol : number, vendeggol: number, datum : Date){
        this.winner = winner;
        this.#hazaigol = hazaigol;
        this.#vendeggol = vendeggol;
        this.date = datum;
    }

    result() : string {
        return "Football match: " +this.#hazaigol +"-"+this.#vendeggol;
    }

}


class Marathon implements Results {

    winner : string;
    date : Date;

    constructor (winner : string, date : Date) {

        this.winner = winner;
        this.date = date;

    }

    result(): string {
        return "Marathon: "+this.date.getMinutes() +" min "+this.date.getSeconds()+" s";
    }

}


class Calvinball implements Results {

    #winner : string = '';
    date : Date;
    eredmeny : number;

    constructor (winner : string, date : Date) {
        this.winner = winner;
        this.date = date;
        this.eredmeny = Math.floor(Math.random()*90+10);
    }
    result(): string {
        return "Calvinball: " + this.eredmeny +" points";
    }



    set winner(winner : string) {
        if (winner != "Calvin" && winner != "Hobbes") {
            throw console.error("");
        }
        else {
            this.#winner= winner;
        }
    }

    get winner() {
        return this.#winner;
    }

}

let eredmenyek : Results[] = [

    new Calvinball("Calvin", new Date()),
    new Calvinball("Hobbes", new Date()),
    new Marathon("futo", new Date(2022, 10, 10, 10, 3, 50)),
    new Football("Real madrid", 4,3, new Date()),
];

for (let elem of eredmenyek)
{
    console.log(elem.result());
}



