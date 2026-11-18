import { Student } from "../21.10.2026_Aufgabe_OneNote/Objekte/student.ts";
import { StudienGang } from "../21.10.2026_Aufgabe_OneNote/Objekte/studiengang.ts";
import { Uni } from "../21.10.2026_Aufgabe_OneNote/Objekte/uni.ts";

const studienGangArr: StudienGang[] = [];
const uniArr: Uni[] = [];

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

// array uni
const universitaeten = [
    "Universität Wien",
    "Universität Innsbruck",
    "Karl-Franzens-Universität Graz",
    "Johannes Kepler Universität Linz",
    "Paris-Lodron-Universität Salzburg",
];

const unistandorte = [
    "Wien",
    "Innsbruck",
    "Graz",
    "Linz",
    "Salzburg",
];

//Studiengang
const anzahlAusgabe = 1;
for (let i = 0; i < anzahlAusgabe; i++) {
    const randomTitel =
        arrayStudienGang[Math.floor(Math.random() * arrayStudienGang.length)];
    const randomRegelzeit = Math.floor(Math.random() * 10) + 1;
    const randomAbschluss = Math.floor(Math.random() * 10) + 2026;
    studienGangArr.push(
        new StudienGang(randomTitel, randomRegelzeit, randomAbschluss),
    );
}

for (let i = 0; i < anzahlAusgabe; i++) {
    const randomNameUni =
        universitaeten[Math.floor(Math.random() * universitaeten.length)];
    const randomstandort =
        unistandorte[Math.floor(Math.random() * unistandorte.length)];
    const randomGruendungsjahr = Math.floor(Math.random() * 2025) + 1916;

    uniArr.push(
        new Uni(randomNameUni, randomstandort, randomGruendungsjahr),
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

    randomStudiengang.addStudent(student);

    //random uni
    const randomUni = uniArr[Math.floor(Math.random() * uniArr.length)];
    randomStudiengang.addUni(randomUni);
}

for (const gang of studienGangArr) {
    gang.printdata();
}
