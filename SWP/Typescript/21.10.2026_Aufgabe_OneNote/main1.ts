import { Student } from "./student.ts";
import { StudienGang } from "./studiengang.ts";

const studienGangArr: StudienGang[] = [];

//array student
const arrayStudent = [
    "Anna",
    "Ben",
    "Clara",
    "David",
    "Elena",
    "Felix",
    "Greta",
    "Hannah",
    "Ivan",
    "Julia",
    "Kilian",
    "Lena",
    "Max",
    "Nora",
    "Oliver",
];

//array gang
const arrayStudienGang = [
    "Bachelor of Arts (B.A.)",
    "Bachelor of Science (B.Sc.)",
    "Master of Arts (M.A.)",
    "Master of Science (M.Sc.)",
    "Diplom (Dipl.-Ing., Dipl.-Kffr.)",
    "Magister (Mag.)",
    "Doktorat (Dr., PhD)",
    "Master of Laws (LL.M.)",
    "Master of Business Administration (MBA)",
    "Fachhochschul-Diplom / Bachelor Professional",
];

//Studiengang
const anzahlAusgabe = 2;
for (let i = 0; i < anzahlAusgabe; i++) {
    const randomTitel =
        arrayStudienGang[Math.floor(Math.random() * arrayStudienGang.length)];
    const randomRegelzeit = Math.floor(Math.random() * 10) + 1; 
    const randomAbschluss = Math.floor(Math.random() * 10) + 2026; 
    studienGangArr.push(
        new StudienGang(randomTitel, randomRegelzeit, randomAbschluss),
    );
}
//Studenten

for (let ausgabe = 0; ausgabe < anzahlAusgabe; ausgabe++) {
    // Zufälligen Studenten erstellen
    const randomValue = Math.floor(Math.random() * 6000) + 1;
    const randomNote = Math.floor(Math.random() * 6) + 1;
    const randomStudent =
        arrayStudent[Math.floor(Math.random() * arrayStudent.length)];

    const student = new Student(randomValue, randomNote, randomStudent); 

    // Zufälligen Studiengang auswählen
    const randomStudiengang =
        studienGangArr[Math.floor(Math.random() * studienGangArr.length)];

    // ⬇⬇⬇ KORRIGIERT: Variable heißt randomStudiengang (nicht randomGang) + student erstellen
    randomStudiengang.addStudent(student);
}

// ⬇⬇⬇ KORRIGIERT: Ausgabe über studienGangArr (nicht studentarr)
for (const gang of studienGangArr) {
    gang.printdata();
}
