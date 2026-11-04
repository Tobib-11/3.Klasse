import { Student } from "./student.ts";

export class StudienGang {
    private _titel: string = "";
    private _regelzeit: number = 0;
    private _abschluss: number = 0;
    private _studenten: Student[] = [];

    constructor(titel: string, regelzeit: number, abschluss: number) {
        this._regelzeit = regelzeit;
        this._abschluss = abschluss;
        this._titel = titel;
    }

    get regelzeit(): number {
        return this._regelzeit;
    }

    set regelzeit(value: number) {
        this._regelzeit = value;
    }

    get titel(): string {
        return this._titel;
    }

    set titel(value: string) {
        this._titel = value;
    }

    get abschluss(): number {
        return this._abschluss;
    }

    set abschluss(value: number) {
        this._abschluss = value;
    }
    addStudent(student: Student): void {
        this._studenten.push(student);
    }
    printdata() {
        console.log("\n=== STUDIENGANG ==="); // Überschrift mit Abständen
        console.log(`Titel:        ${this._titel}`);
        console.log(`Regelzeit:    ${this._regelzeit} Semester`);
        console.log(`Abschluss:    ${this._abschluss}`);
        console.log("\n--- Studenten ---"); // Klare Trennung

        // Studenten mit Einrückung und Nummerierung ausgeben
        for (let i = 0; i < this._studenten.length; i++) {
            console.log(`\n  ${i + 1}. Student:`);
            this._studenten[i].printdata(); // Annahme: Student.printdata() gibt Name/Note/Matr.-Nr. aus
        }
        console.log("\n===================\n"); // Doppelte Trennlinie für bessere Lesbarkeit
    }
}
