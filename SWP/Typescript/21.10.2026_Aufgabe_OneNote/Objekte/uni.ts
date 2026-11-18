export class Uni {
    private _nameUni: string = "";
    private _standort: string = "";
    private _gruendungsjahr: number = 0;

    constructor(nameUni: string, standort: string, gruendungsjahr: number) {
        this._nameUni = nameUni;
        this._standort = standort;
        this._gruendungsjahr = gruendungsjahr;
    }

    get nameUni(): string {
        return this._nameUni;
    }

    set nameUni(value: string) {
        this._nameUni = value;
    }

    get standort(): string {
        return this._standort;
    }

    set standort(value: string) {
        this._standort = value;
    }

    get gruendungsjahr(): number {
        return this._gruendungsjahr;
    }

    set gruendungsjahr(value: number) {
        this._gruendungsjahr = value;
    }

    printdata() {
        console.log("Name der Uni: " + this._nameUni);
        console.log("Standort: " + this._standort);
        console.log("Gründungsjahr " + this._gruendungsjahr);
    }
}