"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Football_hazaigol, _Football_vendeggol, _Calvinball_winner;
class Football {
    constructor(winner, hazaigol, vendeggol, datum) {
        _Football_hazaigol.set(this, void 0);
        _Football_vendeggol.set(this, void 0);
        this.winner = winner;
        __classPrivateFieldSet(this, _Football_hazaigol, hazaigol, "f");
        __classPrivateFieldSet(this, _Football_vendeggol, vendeggol, "f");
        this.date = datum;
    }
    result() {
        return "Football match: " + __classPrivateFieldGet(this, _Football_hazaigol, "f") + "-" + __classPrivateFieldGet(this, _Football_vendeggol, "f");
    }
}
_Football_hazaigol = new WeakMap(), _Football_vendeggol = new WeakMap();
class Marathon {
    constructor(winner, date) {
        this.winner = winner;
        this.date = date;
    }
    result() {
        return "Marathon: " + this.date.getMinutes() + " min " + this.date.getSeconds() + " s";
    }
}
class Calvinball {
    constructor(winner, date) {
        _Calvinball_winner.set(this, '');
        this.winner = winner;
        this.date = date;
        this.eredmeny = Math.floor(Math.random() * 90 + 10);
    }
    result() {
        return "Calvinball: " + this.eredmeny + " points";
    }
    set winner(winner) {
        if (winner != "Calvin" && winner != "Hobbes") {
            throw console.error("");
        }
        else {
            __classPrivateFieldSet(this, _Calvinball_winner, winner, "f");
        }
    }
    get winner() {
        return __classPrivateFieldGet(this, _Calvinball_winner, "f");
    }
}
_Calvinball_winner = new WeakMap();
let eredmenyek = [
    new Calvinball("Calvin", new Date()),
    new Calvinball("Hobbes", new Date()),
    new Marathon("futo", new Date(2022, 10, 10, 10, 3, 50)),
    new Football("Real madrid", 4, 3, new Date()),
];
/*for (let elem of eredmenyek)
{
    console.log(elem.result());
}*/
for (let elem of eredmenyek) {
    if (elem.winner == "Calvin") {
        console.log(elem.result());
    }
}
