import { Student } from "../21.10.2026_Aufgabe_OneNote/Objekte/student.ts";
import { StudienGang } from "../21.10.2026_Aufgabe_OneNote/Objekte/studiengang.ts";
import { Uni } from "../21.10.2026_Aufgabe_OneNote/Objekte/uni.ts";

function frage(text: string): string {
    const buffer = new Uint8Array(1024);
    Deno.stdout.writeSync(new TextEncoder().encode(`${text}\n> `));

    const bytesGelesen = Deno.stdin.readSync(buffer);

    if (bytesGelesen === null) {
        return "";
    }

    return new TextDecoder()
        .decode(buffer.subarray(0, bytesGelesen))
        .trim();
}

const studienGangArr: StudienGang[] = [];
const uniArr: Uni[] = [];
const studentenArr: Student[] = [];

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

const anzahlAusgabe = 15;

// Studiengänge erstellen
for (let i = 0; i < anzahlAusgabe; i++) {
    const randomTitel =
        arrayStudienGang[Math.floor(Math.random() * arrayStudienGang.length)];
    const randomRegelzeit = Math.floor(Math.random() * 10) + 1;
    const randomAbschluss = Math.floor(Math.random() * 10) + 2026;

    studienGangArr.push(
        new StudienGang(randomTitel, randomRegelzeit, randomAbschluss),
    );
}

// Universitäten erstellen
for (let i = 0; i < anzahlAusgabe; i++) {
    // Derselbe Index sorgt dafür, dass Uni-Name und Standort zusammenpassen.
    const randomUniIndex = Math.floor(Math.random() * universitaeten.length);
    const randomNameUni = universitaeten[randomUniIndex];
    const randomStandort = unistandorte[randomUniIndex];

    // Zufälliges Gründungsjahr zwischen 1850 und 1999
    const randomGruendungsjahr = Math.floor(Math.random() * 150) + 1850;

    uniArr.push(
        new Uni(randomNameUni, randomStandort, randomGruendungsjahr),
    );
}

// Studenten erstellen und Studiengängen sowie Universitäten zuordnen
for (let i = 0; i < anzahlAusgabe; i++) {
    const randomMatrikelnummer = Math.floor(Math.random() * 6000) + 1;
    const randomNote = Math.floor(Math.random() * 6) + 1;
    const randomName =
        arrayStudent[Math.floor(Math.random() * arrayStudent.length)];

    const student = new Student(
        randomMatrikelnummer,
        randomNote,
        randomName,
    );

    studentenArr.push(student);

    const randomStudiengang =
        studienGangArr[Math.floor(Math.random() * studienGangArr.length)];

    randomStudiengang.addStudent(student);

    const randomUni =
        uniArr[Math.floor(Math.random() * uniArr.length)];

    randomStudiengang.addUni(randomUni);
}

// Hauptmenü
const startAuswahl = frage(
    "Willkommen zur Studenten- und Studiengangsverwaltung!\n\n" +
        "Bitte wähle eine Aktion:\n" +
        "1 = Alle Daten anzeigen\n" +
        "2 = Einen bestimmten Eintrag suchen",
);

if (startAuswahl === "1") {
    console.log("\nAlle Studiengänge mit zugehörigen Universitäten und Studenten:");

    for (const gang of studienGangArr) {
        gang.printdata();
    }
} else if (startAuswahl === "2") {
    const suchBereich = frage(
        "\nIn welchem Bereich möchtest du suchen?\n" +
            "1 = Student – Suche nach Name oder Matrikelnummer\n" +
            "2 = Studiengang – Suche nach dem Titel\n" +
            "3 = Universität – Suche nach Name oder Standort",
    );

    const suchBegriff = frage(
        "\nGib deinen Suchbegriff ein. Du kannst auch nur einen Teil eingeben:",
    ).toLowerCase();

    if (suchBereich === "1") {
        const treffer = studentenArr.filter(
            (student) =>
                student.name.toLowerCase().includes(suchBegriff) ||
                student.matrikelnummer.toString().includes(suchBegriff),
        );

        if (treffer.length > 0) {
            console.log(`\n${treffer.length} passende Studenten gefunden.`);
            console.log("Die zugehörigen Studiengänge werden vollständig angezeigt.");

            const passendeStudiengaenge = studienGangArr.filter((gang) =>
                gang.studenten.some((student) => treffer.includes(student)),
            );

            for (const gang of passendeStudiengaenge) {
                gang.printdata();
            }
        } else {
            console.log("\nKein passender Student gefunden.");
        }
    } else if (suchBereich === "2") {
        const treffer = studienGangArr.filter((gang) =>
            gang.titel.toLowerCase().includes(suchBegriff),
        );

        if (treffer.length > 0) {
            console.log(`\n${treffer.length} passende Studiengänge gefunden:`);

            for (const gang of treffer) {
                gang.printdata();
            }
        } else {
            console.log("\nKein passender Studiengang gefunden.");
        }
    } else if (suchBereich === "3") {
        const treffer = uniArr.filter(
            (uni) =>
                uni.nameUni.toLowerCase().includes(suchBegriff) ||
                uni.standort.toLowerCase().includes(suchBegriff),
        );

        if (treffer.length > 0) {
            console.log(`\n${treffer.length} passende Universitäten gefunden.`);
            console.log("Die zugehörigen Studiengänge werden vollständig angezeigt.");

            const passendeStudiengaenge = studienGangArr.filter((gang) =>
                gang.unis.some((uni) => treffer.includes(uni)),
            );

            if (passendeStudiengaenge.length > 0) {
                for (const gang of passendeStudiengaenge) {
                    gang.printdata();
                }
            } else {
                for (const uni of treffer) {
                    uni.printdata();
                }
            }
        } else {
            console.log("\nKeine passende Universität gefunden.");
        }
    } else {
        console.log("\nUngültige Auswahl. Bitte gib 1, 2 oder 3 ein.");
    }
} else {
    console.log("\nUngültige Auswahl. Bitte gib 1 oder 2 ein.");
}