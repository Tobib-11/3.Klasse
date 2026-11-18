import { Student } from "./student.ts";
import { Uni } from "./uni.ts";

export class StudienGang {
    private _titel: string = "";
    private _regelzeit: number = 0;
    private _abschluss: number = 0;
    private _studenten: Student[] = [];
    private _unis: Uni[] = [];

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
    addUni(uni: Uni): void {
        this._unis.push(uni);
    }

    printdata() {
        console.log("\n=== STUDIENGANG ===");
        console.log(`Titel: ${this._titel}`);
        console.log(`Regelzeit: ${this._regelzeit} Semester`);
        console.log(`Abschluss: ${this._abschluss}`);
        console.log("===================\n");

        // --- Unis ausgeben ---
        console.log("\n=== Universitäten ===");
        for (let i = 0; i < this._unis.length; i++) {
            this._unis[i].printdata();
        }
        console.log("===================\n");

        // --- Studenten ausgeben (NUR EINMAL!) ---
        for (let i = 0; i < this._studenten.length; i++) {
            this._studenten[i].printdata();
        }
        console.log("===================\n");
    }
}
