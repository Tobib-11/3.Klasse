export class Student {
    private _matrikelnummer: number = 0;
    private _note: number = 0;
    private _name: string = "";

    constructor(matrikelnummer: number, note: number, name: string) {
        this._matrikelnummer = matrikelnummer;
        this._name = name;
        this._note = note;
    }

    get name(): string {
        return this._name;
    }

    get matrikelnummer(): number {
        return this._matrikelnummer;
    }

    printdata() {
        console.log("\n=== Studenten ===");
        console.log("Matrikelnummer: " + this._matrikelnummer);
        console.log("Note: " + this._note);
        console.log("Name: " + this._name);
        console.log("---------------");
    }
}