export class Student {
    private _matrikelnummer: number = 0;
    private _note: number = 0;
    private _name: string = "";

    constructor(matrikelnummer: number, note: number, name: string) {
        this._matrikelnummer = matrikelnummer;
        this._name = name;
        this._note = note;
    }

    printdata() {
        
        console.log("Matrikelnummer: " + this._matrikelnummer);
        console.log("Note: " + this._note);
        console.log("Name: " + this._name);
        console.log("---------------");
    }
}
