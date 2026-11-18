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
    //vo ki
    get studenten(): Student[] {
    return this._studenten;
}

get unis(): Uni[] {
    return this._unis;
}

    printdata() {
    console.log("\n╔══════════════════════════════════════════╗");
    console.log("║              STUDIENGANG                 ║");
    console.log("╚══════════════════════════════════════════╝");

    console.log(`Titel:      ${this._titel}`);
    console.log(`Regelzeit:  ${this._regelzeit} Semester`);
    console.log(`Abschluss:  ${this._abschluss}`);

    console.log("\nUniversität(en):");

    if (this._unis.length === 0) {
        console.log("  Keine Universität zugeordnet.");
    } else {
        // Doppelte Unis anhand ihres Namens ausblenden
        const eindeutigeUnis = [
            ...new Map(this._unis.map((uni) => [uni.nameUni, uni])).values(),
        ];

        for (const uni of eindeutigeUnis) {
            console.log(`  • ${uni.nameUni} – ${uni.standort} (gegründet ${uni.gruendungsjahr})`);
        }
    }

    console.log(`\nStudenten (${this._studenten.length}):`);

    if (this._studenten.length === 0) {
        console.log("  Keine Studenten eingeschrieben.");
    } else {
        for (const student of this._studenten) {
            console.log(
                `  • ${student.name} | Matrikelnummer: ${student.matrikelnummer}`,
            );
        }
    }

    console.log("\n" + "─".repeat(46));
}
}
